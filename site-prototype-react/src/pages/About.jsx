import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

// Import partner logos
import blackmuseLogo from '../assets/images/blackmuse.svg';
import lachLogo from '../assets/images/living arts cultural heritage.png';
import seattleGriotLogo from '../assets/images/seattle griot project.png';
import wsblilogo from '../assets/images/washington state black legacy institute.jpg';
import evergreenLogo from '../assets/images/evergreen state college.png';
import naacpLogo from '../assets/images/naacp.png';
import artifactsImage from '../assets/images/artifacts.png';
import apparelImage from '../assets/images/apparel.png';


const About = () => { // Removed props

    const partnerOrgs = [
        { name: 'BlackMuse', logo: blackmuseLogo },
        { name: 'Living Arts Cultural Heritage', logo: lachLogo },
        { name: 'Seattle Griot', logo: seattleGriotLogo },
        { name: 'Washington State Black Legacy Institute', logo: wsblilogo },
        { name: 'Evergreen State College Tacoma Campus', logo: evergreenLogo },
        { name: 'National Association for the Advancement of Colored People (NAACP)', logo: naacpLogo }
    ];

    return (
        <> {/* Use Fragment instead of div */}
            {/* Removed AccessibilityPanel and Navbar */}
            <main className="container my-5" id="main-content">
                <h1>About The Remnant Project</h1>
                <p>
                    The Remnant Project is part of a national movement of Black and Indigenous history organizations working together to document the human footprint and ensure state-based curricula accurately reflect our histories. Based at Tacoma Evergreen State College, we are dedicated to preserving, digitizing, and sharing the historical records and stories of these communities in Washington State.
                </p>

                <p>
                    Our collective mission focuses on preserving, sharing, and teaching the true stories that have shaped our communities. We advocate for a more inclusive and truthful representation in education, ensuring these vital narratives are recognized as integral parts of our shared history. We strive to preserve these stories in ways that honor the people they come from, using methods that maintain authentic context and connection, placing them back into the hands of the communities they represent.
                </p>

                {/* Explore and Join Sections */}
                <Accordion defaultActiveKey={null} className="mb-4"> {/* Ensure all start collapsed */}
                    <Row>
                        <Col md={6} className="mb-4 mb-md-0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header as="h2">Explore the Archive</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>
                                        Explore our comprehensive digital archives for in-depth research on key aspects of Black history. These resources provide valuable insights into the lives and contributions of Black communities, leaders, and organizations throughout history. Our focus areas include:
                                    </Card.Text>
                                    <ul>
                                        <li>Black Churches</li>
                                        <li>Black Masonic Organizations</li>
                                        <li>Black Families</li>
                                        <li>Early Black Pioneers</li>
                                        <li>Early Black Educators</li>
                                        <li>Community Groups</li>
                                        <li>Black Women Leaders</li>
                                        <li>Life and Times</li>
                                    </ul>
                                    <Card.Text>
                                        We are creating a digital archive, accessible online and potentially in virtual reality, where these stories can be experienced, shared, and celebrated by everyone.
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                        <Col md={6}>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header as="h2">Join the Movement</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>
                                        Healing isn’t just about sitting with our pain—it’s about moving through it, transforming it into something powerful, something that feeds the future. That’s why we invite you to roll up your sleeves and join us in this sacred work. Whether it’s moderating healing sessions, archiving endangered African American and Indigenous archives, or documenting our elders’ testimonies, there’s a place for you here.
                                    </Card.Text>
                                    <Card.Text>
                                        Come on in. Join the Healing Circle, and then step into the work of archiving, preserving, and uplifting our history. We need each other, and we need you.
                                    </Card.Text>
                                    <Card.Text as="strong">Ways to get involved:</Card.Text>
                                    <ul>
                                        <li>Join Our Healing Circles</li>
                                        <li>Archive Our History</li>
                                        <li>Document Elder Testimonies</li>
                                        <li>Research & Map History</li>
                                        <li>Create Merch</li>
                                        <li>Digital Innovation & Virtual Preservation Team</li>
                                        <li>Create Curriculum</li>
                                        <li>Share the Good Word</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>
                    {/* Our Story & Achievements Section */}
                    <Row className="mt-4"> {/* Add margin for spacing */}
                        <Col>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header as="h2">Our Story & Achievements</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>
                                        The Remnant Project has played a significant role in preserving history and advocating for recognition:
                                    </Card.Text>
                                    {/* TODO: Implement a horizontal timeline component here */}
                                    <ul>
                                        <li><strong>2004:</strong> Played a pivotal role in renaming the Bremerton Post Office to honor John Henry Turpin and establishing the Justice Spearman Justice Center on Bainbridge Island.</li>
                                        <li><strong>2019:</strong> Preserved over 16,000 historical documents, photographs, and newspapers, while also interviewing elders in the community to capture their invaluable stories and insights.</li>
                                        <li><strong>2022:</strong> Officially renamed “Nigga Lakes” to honor Black pioneers Nathaniel J. Sargent and Rodney White.</li>
                                        <li><strong>2023:</strong> Helped identify over 70,000 restricted properties in neighborhoods across Washington, shedding light on the history of exclusion and segregation.</li>
                                        <li><strong>2024:</strong> Renamed the Kitsap Regional Library branch to Bremerton - Dr. Martin Luther King Jr.</li>
                                        <li><strong>Present:</strong> With Washington’s 250th anniversary approaching, immediate funding and support are essential to ensure Black, Indigenous, and underrepresented histories are fully integrated into state initiatives and preserved for future generations.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>

                    {/* Partner Organizations Section */}
                    <Row className="mt-4 mb-4"> {/* Add margin for spacing */}
                        <Col>
                            <Accordion.Item eventKey="3"> {/* Updated eventKey */}
                                <Accordion.Header as="h2">Partner Organizations</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text>
                                        We are proud to collaborate with organizations dedicated to preserving and sharing Black and Indigenous history:
                                    </Card.Text>
                                    <Row className="justify-content-center"> {/* Center the cards */}
                                        {partnerOrgs.map((org, index) => (
                                            <Col key={index} sm={6} md={4} lg={3} className="d-flex mb-3"> {/* Use d-flex and add bottom margin to inner cards */}
                                                <Card className="text-center flex-fill shadow-sm"> {/* Add shadow to inner cards */}
                                                    <Card.Body className="d-flex flex-column">
                                                        <Card.Title as="h5" className="mb-3">{org.name}</Card.Title>
                                                    </Card.Body>
                                                     <Card.Img
                                                        variant="bottom"
                                                        src={org.logo}
                                                        alt={`${org.name} logo`}
                                                        className="card-content-img partner-logo"
                                                    />
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    </Row>
                </Accordion>

            </main>

            {/* Removed Footer */}
        </>
    );
};

export default About;