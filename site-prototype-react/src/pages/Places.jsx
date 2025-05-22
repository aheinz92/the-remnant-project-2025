import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap'; // Added Form
import { Link } from 'react-router-dom';

// Import images
import splashImg from '../assets/images/splash.png';
import bainbridgeImg from '../assets/images/bainbridge.png';
import seattleImg from '../assets/images/seattle.png';
import timelineImg from '../assets/images/timeline.png'; // Added timelineImg

const Places = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <h1>Places</h1>
                <p className="lead">Explore the geographic locations throughout Washington State that have historical significance.</p>

                <Row>
                    {/* Place Card 1 */}
                    <Col md={4}>
                        <Link to="/searchresults?query=Kitsap%20County" className="text-decoration-none text-dark">
                            <Card>
                                <Card.Img variant="top" src={splashImg} alt="Kitsap County landscape" />
                                <Card.Body>
                                    <Card.Title>Kitsap County</Card.Title>
                                    <p>A region with a rich history of diverse communities and development.</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    {/* Place Card 2 */}
                    <Col md={4}>
                        <Link to="/searchresults?query=Bainbridge%20Island" className="text-decoration-none text-dark">
                            <Card>
                                <Card.Img variant="top" src={bainbridgeImg} alt="Bainbridge Island landscape" />
                                <Card.Body>
                                    <Card.Title>Bainbridge Island</Card.Title>
                                    <p>A community shaped by multiple cultural influences over generations.</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    {/* Place Card 3 */}
                    <Col md={4}>
                        <Link to="/searchresults?query=Historic%20Seattle" className="text-decoration-none text-dark">
                            <Card>
                                <Card.Img variant="top" src={seattleImg} alt="Historic Seattle skyline" />
                                <Card.Body>
                                    <Card.Title>Historic Seattle</Card.Title>
                                    <p>Explore the transformation of Seattle through key historical moments.</p>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
{/* --- Timeline Section --- */}
                <h2 className="mt-5 mb-4">Timelines</h2>
                <p className="lead">Explore historical events in chronological order to better understand their context and relationships.</p>

                {/* Timeline Dropdown */}
                <div className="mb-3">
                    <Form.Label htmlFor="timelineSelect">Select a Timeline:</Form.Label>
                    <Form.Select id="timelineSelect" aria-label="Select a timeline to display">
                        <option>Kitsap County</option>
                        <option>Bainbridge Island</option>
                        <option>Historic Seattle</option>
                        <option>Civil Rights Movement in Washington</option>
                        <option>Indigenous History of Puget Sound</option>
                    </Form.Select>
                </div>

                {/* Timeline Image */}
                <div className="mb-4 card timeline-card p-3">
                    <img
                        src={timelineImg}
                        alt="Timeline showing historical events in Kitsap County"
                        className="img-fluid rounded"
                    />
                    <div className="mt-3">
                        <h3>Kitsap County Timeline</h3>
                        <p>This timeline illustrates key events in Kitsap County's development from the 1850s through today, highlighting contributions from diverse community members and important historical moments.</p>
                    </div>
                </div>

                <Row className="mt-4">
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <h3>Featured Event: 1942</h3>
                                <p>The Puget Sound Naval Shipyard expands dramatically during WWII, bringing significant demographic changes to Kitsap County.</p>
                                <button className="btn btn-secondary">Explore Related Items</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3">
                            <Card.Body>
                                <h3>Featured Event: 1974</h3>
                                <p>The Boldt Decision affirms treaty fishing rights for Native American tribes in Washington State, with significant impacts for Kitsap County communities.</p>
                                <button className="btn btn-secondary">Explore Related Items</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Places;