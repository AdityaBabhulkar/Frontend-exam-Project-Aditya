import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "John Doe", text: "This product is so cool and creates so much value!", stars: "★★★★★" },
        { id: 2, name: "Jane Smith", text: "Absolutely love the design and the feel of this app.", stars: "★★★★★" },
        { id: 3, name: "Mike Johnson", text: "Top notch quality and amazing support.", stars: "★★★★★" },
        { id: 4, name: "Sarah Williams", text: "I've never seen anything like this before. Stunning!", stars: "★★★★★" },
        { id: 5, name: "David Brown", text: "A game changer for our business.", stars: "★★★★★" },
        { id: 6, name: "Emily Davis", text: "Highly recommended to everyone!", stars: "★★★★★" },
    ];

    // Combine testimonials twice to create seamless loop
    const seamlessTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-5 bg-light overflow-hidden" style={{ paddingTop: "100px" }}>
            <Container fluid>
                <div className="text-center mb-5">
                    <h2 className="mb-2">Testimonials</h2>
                    <p className="text-muted fst-italic">People love this!</p>
                </div>

                <div className="marquee-container">
                    <div className="marquee-content gap-4 px-4">
                        {seamlessTestimonials.map((item, index) => (
                            // Using index as key prefix because ids are duplicated
                            <div key={`${item.id}-${index}`} style={{ width: "350px", flexShrink: 0 }} className="text-center bg-white p-4 rounded shadow-sm border">
                                <blockquote className="blockquote mb-3">
                                    <p className="fs-6 text-wrap">"{item.text}"</p>
                                </blockquote>
                                <div className="mb-2 text-warning">
                                    {item.stars}
                                </div>
                                <footer className="blockquote-footer mt-1">{item.name}</footer>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
