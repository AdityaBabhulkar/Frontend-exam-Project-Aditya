import React from "react";
import CustomNavbar from "./CustomNavbar";
import Hero from "./Hero";
import Features from "./Features";
import TitleImage from "./TitleImage";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import { Container } from "react-bootstrap";
import Logo from '../../../public/images/logo-new.png';

const LandingPage = () => {
    return (
        <>
            <CustomNavbar />
            <Hero />
            <Features />
            <TitleImage />
            <Testimonials />
            <Blog />
            <Newsletter />

            <footer className="py-4 bg-white border-top">
                <Container className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">
                        <img src={Logo} alt="Logo" height="40" className="d-inline-block align-top" />
                    </span>
                    <div className="d-flex gap-3 flex-wrap">
                        {[
                            { href: "#hero", label: "Home" },
                            { href: "#features", label: "Features" },
                            { href: "#title-image", label: "Experience" },
                            { href: "#testimonials", label: "Testimonials" },
                            { href: "#blog", label: "Blog" },
                            { href: "#newsletter", label: "Newsletter" },
                        ].map(link => (
                            <a key={link.href} href={link.href} className="text-decoration-none text-muted">{link.label}</a>
                        ))}
                    </div>

                    <div className="border p-1" style={{ minWidth: '50px', height: '30px', background: '#eee' }}></div>
                </Container>
            </footer>
        </>
    );
};

export default LandingPage;
