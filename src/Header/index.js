// Import necessary dependencies and styles
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import components from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import CSS file for styling

// Header component
const Header = () => {
    return (
        // Navbar component with Bootstrap classes
        <Navbar collapseOnSelect expand="lg" variant="light" className="navContainer">
            {/* Container for the Navbar */}
            <Container className="navContainer">
                {/* Navbar brand */}
                <Navbar.Brand href="#home" className="Amrutam-heading">AMRUTAM</Navbar.Brand>
                {/* Toggle button for collapsing the Navbar on smaller screens */}
                <Navbar.Toggle className="size" />
                {/* Collapsible Navbar content */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* Navbar items aligned to the right */}
                    <Nav className="ml-auto margin">
                        {/* Link to home page */}
                        <Nav.Link href="/" className="nav-link pt-3 nav-para">Home</Nav.Link>
                        {/* Link to find doctors page */}
                        <Nav.Link href="/doctors" className="nav-link pt-3 nav-para">Find Doctors</Nav.Link>
                        {/* Link to about page */}
                        <Nav.Link className="nav-link pt-3 nav-para">About Us</Nav.Link>
                        {/* Link to login page with login button */}
                        <Nav.Link href="/login" className="nav-link pt-3"><button className="login-btn">Login</button></Nav.Link>
                        {/* Link to signup page with signup button */}
                        <Nav.Link href="/signup" className="nav-link pt-3"><button className="signup-btn">Sign-Up</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; // Export the Header component
