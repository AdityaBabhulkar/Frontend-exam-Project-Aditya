import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from '../../../public/images/logo-new.png';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNotFound = () => {
        alert("404 Not Found");
    };

    return (
        <Navbar
            fixed="top"
            expand="lg"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
            style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(6px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                padding: "10px 0"
            }}
        >
            <Container>
                <Navbar.Brand href="#hero" className="fw-bold fs-4 d-flex align-items-center">
                    <img src={Logo} alt="Logo" height="50" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-center gap-4">
                        {[
                            { href: "#hero", label: "Home" },
                            { href: "#features", label: "Features" },
                            { href: "#title-image", label: "Experience" },
                            { href: "#testimonials", label: "Testimonials" },
                            { href: "#blog", label: "Blog" },
                            { href: "#newsletter", label: "Newsletter" },
                        ].map(link => (
                            <Nav.Link key={link.href} href={link.href} onClick={() => setExpanded(false)}>
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Nav className="text-center gap-2 mt-3 mt-lg-0">
                        <Button
                            variant="outline-dark"
                            onClick={handleNotFound}
                            className="rounded-pill px-4"
                        >
                            Log In
                        </Button>
                        <Button
                            variant="dark"
                            onClick={handleNotFound}
                            className="rounded-pill px-4"
                        >
                            Sign Up
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
