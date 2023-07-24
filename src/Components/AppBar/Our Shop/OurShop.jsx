import React, { useEffect, useState } from "react";
import TopHead from "../TopHead/TopHead";
import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "../singleCard/SingleCard";
import { productApi } from "../../../common/Api/productApi";
import AOS from "aos";

const OurShop = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(productApi);
    window.scrollTo(0, 0);
  }, [productApi]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const movieList =
    movies &&
    movies.map((elm) => {
      return <SingleCard data={elm} key={elm.imdbID} />;
    });

  const breadcrumb = {
    mainTitle: ["Home", "Shop"],
    subTitle: "Our Shop",
  };

  const filterMovies = (genre) => {
    movies &&
      movies.filter((ele) => {
        console.log(ele.Genre.split(" "));
        // return ele.Genre.split(" ").map((ip) => {
        //   // return ip === genre;
        //   console.log("ooo", ip);
        // });
      });
    // .map((elm) => {
    //   console.log("ELE", elm);
    //   return <SingleCard data={elm} key={elm.imdbID} />;
    // });
  };

  const filterOption = [
    {
      id: 1,
      title: "SHOW ALL",
      genre: "Crime, Drama, Thriller",
    },
    {
      id: 2,
      title: "ACTION",
      genre: "Action",
    },
    {
      id: 3,
      title: "DRAMA",
      genre: "Drama",
    },
    {
      id: 4,
      title: "THRILLER",
      genre: "Thriller",
    },
    {
      id: 5,
      title: "HORROR",
      genre: "Horror",
    },
    {
      id: 6,
      title: "COMEDY",
      genre: "Comedy",
    },
  ];

  return (
    <>
      <TopHead breadcrumb={breadcrumb} />
      <Container>
        <Row className="mx-3 my-5 d-flex justify-content-center">
          {filterOption &&
            filterOption.map((item) => {
              return (
                <Col
                  lg={2}
                  className="ourShopTag p-2 rounded-5"
                  onClick={() => filterMovies(item.genre)}
                  key={item.id}
                  data-aos="flip-right"
                >
                  {item.title}
                </Col>
              );
            })}
        </Row>
        <Row className="my-5">{movieList}</Row>
      </Container>
    </>
  );
};

export default OurShop;
