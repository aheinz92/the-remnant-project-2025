import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <p>&copy; {new Date().getFullYear()} The Remnant Project. All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;