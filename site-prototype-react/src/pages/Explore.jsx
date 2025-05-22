import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import collectionItem1Img from '../assets/images/collectionitem1.png';
import collectionItem3Img from '../assets/images/collectionitem3.png';
import collectionItem5Img from '../assets/images/collectionitem5.png';

const Explore = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <Alert variant="info" className="mt-3 mb-5 alert-subtle-info">
                    This section is a demonstration of archive design and functionality. The items and data presented are for illustrative purposes only.
                </Alert>
                <h1>Search & Explore the Archive</h1>
                <p className="lead">Discover historical items, stories, and collections from Washington State's diverse communities.</p>

                {/* Search Bar */}
                <Form action="/searchresults" method="GET" role="search" className="mb-4">
                    <InputGroup>
                        <Form.Label htmlFor="searchQuery" className="sr-only">Search the archive</Form.Label>
                        <Form.Control
                            id="searchQuery"
                            type="text"
                            name="query"
                            placeholder="Search by keyword, location, time period..."
                        />
                        <Button variant="secondary" type="submit">
                            <i className="fas fa-search me-2"></i>Search
                        </Button>
                    </InputGroup>
                </Form>

                {/* Tag Search Section */}
                <Card className="mb-4">
                    <Card.Body>
                        <h3>Browse by Tag</h3>
                        <Form action="/searchresults" method="GET" role="search" className="mb-3">
                            <InputGroup>
                                <Form.Control type="text" name="query" placeholder="Search for a tag..." /> {/* Changed name to query */}
                                <Button variant="secondary" type="submit">
                                    <i className="fas fa-search me-2"></i>Find Tag
                                </Button>
                            </InputGroup>
                        </Form>

                        <div className="popular-tags">
                            <h5>Popular Tags:</h5>
                            <div className="tag-list">
                                <Link to="/searchresults?query=Civil%20Rights" className="tag-button">Civil Rights <span className="tag-count">24</span></Link>
                                <Link to="/searchresults?query=Photographs" className="tag-button">Photographs <span className="tag-count">18</span></Link>
                                <Link to="/searchresults?query=Seattle" className="tag-button">Seattle <span className="tag-count">15</span></Link>
                                <Link to="/searchresults?query=1960s" className="tag-button">1960s <span className="tag-count">12</span></Link>
                                <Link to="/searchresults?query=Education" className="tag-button">Education <span className="tag-count">9</span></Link>
                                <Link to="/searchresults?query=Community" className="tag-button">Community <span className="tag-count">7</span></Link>
                                <Link to="/searchresults?query=Family" className="tag-button">Family <span className="tag-count">6</span></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                {/* Filter Options */}
                <Row className="mb-4">
                    <Col md={6} className="mb-3">
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="card-title">Filter by Categories</h5>
                                <div className="d-flex flex-wrap">
                                    <Link to="/searchresults?query=Photographs" className="tag-button">Photographs</Link>
                                    <Link to="/searchresults?query=Documents" className="tag-button">Documents</Link>
                                    <Link to="/searchresults?query=Oral%20Histories" className="tag-button">Oral Histories</Link>
                                    <Link to="/searchresults?query=Artifacts" className="tag-button">Artifacts</Link>
                                    <Link to="/searchresults?query=News%20Articles" className="tag-button">News Articles</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-3">
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="card-title">Filter by Time Period</h5>
                                <div className="d-flex flex-wrap">
                                    <Link to="/searchresults?query=Pre-1900" className="tag-button">Pre-1900</Link>
                                    <Link to="/searchresults?query=1900-1950" className="tag-button">1900-1950</Link>
                                    <Link to="/searchresults?query=1950-1970" className="tag-button">1950-1970</Link>
                                    <Link to="/searchresults?query=1970-2000" className="tag-button">1970-2000</Link>
                                    <Link to="/searchresults?query=2000-Present" className="tag-button">2000-Present</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <h2 className="mt-5">Featured Items</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem1Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Girls Reserve, Phyllis Wheatley/ YWCA</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem3Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Black Panthers on the steps of the Legislative Building</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem5Img} alt="Featured archive item" />
                            <Card.Body>
                                <Card.Title>Family gathering in Spokane</Card.Title>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Explore;