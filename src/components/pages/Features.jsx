import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Feature1 from '../../../public/images/feature1.jpg';
import Feature2 from '../../../public/images/feature2.jpg';
import Feature3 from '../../../public/images/feature3.jpg';

const Features = () => {
    const features = [
        { id: 1, img: Feature1, title: "Modern Design", desc: "Sleek and contemporary architecture." },
        { id: 2, img: Feature2, title: "Premium Location", desc: "Situated in the heart of the city." },
        { id: 3, img: Feature3, title: "Luxury Living", desc: "Experience the best in comfort and style." }
    ];

    return (
        <section id="features" className="py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="mb-3">Our Features</h2>
                </div>
                <Row>
                    {features.map((item) => (
                        <Col md={4} key={item.id} className="mb-4">
                            <Card className="h-100 border-0 shadow-sm">
                                <div style={{ height: "250px", overflow: "hidden" }}>
                                    <Card.Img
                                        variant="top"
                                        src={item.img}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <Card.Body className="text-start">
                                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Features;
