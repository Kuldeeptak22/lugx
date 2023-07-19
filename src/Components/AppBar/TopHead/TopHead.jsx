import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";

const TopHead = ({ breadcrumb }) => {
  return (
    <>
      <Container fluid>
        <Row className="bg-primary topHead">
          <Col className="pt-5 mt-5 pb-4">
            <h1>{breadcrumb.subTitle}</h1>
            <Breadcrumb className="d-flex justify-content-center">
              {breadcrumb.mainTitle.map((elem, ind) => {
                return (
                  <Breadcrumb.Item className="bg-white p-2" href="#" key={ind}>
                    {elem}
                  </Breadcrumb.Item>
                );
              })}
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopHead;
