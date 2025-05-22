import React from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import collectionItem1Img from '../assets/images/collectionitem1.png';
import collectionItem2Img from '../assets/images/collectionitem2.png';
import collectionItem3Img from '../assets/images/collectionitem3.png';
import collectionItem4Img from '../assets/images/collectionitem4.png';
import collectionItem5Img from '../assets/images/collectionitem5.png';

const Collection = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <Alert variant="info" className="mt-3 mb-5 alert-subtle-info">
                    This section is a demonstration of archive design and functionality. The items and data presented are for illustrative purposes only.
                </Alert>
                <h1>Historical Photographs: Untold Stories</h1>
                <p className="lead">A collection of photography documenting community life, important events, and everyday moments across Washington State.</p>

                <Row>
                    {/* Example Item Card */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem1Img} alt="Girls Reserve at YWCA East Cherry Branch" />
                            <Card.Body>
                                <Card.Title>Girls Reserve, Phyllis Wheatley/ YWCA East Cherry Branch</Card.Title>
                                <p className="card-text">1946</p>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Example Item Card */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem2Img} alt="Jitterbuggers dancing in Seattle" />
                            <Card.Body>
                                <Card.Title>Jitterbuggers in Seattle</Card.Title>
                                <p className="card-text">circa 1944</p>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* More cards can be added as needed */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem3Img} alt="Black Panthers protesting on Legislative Building steps" />
                            <Card.Body>
                                <Card.Title>Black Panthers on the steps of the Legislative Building</Card.Title>
                                <p className="card-text">1969</p>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* More cards */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem4Img} alt="George Washington with his dog" />
                            <Card.Body>
                                <Card.Title>George Washington and his dog</Card.Title>
                                <p className="card-text">circa 1860</p>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* More cards */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collectionItem5Img} alt="Family gathering in Spokane" />
                            <Card.Body>
                                <Card.Title>Family gathering in Spokane</Card.Title>
                                <p className="card-text">1952</p>
                                <Link to="/item" className="btn btn-secondary">View Item</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <h3>About this Collection</h3>
                                <p>This collection brings together photographs from multiple sources, documenting lives and experiences that are often missing from traditional historical archives. These images provide important visual evidence of community life, cultural events, social gatherings, and political activism across Washington State during the 20th century.</p>
                                <p>Many of these photographs were donated by community members who recognized the importance of preserving visual records of their families and neighborhoods. Others come from institutional archives that have been made accessible through digitization efforts.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Collection;