import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images
import splashImg from '../assets/images/splash.png';
import collection1Img from '../assets/images/collection1.png'; // Used for Exhibits card and Featured Exhibits
import collection2Img from '../assets/images/collection2.png';
import collection3Img from '../assets/images/collection3.png';

// Nav Card Images
import ourStoryImg from '../assets/images/our story.jpg';
import campaignImg from '../assets/images/the campaign.jpg';
import lessonPlansImg from '../assets/images/lesson plans.jpg';
import exploreImg from '../assets/images/explore.jpg';
import timelinesImg from '../assets/images/timelines.jpg'; // For the renamed "Places" card
// collection1Img is used for "Exhibits" card
import apparelImg from '../assets/images/apparel.png';
import shareStoryImg from '../assets/images/share your story.jpg';

const Home = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container py-5" id="main-content">
                {/* Splash Section */}
                <section className="text-center mb-5">
                    <h1>Welcome to The Remnant Project</h1>
                    <img
                        src={splashImg}
                        alt="Splash Image showing historical figures from Washington state"
                        className="img-fluid mb-4"
                        style={{ maxHeight: '400px', borderRadius: '15px' }}
                    />
                    <p className="lead">A digital archive preserving and celebrating Washington State's diverse historical narratives</p>
                </section>

                {/* Site Navigation Cards Section */}
                <section className="mb-5 text-center">
                    <Row className="gx-5"> {/* Increased horizontal gap between Learn and Get Involved sections */}
                        {/* Learn Section */}
                        <Col md={6} className="mb-4"> {/* Learn section takes half width */}
                            <h2 className="mb-4 section-title">Learn</h2>
                            <Row className="gx-2 gy-2"> {/* Reduced horizontal and vertical spacing for cards */}
                                {/* Our Story */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/about" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Our Story</Card.Title>
                                                <Card.Text>learn about our mission and history</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Exhibits */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/exhibits" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Exhibits</Card.Title>
                                                <Card.Text>explore curated digital exhibitions</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Timelines */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/timelines" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Timelines</Card.Title>
                                                <Card.Text>browse interactive timelines</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Explore */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/explore" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Explore</Card.Title>
                                                <Card.Text>search in the archive</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>

                        {/* Get Involved Section */}
                        <Col md={6} className="mb-4"> {/* Get Involved section takes half width */}
                            <h2 className="mb-4 section-title">Get Involved</h2>
                            <Row className="gx-2 gy-2"> {/* Reduced horizontal and vertical spacing for cards */}
                                {/* The Campaign */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/campaign" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">The Campaign</Card.Title>
                                                <Card.Text>join us in preserving this heritage</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Lesson Plans */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/lesson-plans" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Lesson Plans</Card.Title>
                                                <Card.Text>easily integrate into the classroom</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Legacy Wear */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/artifacts-apparel" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Legacy Wear</Card.Title>
                                                <Card.Text>themed gear and historical items</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                                {/* Share Your Story */}
                                <Col md={6}> {/* Removed mb-2, rely on gy-2 from Row */}
                                    <Link to="/contribute" className="text-decoration-none">
                                        <Card className="h-35 nav-card">
                                            <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                                                <Card.Title as="h5" className="mb-1">Share Your Story</Card.Title>
                                                <Card.Text>contribute your own history</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Home;