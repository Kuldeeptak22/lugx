import React, { useEffect } from "react";
import TopHead from "../TopHead/TopHead";
import { Col, Container, Row } from "react-bootstrap";

const SignIn = () => {
  const breadcrumb = {
    mainTitle: ["Home", "SignIn"],
    subTitle: "Sign In",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopHead breadcrumb={breadcrumb} />
      <Container>
        <Row>
          <Col>
            <h1>Sign In Page</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
