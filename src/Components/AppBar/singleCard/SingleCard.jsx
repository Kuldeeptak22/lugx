import React from "react";
import { Card, Col } from "react-bootstrap";

const SingleCard = (props, a) => {
  console.log("props", props.data);
  console.log("Propsss", props, a);
  const clickEvent = () => [console.log("Hello click")];
  const {
    Actors,
    Awards,
    Country,
    Genre,
    Images,
    Language,
    Plot,
    Poster,
    Rated,
    Released,
    Runtime,
    Title,
    Type,
    Writer,
    Year,
    imdbRating,
    imdbID,
    imdbVotes,
    totalSeasons,
  } = props.data;
  return (
    <Col
      lg={3}
      md={5}
      className="cardItems d-flex justify-content-center my-3"
      key={imdbID}
    >
      <Card style={{ width: "15rem", height: "100%" }} className="cItems">
        <Card.Img
          variant="top"
          src={Images[2]}
          className="image-fluid cardImages"
        />
        <Card.Body className="cardBody">
          <Card.Text>{Genre}</Card.Text>
          <div className="d-flex justify-content-between CardItemTitle">
            <Card.Title className="cardTitle text-wrap">{Title}</Card.Title>
            <i
              className="fa fa-shopping-bag text-white bg-danger p-2 borderRound cartbag"
              onClick={clickEvent}
            ></i>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
