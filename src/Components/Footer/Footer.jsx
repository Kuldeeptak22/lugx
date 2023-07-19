import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="bg-primary footer-box">
        <Col lg={12} className="footer-items">
          <p>Copyright © 2048 LUGX Gaming Company. All rights reserved. </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
