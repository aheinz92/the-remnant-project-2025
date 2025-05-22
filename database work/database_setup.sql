-- ============================================
-- Table: Users
-- Basic user accounts (admins, editors, viewers)
-- Not needed immediately, but holds a place for the most likely
-- necessary data for potential user accounts in the future.
-- ============================================
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    account_type ENUM('admin', 'viewer', 'editor') DEFAULT 'viewer',
    settings JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Table: Items
-- This table stores the core description for every digitized object.
-- Note that here we include extra metadata fields inspired by the 
-- Dublin Core standards, maintaining information about creation, 
-- subjects, formats, rights, etc. These do not need to be a priority
-- right away, but they provide a natural home for later archival information.
-- ============================================
CREATE TABLE Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Basic text fields
    title VARCHAR(255),
    initial_notes TEXT,         -- loose initial text notes when scanning items and no clear title exists
    description TEXT,
	
	-- These fields support Optical Character Recognition (OCR) or other text extraction methods,
	-- to allow searchable texts and readable pages.
	text_extraction LONGTEXT,   -- pure text content extracted from scans and images
	text_reader_audio VARCHAR(1024),  -- the file location path for a pre-generated text-to-speech audio file

    -- Archival Status states whether the archive item is ready to be displayed, or whether it is
	-- newly added and still awaiting review before it should be shown.
	-- For example, user-submitted documents should be set to 'pending' first, and later, 
	-- someone can review the item, update its information, and approve it to join the main archive.
    archival_status ENUM('pending', 'confirmed'),
    
    -- Dublin Core–inspired metadata fields (hence the "dc" prefix).
	-- These can be ignored initially, but it provides a place for this data in the future.
    dc_subject TEXT,            -- e.g., topics or keywords
    dc_creator VARCHAR(255),    -- who originally made/created the item
    dc_publisher VARCHAR(255),  -- who makes the item available
    dc_contributor TEXT,        -- additional contributing entities
    dc_date VARCHAR(32),        -- a date or period (using text allows approximations or ranges)
    dc_type VARCHAR(64),        -- nature or genre of the item (e.g., photograph, document, artifact)
    dc_format VARCHAR(64),      -- file format or physical medium info if applicable
    dc_identifier VARCHAR(255), -- external/internal unique identifier
    dc_source TEXT,             -- if derived from another resource
    dc_language VARCHAR(10),    -- ISO 639 language code
    dc_coverage TEXT,           -- spatial or temporal coverage (e.g., location descriptor)
    dc_rights TEXT,             -- copyright or rights statements

    -- These "timestamp" attributes in every table exist to keep track of when something
	-- was first added or created, as well as the most recent time it was changed.
	-- This will help sorting archive items, for example to see the newest additions, or which 
	-- items were most recently updated; this could be important for archive maintanence.
	-- 
	-- The "created_at" attribute automatically fills itself with the current time.
	-- Similarly, the "updated_at" attribute automatically updates itself to the current time
	-- when any update occurs for this specific record. This means, it will log the current time
	-- if, for example, the title of an object in the archive is edited.
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Table: Media
-- A media file – whether image, video, audio, 3d-scan, or anything else.. 
-- The Media table stores media files that may be attached to Items 
-- or used in other contexts. It distinguishes the file type (such as image 
-- or video) and usage (e.g., full-quality archival vs. reduced quality for display).
-- 
-- A "join table" doesn't exist for item media, because each piece of media is
-- expected to be associated to one single archive item. For example, a photo of 
-- a document is used for that one document and no others.
-- ============================================
CREATE TABLE Media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT DEFAULT NULL,   -- direct association to its archive item
	
	-- more media types can be added later if needed; these are just initial options
    media_type ENUM('image', 'video', 'audio', '3d_scan') NOT NULL,
	
	-- here, we allow for the same media (like a scan) to exist in a high resolution ('archive' quality)
	-- in one record, and another record for the same media in lower resolution ('display' quality),
	-- so that it can be shown without loading as much data. Some applications will do something
	-- like this automatically, but it is also supported within the database explicitly.
    media_usage ENUM('archive', 'display') DEFAULT 'archive', -- distinguishes the resolution/quality
	
	-- the file path or URL of the media itself
    media_url VARCHAR(1024) NOT NULL,
	
	-- An explanation, label, or caption for a single piece of media (different than an item's description).
	-- This is only necessary if extra text is desired alongside a particular image, that isn't captured
	-- on the item's own descriptive details.
    description TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
	-- "ON DELETE SET NULL" means if a linked item is deleted, the association 
	-- is nullified rather than cascading the delete and removing the media too.
    FOREIGN KEY (item_id) REFERENCES Items(item_id) ON DELETE SET NULL
);

-- ============================================
-- Table: Categories
-- Formal, curated subject groupings. Items can later be linked to 
-- categories, which helps organize the content.
-- These are larger groupings chosen by the archivers, and are not
-- user-suggested or contributed.
-- ============================================
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-- ============================================
-- Join Table: Item_Categories
-- Many-to-many relationship: an item can belong to multiple categories,
-- and a category naturally contains multiple items.
-- ============================================
CREATE TABLE Item_Categories (
    item_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (item_id, category_id),  -- this ensure that the same connection isn't duplicated
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- ============================================
-- Table: Tags
-- Tags store community-editable keywords that can later be attached 
-- to items for easier searching and categorization.
-- This empowers the folksonomy of the archive, with users choosing to
-- label items however they wish.
-- ============================================
CREATE TABLE Tags (
    tag_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- ============================================
-- Join Table: Item_Tags
-- Many-to-many relationship: an item can have multiple tags, and a tag
-- can be associated with many different items.
-- ============================================
CREATE TABLE Item_Tags (
    item_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY (item_id, tag_id),  -- this ensure that the same connection isn't duplicated
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (tag_id) REFERENCES Tags(tag_id)
);

-- ============================================
-- Table: Comments
-- The Comments table stores user comments on items. 
-- It may also include an optional media attachment, or only include media.
-- ============================================
CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    user_id INT NOT NULL,
    comment_text TEXT DEFAULT NULL,  -- the text is allowed to be empty, for media-only comments
    media_id INT DEFAULT NULL,  -- if media is submitted when commenting on an item
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id) REFERENCES Items(item_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);

-- ============================================
-- Table: Item_Relationships
-- Captures associations between two items, as defined by anyone using the system.
-- May include extra description or a media reference (such as audio narration).
-- There is a potential for multiple people to draw the same link between items,
-- with their own comments or media explanation, so duplicated links aren't prevented.
-- ============================================
CREATE TABLE Item_Relationships (
    relationship_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id_a INT NOT NULL,  -- one of the two connected items
    item_id_b INT NOT NULL,  -- the other one of the two connected items
    relationship_description TEXT,  -- optional text to illustrate the connection
    media_id INT DEFAULT NULL,  -- optional media to illustrate the connection
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (item_id_a) REFERENCES Items(item_id),
    FOREIGN KEY (item_id_b) REFERENCES Items(item_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);

-- ============================================
-- Table: Special_Collections
-- Curated collections or exhibits (which can also be used 
-- to drive themed presentations in VR or in physical spaces).
-- ============================================
CREATE TABLE Special_Collections (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,   -- a title or label for a collection is made mandatory
    description TEXT,
    curator VARCHAR(255),     -- optional name or reference to the organizer/curator
    location VARCHAR(255),    -- e.g., “Campus Room A”, “VR Room 1”, etc.
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ============================================
-- Join Table: Collection_Items
-- The Collection_Items join table represents the many-to-many relationship 
-- between Special Collections and Items. An item may belong to multiple 
-- collections, and a collection may feature multiple items.
-- ============================================
CREATE TABLE Collection_Items (
    collection_item_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES Special_Collections(collection_id),
    FOREIGN KEY (item_id) REFERENCES Items(item_id)
);

-- ============================================
-- Join Table: Collection_Media
-- Allows a Special Collection to have its own media (for example,
-- a banner image or a promotional video not tied to a specific item).
-- This connects to the same overall "media" table, referencing media that
-- isn't connected to any individual item, but is stored for this collection 
-- display purpose.
-- ============================================
CREATE TABLE Collection_Media (
    collection_media_id INT AUTO_INCREMENT PRIMARY KEY,
    collection_id INT NOT NULL,
    media_id INT NOT NULL,
    FOREIGN KEY (collection_id) REFERENCES Special_Collections(collection_id),
    FOREIGN KEY (media_id) REFERENCES Media(media_id)
);