import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import { productApi } from "../../../common/Api/productApi";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SingleCard from "../singleCard/SingleCard";
import CategoryCard from "../CategoryCard/CategoryCard";
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
      return <SingleCard data={elem} key={elem.imdbID} />;
    });

  const categoryMovie = [
    {
      id: 1,
      Image:
        "https://img.freepik.com/free-photo/3d-halloween-background-with-zombie-hand-bursting-out-ground_1048-14512.jpg?w=1060&t=st=1689853252~exp=1689853852~hmac=fc5c277ff1145dc8007f2aa3e215b236be27cec7fe511cc1103ee5be6e6de887",
      Title: "Horror",
    },
    {
      id: 2,
      Image:
        "https://img.freepik.com/free-photo/snow-scoot-snow-bike-extreme-winter-sports_654080-908.jpg?w=996&t=st=1689853472~exp=1689854072~hmac=3ad44155f288debbbb16841f39896935c11c7f49e06e1218879b2f4c6bc22ee4",
      Title: "Action",
    },
    {
      id: 3,
      Image:
        "https://img.freepik.com/free-photo/funny-mime-black-hat-holds-his-thumb-up_1304-2790.jpg?w=996&t=st=1689853677~exp=1689854277~hmac=21b6687fa80a740490443d70ef08957dc1b6040bf73d7045b6c9228af2fce353",
      Title: "Comedy",
    },
    {
      id: 4,
      Image:
        "https://img.freepik.com/free-photo/female-mime-with-manuscript-sitting-stage_23-2147891799.jpg?w=996&t=st=1689853956~exp=1689854556~hmac=c5d7f57b350cc7cf1d4057b01e924705d7e1fb6c6971eba5c7e5a173a960a69b",
      Title: "Drama",
    },
  ];

  const movieCategory =
    categoryMovie &&
    categoryMovie.map((elem) => {
      return <CategoryCard data={elem} key={elem.id} />;
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
        <Row className="d-flex justify-content-center">{movieCategory}</Row>
      </Container>
    </div>
  );
};

export default Home;
