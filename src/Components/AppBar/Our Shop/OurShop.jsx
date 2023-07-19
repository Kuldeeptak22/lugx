import React, { useEffect, useState } from "react";
import TopHead from "../TopHead/TopHead";
import { topHeadData } from "../../../common/Api/JSON/topHeadData";
import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "../singleCard/SingleCard";
import { productApi } from "../../../common/Api/productApi";

const OurShop = () => {
  const [movies, setMovies] = useState([]);
  const clickForProductDetails = () => {
    console.log("hellow");
  };
  useEffect(() => {
    setMovies(productApi);
  }, [productApi]);

  const movieList =
    movies &&
    movies.map((elm, index) => {
      return (
        <SingleCard
          data={elm}
          key={elm.imdbID}
          clickFunction={clickForProductDetails}
        />
      );
    });

  const breadcrumb = {
    mainTitle: ["Home", "Shop"],
    subTitle: "Our Shop",
  };
  return (
    <>
      <TopHead breadcrumb={breadcrumb} />
      <Container>
        <Row className="mx-3 my-5 d-flex justify-content-center">
          <Col lg={2} className=" ourShopTag p-2 rounded-5">
            SHOW ALL
          </Col>
          <Col lg={2} className=" ourShopTag p-2 rounded-5">
            ADVENTURE
          </Col>
          <Col lg={2} className=" ourShopTag p-2 rounded-5">
            STRATEGY
          </Col>
          <Col lg={2} className=" ourShopTag p-2 rounded-5">
            RACING
          </Col>
        </Row>
        <Row className="my-5">{movieList}</Row>
      </Container>
    </>
  );
};

export default OurShop;
