import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { productApi } from "../../../common/Api/productApi";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SingleCard from "../singleCard/SingleCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(productApi);
  }, [productApi]);

  const homeData = [
    {
      id: 1,
      title: "TRENDING",
      subtitle: "Trending Games",
    },
    {
      id: 2,
      title: "Top MOVIES",
      subtitle: "Most Played",
    },
  ];

  const movieList =
    movies &&
    movies.slice(2, 6).map((elem) => {
      return <SingleCard data={elem} />;
    });

  return (
    <div>
      <Header />
      <Container fluid className="py-5 px-sm-5">
        {homeData &&
          homeData.map((item) => {
            const { title, subtitle, id } = item;
            return (
              <div key={id}>
                <Row className=" my-5 pt-5 pb-2">
                  <p className="text-start text-danger fw-bold text-break">
                    {title}
                  </p>
                  <p className="text-start d-flex justify-content-between align-items-center">
                    <span className="fs-1 fw-bold text-break">{subtitle}</span>
                    <span>
                      <button className="px-4 py-2 rounded-5 bg-danger border-0 text-white fw-semibold viewALL">
                        VIEW ALL
                      </button>
                    </span>
                  </p>
                </Row>
                <Row className="d-flex justify-content-center">{movieList}</Row>
              </div>
            );
          })}

        <Row className="my-5 pt-5 pb-1 text-center fw-bold">
          <p className="text-danger fw-bold text-break">CATEGORIES</p>
          <p className=" fs-1 TopCategory">Top Categories</p>
        </Row>
        <Row className="d-flex justify-content-center">{movieList}</Row>
      </Container>
    </div>
  );
};

export default Home;
