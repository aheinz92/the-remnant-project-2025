import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card, Dropdown, Alert } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

// Import images
import item1Img from '../assets/images/item1.png';
import item2Img from '../assets/images/item2.png';
import item3Img from '../assets/images/item3.png';
import item4Img from '../assets/images/item4.png';
import item5Img from '../assets/images/item5.png';
import item6Img from '../assets/images/item6.png';
import item7Img from '../assets/images/item7.png';
import item8Img from '../assets/images/item8.png';
import collectionItem3Img from '../assets/images/collectionitem3.png';

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || ''; // Get query or default to empty string

    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <Alert variant="info" className="mt-3 mb-5 alert-subtle-info">
                    This section is a demonstration of archive design and functionality. The items and data presented are for illustrative purposes only.
                </Alert>
                <h1>Search Results</h1>

                {/* Search Bar */}
                <Form className="mb-4" role="search">
                    <InputGroup>
                        <Form.Label htmlFor="searchQuery" className="sr-only">Search the archive</Form.Label>
                        <Form.Control
                            id="searchQuery"
                            type="text"
                            name="query"
                            placeholder="Search items..."
                            defaultValue={query} // Use the query from URL
                        />
                        <Button variant="secondary" type="submit">
                            <i className="fas fa-search me-2"></i>Search
                        </Button>
                    </InputGroup>
                </Form>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="mb-0">Showing 25 results for "<strong>{query}</strong>"</p> {/* Use the query from URL */}
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="sortDropdown">
                            Sort: Relevance
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Relevance</Dropdown.Item>
                            <Dropdown.Item href="#">Date (Newest)</Dropdown.Item>
                            <Dropdown.Item href="#">Date (Oldest)</Dropdown.Item>
                            <Dropdown.Item href="#">A-Z</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Row className="mb-4">
                    {/* Filter Sidebar */}
                    <Col md={3}>
                        <Card className="mb-3">
                            <Card.Header>Filter Results</Card.Header>
                            <Card.Body>
                                <h6>Item Type</h6>
                                <Form.Check
                                    type="checkbox"
                                    id="typePhoto"
                                    label="Photographs (14)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="typeDocument"
                                    label="Documents (8)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="typeAudio"
                                    label="Audio (2)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="typeArtifact"
                                    label="Artifacts (1)"
                                />

                                <hr />

                                <h6>Tags</h6>
                                <InputGroup className="mb-2">
                                    <Form.Control size="sm" placeholder="Search for a tag..." />
                                    <Button variant="secondary" size="sm">Go</Button>
                                </InputGroup>
                                <div className="tag-list">
                                    <button className="tag-button">Civil Rights <span className="tag-count">24</span></button>
                                    <button className="tag-button">Protest <span className="tag-count">8</span></button>
                                    <button className="tag-button">1969 <span className="tag-count">5</span></button>
                                    <button className="tag-button">Olympia <span className="tag-count">3</span></button>
                                </div>

                                <hr />

                                <h6>Time Period</h6>
                                <Form.Check
                                    type="checkbox"
                                    id="period1950s"
                                    label="1950s (6)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="period1960s"
                                    label="1960s (11)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="period1970s"
                                    label="1970s (5)"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id="periodOther"
                                    label="Other (3)"
                                />

                                <Button variant="secondary" className="mt-3 w-100">Apply Filters</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Search Results */}
                    <Col md={9}>
                        <Row>
                            {/* Result Cards */}
                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={item1Img} alt="R. Kahlon artwork of an Insurgent" />
                                    <Card.Body>
                                        <Card.Title>R. Kahlon, Insurgent #1, 2013</Card.Title>
                                        <p className="card-text small">Acrylic and graphite on canvas</p>
                                        <Link to="/item" className="btn btn-secondary">View Item</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={item2Img} alt="Flyer for art exhibit" />
                                    <Card.Body>
                                        <Card.Title>Flyer: Precarious Art Exhibition</Card.Title>
                                        <p className="card-text small">1968</p>
                                        <Link to="/item" className="btn btn-secondary">View Item</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={item3Img} alt="Sankofa bird wooden carving" />
                                    <Card.Body>
                                        <Card.Title>Sankofa bird carving</Card.Title>
                                        <p className="card-text small">Circa 1970s</p>
                                        <Link to="/item" className="btn btn-secondary">View Item</Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Additional Result Cards */}
                            {/* Add more Col md={4} card components for items 4-9 following the same pattern */}

                            {/* Pagination */}
                            <Col xs={12}>
                                <nav aria-label="Search results pagination">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default SearchResults;