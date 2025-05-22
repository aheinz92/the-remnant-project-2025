import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import images
import interview1Img from '../assets/images/interview1.jpeg';

const Interviews = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <h1>Interviews</h1>
                <p className="lead">Listen to firsthand accounts and personal memories that provide vital perspectives on historical events and community life.</p>

                <Row>
                    {/* Interview Card 1 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={interview1Img} alt="Interview with Jeremy Smith" />
                            <Card.Body>
                                <Card.Title>360° Interview with Jeremy Smith</Card.Title>
                                <p>Community organizer discusses the history of neighborhood development and activism in the Central District.</p>
                                <button className="btn btn-secondary">Watch Interview</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Interview Card 2 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={interview1Img} alt="Interview with Elizabeth Smalls" />
                            <Card.Body>
                                <Card.Title>360° Interview with Elizabeth Smalls</Card.Title>
                                <p>Educator shares memories of teaching in Washington State from the 1960s through the 1990s.</p>
                                <button className="btn btn-secondary">Watch Interview</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Interview Card 3 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={interview1Img} alt="Interview with Jeremiah Huntington" />
                            <Card.Body>
                                <Card.Title>360° Interview with Jeremiah Huntington</Card.Title>
                                <p>Local historian discusses preservation efforts and important historical sites in Kitsap County.</p>
                                <button className="btn btn-secondary">Watch Interview</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Card className="mt-5">
                    <Card.Body>
                        <h3>About Our Interviews</h3>
                        <p>The Remnant Project uses innovative 360-degree video technology to create immersive interview experiences. This approach allows viewers to feel present in the conversation and observe the full context of the interview environment.</p>
                        <p>All interviews are conducted with respect for the narrator's experiences and perspectives. Interviewees have the opportunity to review and approve their recordings before they are added to the archive.</p>
                    </Card.Body>
                </Card>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default Interviews;