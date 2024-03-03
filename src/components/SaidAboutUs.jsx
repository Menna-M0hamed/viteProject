import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import Headings from "./Headings";
import {saidAboutUs} from '../data';

 
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


const SaidAboutUs = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Container>
      <div className="pt-4">
        <Headings heading="قالوا عنا" />
      </div>
      <Row className="py-4">
        <div className="slider-container">
        <Slider {...settings}>
        {saidAboutUs.map((review) => {
  const { id, ratingImage, name, text } = review;
  return (
      <div
      key={id}
      className="d-flex justify-content-center mb-4"
    >
      <div className="saidAboutUs d-flex flex-column align-items-end justify-content-center">
      <h5 className="">{name}</h5>
      <img src={ratingImage} className="" />
      <p className="pt-2">{text}</p>
      </div>
    </div>
  )
})}
        </Slider>
        </div>
      </Row>
    
    </Container>
  )
}

export default SaidAboutUs

