import React, { useEffect } from "react";
import TopHead from "../TopHead/TopHead";
import { topHeadData } from "../../../common/Api/JSON/topHeadData";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetails = () => {
  const breadcrumb = {
    mainTitle: ["Home", "shop", "Product Details"],
    subTitle: "Product Details",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopHead breadcrumb={breadcrumb} />
      <Container>
        <Row className="my-5">
          <Col lg={6}>
            <img
              src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/single-game.jpg"
              alt="productImage"
              width={400}
              className="img-fluid"
            />
          </Col>
          <Col lg={6} className="productData">
            <Row className="text-lg-start">
              <Col lg={12} className="fw-bold fs-4">
                Call of Duty®: Modern Warfare® II
              </Col>
              <Col lg={12} className="my-4">
                <span className="fw-bold text-secondary">$28</span>
                <span className="fw-bold fs-4 text-primary px-3">$22</span>
              </Col>
              <Col lg={12}>
                LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                framework. This template is provided by TemplateMo and it is
                suitable for your gaming shop ecommerce websites. Feel free to
                use this for any purpose. Thank you.
              </Col>
              <Col lg={12}>
                <Row className="my-4 d-flex justify-content-center">
                  <Col
                    lg={2}
                    sm={2}
                    xs={2}
                    className="p-2 bg-secondary text-center text-white rounded-5"
                  >
                    1
                  </Col>
                  <Col
                    lg={4}
                    sm={4}
                    xs={6}
                    className="bg-danger mx-3 d-flex align-items-center text-white rounded-5"
                  >
                    <span className="px-2">
                      <i className="fa fa-shopping-bag"></i>
                    </span>
                    <span>ADD TO CART</span>
                  </Col>
                </Row>
              </Col>
              <Col lg={12} className="py-3">
                <Row>
                  <Col lg={3} className="text-secondary">
                    Game ID:
                  </Col>
                  <Col lg={6}> COD MMII</Col>
                </Row>
                <Row>
                  <Col lg={3} className="text-secondary">
                    Genre:
                  </Col>
                  <Col lg={6}>Action, Team, Single</Col>
                </Row>
                <Row>
                  <Col lg={3} className="text-secondary">
                    Multi-tags:
                  </Col>
                  <Col lg={6}>War, Battle, Royal</Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
