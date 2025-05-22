import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const location = useLocation();
    const [showExploreDropdown, setShowExploreDropdown] = useState(false);
    const [showGetInvolvedDropdown, setShowGetInvolvedDropdown] = useState(false);

    const isExploreActive = ['/exhibits', '/timelines', '/explore'].includes(location.pathname);
    const isGetInvolvedActive = ['/campaign', '/lesson-plans', '/contribute'].includes(location.pathname);

    return (
        <BootstrapNavbar expand="lg" aria-label="Main navigation">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand-custom">The Remnant Project</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="mainNavbar" />
                <BootstrapNavbar.Collapse id="mainNavbar">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            Our Story
                        </Nav.Link>

                        <NavDropdown
                            title="Explore"
                            id="explore-dropdown"
                            align="center" // Align to the center of the toggle
                            active={isExploreActive} // Use the active prop for the NavDropdown toggle
                            show={showExploreDropdown}
                            onMouseEnter={() => setShowExploreDropdown(true)}
                            onMouseLeave={() => setShowExploreDropdown(false)}
                        >
                            <NavDropdown.Item as={Link} to="/exhibits" className={location.pathname === '/exhibits' ? 'active' : ''}>
                                Exhibits
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/timelines" className={location.pathname === '/timelines' ? 'active' : ''}>
                                Timelines
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/explore" className={location.pathname === '/explore' ? 'active' : ''}>
                                Archive Search
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Get Involved"
                            id="get-involved-dropdown"
                            align="center" // Align to the center of the toggle
                            active={isGetInvolvedActive} // Use the active prop for the NavDropdown toggle
                            show={showGetInvolvedDropdown}
                            onMouseEnter={() => setShowGetInvolvedDropdown(true)}
                            onMouseLeave={() => setShowGetInvolvedDropdown(false)}
                        >
                            <NavDropdown.Item as={Link} to="/campaign" className={location.pathname === '/campaign' ? 'active' : ''}>
                                The Campaign
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/lesson-plans" className={location.pathname === '/lesson-plans' ? 'active' : ''}>
                                Lesson Plans
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contribute" className={location.pathname === '/contribute' ? 'active' : ''}>
                                Share Your Story
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link
                            as={Link}
                            to="/legacy-wear"
                            className={location.pathname === '/legacy-wear' ? 'active' : ''}
                        >
                            Legacy Wear
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto d-flex flex-row align-items-center"> {/* Added align-items-center for better vertical alignment of icons */}
                        <Nav.Link
                            href="https://www.facebook.com/profile.php?id=61574037418823"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link"
                            role="button"
                            aria-label="Facebook"
                            active={false} // Explicitly prevent active state
                        >
                            <FaFacebook size={24} />
                        </Nav.Link>
                        <Nav.Link
                            href="https://www.instagram.com/washingtonremnants/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link"
                            role="button"
                            aria-label="Instagram"
                            active={false} // Explicitly prevent active state
                        >
                            <FaInstagram size={24} />
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;