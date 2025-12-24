import React from "react";
import { Container } from "react-bootstrap";
import TitleBg from '../../../public/images/title-bg.jpg';

const TitleImage = () => {
    return (
        <section id="title-image" style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden" }}>
            {/* Background Image */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    backgroundImage: `url(${TitleBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.6)' // Darken for text readability
                }}
            />
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <h2 className="display-3 fw-bold text-center text-white">Experience Luxury</h2>
            </Container>
        </section>
    );
};

export default TitleImage;
