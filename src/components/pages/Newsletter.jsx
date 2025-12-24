import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Toast, ToastContainer } from "react-bootstrap";

const Newsletter = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
    };

    return (
        <section id="newsletter" className="py-5 bg-light position-relative">
            <Container>
                <div className="text-center mb-4">
                    <h2>Newsletter</h2>
                </div>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2">
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                className="rounded-0"
                                required
                            />
                            <Button type="submit" variant="dark" className="rounded-0 px-4">
                                Subscribe
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <ToastContainer position="bottom-center" className="p-3" style={{ zIndex: 1 }}>
                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide bg="success">
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body className="text-white">You will get email as you have subscribed</Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
};

export default Newsletter;
