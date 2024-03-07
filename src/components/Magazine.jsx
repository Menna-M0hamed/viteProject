import React from "react";
import { magazineLinks } from "../data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Headings from "./Headings";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

const Magazine = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <Container className="my-4" id="mag">
      <div className="pt-4">
        <Headings heading="مجلة صبغة الله" />
      </div>
      <Row className="py-4">
        <div className="slider-container">
          <Slider {...settings}>
            {magazineLinks.map((link) => {
              const { id, image, name, buttonText, url } = link;
              return (
                <div
                  key={id}
                  className="d-flex flex-column justify-content-center align-items-center mb-4"
                >
                  <Link to={url}>                  <img src={image} className="magazineImg mb-4"/>
</Link>
                  <h6 className="mb-3 mt-2">{name}</h6>
                  <Link to={url}>
                    <button className="myBtn">{buttonText}</button>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </Row>
    </Container>
  );
};

export default Magazine;
