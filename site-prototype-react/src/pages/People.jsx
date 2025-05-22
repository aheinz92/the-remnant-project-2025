import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Import images
import collection3Img from '../assets/images/collection3.png';
import people1Img from '../assets/images/people1.png';
import people2Img from '../assets/images/people2.png';

const People = () => { // Removed props
    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <h1>People</h1>
                <p className="lead">Discover the individuals who made significant contributions to Washington State history.</p>

                <Row>
                    {/* Person Card 1 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={collection3Img} alt="Portrait of George Washington" />
                            <Card.Body>
                                <Card.Title>George Washington</Card.Title>
                                <p>Founder of Centralia and a pioneering figure in Washington's development.</p>
                                <button className="btn btn-secondary">View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Person Card 2 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={people1Img} alt="Portrait of Dr. Maxine Buie Mimms" />
                            <Card.Body>
                                <Card.Title>Dr. Maxine Buie Mimms</Card.Title>
                                <p>Educator, community leader, and founder of the Tacoma campus of Evergreen State College.</p>
                                <button className="btn btn-secondary">View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Person Card 3 */}
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={people2Img} alt="Portrait of Dorothy Hollingsworth" />
                            <Card.Body>
                                <Card.Title>Dorothy Hollingsworth</Card.Title>
                                <p>Pioneer in education administration and the first Black woman to serve on a school board in Washington State.</p>
                                <button className="btn btn-secondary">View Profile</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>

            {/* Removed Footer */}
        </>
    );
};

export default People;