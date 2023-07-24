import React, { useEffect } from "react";
import { Col, Container, InputGroup, Row, Form } from "react-bootstrap";
import banner from "../../assets/images/banner.jpg";
import AOS from "aos";

const Header = () => {
  const featuresData = [
    {
      id: 1,
      title: "FREE STORAGE",
      alt: "storage",
      img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-01.png",
    },
    {
      id: 2,
      title: "USER MORE",
      alt: "user",
      img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-02.png",
    },
    {
      id: 3,
      title: "REPLY READY",
      alt: "reply",
      img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-03.png",
    },
    {
      id: 4,
      title: "EASY LAYOUT",
      alt: "layout",
      img: "https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/featured-04.png",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <Container fluid className="header">
        <Row className="bg-primary header-box px-sm-5">
          <Col lg={6} className="header-items headeritem1 text-start mt-5">
            <h1 className="fs-5 text-white text-break">WELCOME TO LUGX</h1>
            <p
              className="bestGame fw-bold text-white text-break"
              data-aos="zoom-in"
            >
              BEST GAMING SITE EVER!
            </p>
            <span className="wing">
              <img
                src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/caption-dec.png"
                alt="wing"
              />
            </span>
            <p className="text-white py-4">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for
              commercial purposes. Please tell your friends about TemplateMo.
            </p>
            <div className="my-5">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Type Something"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  className="inputBox rounded-5 py-2 px-4"
                ></Form.Control>
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-danger text-white rounded-5 position-absolute top-0 end-0 py-2 px-4"
                >
                  SEARCH NOW
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
          <Col lg={6} className="header-items headeritem2 text-end">
            <img
              src={banner}
              alt="banner"
              width="320"
              className="rounded-5 banner"
              data-aos="fade-right"
            />
            <span className="bg-danger discount">-40%</span>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center features">
          {featuresData &&
            featuresData.map((item) => {
              const { id, title, alt, img } = item;
              return (
                <Col
                  lg={2}
                  md={5}
                  className="mx-3 my-3 py-5 rounded-4 featuresBox"
                  key={id}
                  data-aos="zoom-in"
                >
                  <img className="bg-primary p-3 featImg" src={img} alt={alt} />
                  <p className="py-3 fw-bold">{title}</p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Header;
