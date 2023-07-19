import React from "react";
import TopHead from "../TopHead/TopHead";
import { Col, Container, Form, Row } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import { topHeadData } from "../../../common/Api/JSON/topHeadData";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const breadcrumb = {
    mainTitle: ["Home", "ContactUs"],
    subTitle: "Contact Us",
  };
  return (
    <>
      <TopHead breadcrumb={breadcrumb} />
      <Container>
        <Row className="my-5 py-2">
          <Col lg={6} className="contactDetails p-5">
            <div>
              <p className="text-start fw-bold text-danger">CONTACT US</p>
            </div>
            <div>
              <p className="text-start fs-1 fw-bold">Say Hello !</p>
            </div>
            <div>
              <p className="text-start py-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam facere minus ipsam quas non eos accusantium sed?
                Tenetur quisquam voluptatum tempore repellendus delectus.
                Possimus, totam. Vitae, quos nemo perspiciatis adipisci, veniam
                quis assumenda dolores veritatis accusamus, quibusdam ut totam
                aut tenetur. Earum saepe modi mollitia magnam voluptatem ratione
                nostrum sapiente!
              </p>
            </div>
            <div className="text-start py-2">
              <p className="fw-bold">Address</p>
              <p className="text-secondary">
                Sunny Isles Beach, FL 33160, United States
              </p>
            </div>
            <div className="text-start py-2">
              <p className="fw-bold">Phone</p>
              <p className="text-secondary">+91-9664408473</p>
            </div>
            <div className="text-start py-2">
              <p className="fw-bold">Email</p>
              <p className="text-secondary">kuldeeptak2211@gmail.com</p>
            </div>
          </Col>
          <Col lg={6} className=" p-5">
            <Row>
              <Col lg={12}>
                <div style={{ height: "70vh", width: "100%" }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={6} className="py-1 mt-5">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col lg={6} className="py-1 mt-5">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Your Surname" />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} className="py-1">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col lg={6} className="py-1">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control type="text" placeholder="Subject" />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        className="p-3"
                        as="textarea"
                        rows={6}
                        placeholder="Your Message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col lg={6} className="py-2 rounded-5 text-white bg-danger">
                    SEND MESSAGE NOW
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
