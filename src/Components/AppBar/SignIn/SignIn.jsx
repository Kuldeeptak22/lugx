import React from "react";
import TopHead from "../TopHead/TopHead";
import { topHeadData } from "../../../common/Api/JSON/topHeadData";
import { Col, Container, Row } from "react-bootstrap";

const SignIn = () => {
  const breadcrumb = {
    mainTitle: ["Home", "SignIn"],
    subTitle: "Sign In",
  };
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
