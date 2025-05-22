import React from 'react';
import { Container } from 'react-bootstrap'; // Keep Container

// Import styles if needed, though react-bootstrap handles much of it
import '../assets/styles/custom.css';

const NotionEmbedPage = () => { // Removed props
  return (
    <> {/* Use Fragment instead of div */}
      {/* Removed AccessibilityPanel and Navbar */}
      <main className="container my-5" id="main-content">
        <h1 className="text-3xl font-bold mb-4">Notion Embed</h1>

        {/* Notion Embed Section */}
        <Container> {/* Use Container for centering/padding */}
          <iframe
            src="https://smoggy-marscapone-73f.notion.site/ebd/1e348e9ec2b880d79614f4632d8c3137"
            width="100%"
            height="600" // Consider adjusting height if needed
            frameBorder="0"
            allowFullScreen
            title="Notion Embed" // Added title for accessibility
          />
        </Container>
      </main>

      {/* Removed Footer */}
    </>
  );
};

export default NotionEmbedPage;