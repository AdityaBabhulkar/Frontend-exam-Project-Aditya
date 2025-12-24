import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Blog1 from '../../../public/images/blog1.jpg';
import Blog2 from '../../../public/images/blog2.jpg';

const Blog = () => {
  const blogs = [
    { id: 1, img: Blog1, title: "Top Interior Trends", date: "Oct 24, 2025", teaser: "Discover the latest trends in modern interior design." },
    { id: 2, img: Blog2, title: "Maximizing Space", date: "Nov 12, 2025", teaser: "Tips and tricks to make your living space feel larger." }
  ];

  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Latest from the Blog</h2>
        </div>
        <Row className="justify-content-center">
          {blogs.map((item) => (
            <Col md={6} lg={5} key={item.id} className="mb-4">
              <Card className="border-0 shadow-sm h-100">
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="mb-0 fs-5">{item.title}</Card.Title>
                    <small className="text-muted">{item.date}</small>
                  </div>
                  <Card.Text className="text-muted">
                    {item.teaser}
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

export default Blog;
