import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import AOS from "aos";

const CategoryCard = (props) => {
  const clickEvent = (id) => {
    console.log("Id", id);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const { id, Image, Title } = props.data;
  return (
    <Col
      lg={3}
      md={5}
      className="cardItems d-flex justify-content-center my-3"
      key={id}
      data-aos="fade-right"
    >
      <Card
        style={{ width: "15rem", height: "100%" }}
        className="cItems"
        onClick={() => clickEvent(id)}
      >
        <Card.Img
          variant="top"
          src={Image}
          className="image-fluid cardImages"
        />
        <Card.Body className="cardBody">
          <div className="d-flex justify-content-between CardItemTitle">
            <Card.Title className="cardTitle text-wrap">{Title}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CategoryCard;
