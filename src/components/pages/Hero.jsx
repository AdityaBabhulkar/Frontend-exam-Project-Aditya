import React from "react";
import { Container, Button, Figure } from "react-bootstrap";
import Image1 from '../../../public/images/hero-clear.jpg';

const Hero = () => {
    return (
        <section id="hero" style={{ position: 'relative', minHeight: "600px", overflow: "hidden" }}>

            <Figure.Image
                width={1550}
                height={280}
                alt="171x180"
                src={Image1}
                style={{
                    position: 'absolute',
                    zIndex: '-2',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '1'
                }}
            />


            <div
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
            />

            <Container className="d-flex flex-column justify-content-center align-items-center h-100 text-white" style={{ paddingTop: "150px", paddingBottom: "100px" }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Property</h2>
                    <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.2rem', textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit!
                    </p>
                    <Button onClick={() => alert("Start Exploring Features and Properties")} variant="primary" size="lg" className="mt-3">Explore</Button>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
