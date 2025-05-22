import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, Collapse, Button, Form, Table, InputGroup, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import collectionItem3Img from '../assets/images/collectionitem3.png';
import item6Img from '../assets/images/item6.png'; // Use item6 for flyer
import item7Img from '../assets/images/item7.png';

const Item = () => { // Removed props
    // Initialize state from localStorage, defaulting to false (collapsed)
    const [detailsOpen, setDetailsOpen] = useState(() => {
        const storedState = localStorage.getItem('itemDetailsExpanded_placeholder');
        return storedState ? JSON.parse(storedState) : false;
    });
    const [tagFormVisible, setTagFormVisible] = useState(false);
    const [connectionFormVisible, setConnectionFormVisible] = useState(false);

    const toggleDetails = () => {
        setDetailsOpen(!detailsOpen);
    };

    const toggleTagForm = () => {
        setTagFormVisible(!tagFormVisible);
    };

    const toggleConnectionForm = () => {
        setConnectionFormVisible(!connectionFormVisible);
    };

    // Update localStorage whenever detailsOpen changes
    useEffect(() => {
        localStorage.setItem('itemDetailsExpanded_placeholder', JSON.stringify(detailsOpen));
    }, [detailsOpen]);

    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/explore" }}>Search & Explore</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/collection" }}>Historical Photographs</Breadcrumb.Item>
                    <Breadcrumb.Item active>Black Panthers (1969)</Breadcrumb.Item>
                </Breadcrumb>

                <Alert variant="info" className="mt-3 mb-5 alert-subtle-info">
                    This section is a demonstration of archive design and functionality. The items and data presented are for illustrative purposes only.
                </Alert>

                <h1>Black Panthers on steps of Legislative Building, Olympia</h1>
                <div className="text-center my-4">
                    <img
                        src={collectionItem3Img}
                        alt="Black Panthers standing on the steps of the Legislative Building in Olympia"
                        className="img-fluid rounded"
                        style={{ height: '600px' }}
                    />
                </div>

                {/* Item Details Button */}
                <div className="text-center mb-4">
                    <button
                        className={`item-details-button ${!detailsOpen ? 'collapsed' : ''}`}
                        type="button"
                        onClick={toggleDetails}
                        aria-expanded={detailsOpen}
                        aria-controls="detailsCollapse"
                    >
                        Had a good look? Click to learn more...
                    </button>
                </div>

                <Collapse in={detailsOpen}>
                    <div id="detailsCollapse" className="mt-4">
                        <Table className="details-table">
                            <tbody>
                            <tr>
                                <th>Title</th>
                                <td>Black Panthers on steps of Legislative Building, Olympia</td>
                            </tr>
                            <tr>
                                <th>Year</th>
                                <td>1969</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    This photograph documents members of the Black Panther Party of Seattle on the steps of the Legislative Building in Olympia in February, 1969. At this time, the state legislature was reviewing a law that restricted individuals' right to carry unconcealed weapons. The Black Panther Party informed the public of their intent to protest the law, and in response Governor Evans called out the National Guard. The Guard soldiers patrolled the capitol for almost a week but were eventually withdrawn. After the National Guard departed, the Panthers made their way to Olympia where Aaron Dixon, their leader, read a statement to the Ways and Means Committee. The rest of the group staged the protest captured in this photograph.
                                </td>
                            </tr>
                            <tr>
                                <th>Collections</th>
                                <td>
                                    <Link to="/collection" className="btn btn-secondary btn-sm">Documents that changed the Civil Rights Movements</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>Categories</th>
                                <td>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Black Panthers")}`} className="btn btn-secondary btn-sm me-1 mb-1">Black Panthers</Link>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Legislation")}`} className="btn btn-secondary btn-sm me-1 mb-1">Legislation</Link>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Civil Rights")}`} className="btn btn-secondary btn-sm me-1 mb-1">Civil Rights</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>Tags</th>
                                <td>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Protest")}`} className="btn btn-secondary btn-sm me-1 mb-1">Protest</Link>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Black & White Photo")}`} className="btn btn-secondary btn-sm me-1 mb-1">Black & White Photo</Link>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Olympia Capitol")}`} className="btn btn-secondary btn-sm me-1 mb-1">Olympia Capitol</Link>
                                    <Link to={`/searchresults?query=${encodeURIComponent("Guns")}`} className="btn btn-secondary btn-sm me-1 mb-1">Guns</Link>
                                    <button
                                        type="button"
                                        className="tag-button me-1 mb-1"
                                        onClick={toggleTagForm}
                                    >
                                        + Suggest Tag
                                    </button>

                                    {tagFormVisible && (
                                        <div className="tag-form mt-2" style={{ display: 'block' }}>
                                            <InputGroup className="mb-2">
                                                <Form.Control placeholder="Search existing tags or create new ones" />
                                                <Button variant="secondary">Submit Tag</Button>
                                            </InputGroup>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <th>Source</th>
                                <td>State Governors' Negative Collection 1949-1975</td>
                            </tr>
                            <tr>
                                <th>Type</th>
                                <td>Photograph</td>
                            </tr>
                            <tr>
                                <th>Connections</th>
                                <td>
                                    {/* Connections with Images */}
                                    <div className="d-flex align-items-center mb-2">
                                        <img src={item6Img} alt="Flyer for civil rights rally, 1969" style={{ width: '50px', height: 'auto', marginRight: '10px', borderRadius: '4px' }} />
                                        <Link to="/item" className="btn btn-secondary btn-sm">Flyer for civil rights rally, 1969</Link>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <img src={item7Img} alt="Legislative notes on firearm laws, 1970" style={{ width: '50px', height: 'auto', marginRight: '10px', borderRadius: '4px' }} />
                                        <Link to="/item" className="btn btn-secondary btn-sm">Legislative notes on firearm laws, 1970</Link>
                                    </div>

                                    {/* Suggest Connection Button */}
                                    <div className="mt-2">
                                        <button
                                            type="button"
                                            className="tag-button me-1 mb-1"
                                            onClick={toggleConnectionForm}
                                        >
                                            + Suggest Connection
                                        </button>

                                        {connectionFormVisible && (
                                            <div className="mt-2">
                                                <InputGroup className="mb-2">
                                                    <Form.Control placeholder="Search for items to connect" />
                                                    <Button variant="secondary">Submit</Button>
                                                </InputGroup>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                            {/* Removed Related Items row - Merged into Connections */}
                            <tr>
                                <th>Comments</th>
                                <td>
                                    <Form>
                                        <Form.Group className="mb-2">
                                            <Form.Control as="textarea" rows={3} placeholder="Add your comment..." />
                                        </Form.Group>
                                        <Button variant="secondary" size="sm" type="submit">Submit</Button>
                                    </Form>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Collapse>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Item;