import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from "react";
import SliderCard from "./SliderCard";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  background-image: #e8e8e8;
  display: flex;
  height: 60vh;
  width: 100%;

  position: relative;

  overflow: hidden;

  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 60px;
  height: 25px;
  align-items: center;
  background-color: #222831;
  color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 350px;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: 50px;
  margin-top: 100px;
  margin-right: 20px;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100vw;
  height: 90%;
`;

const ImgContainer = styled.div`
  align-items: center;
  border-radius: 10px;

  box-shadow: 2px 2px 10px darkgray;
  display: flex;
  flex: 1;
  margin: 0px 100px;
  padding: 5px;
`;

const Image = styled.img`
  border-radius: 25px;

  height: 275px;
`;

const InfoContainer = styled.div`
    

    border-radius: 50px;
    display: flex;
    flex-direction: column;
    flex: 1; 
    height: 100px
    justify-content: center;
    align-items: center;
      
    `;

const Title = styled.h1`
  font-size: 30px;
  color: black;
`;

const DescriptionWapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Desc = styled.p`
  color: black;
  font-size: 16px;
  flex: 1;
`;

const Price = styled.div`
  color: darkgreen;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 50px;
  background-color: #30475e;
  color: white;
  cursor: pointer;
  width: 50px;
  height: 40px;
  font-size: 10px;
  padding: 10px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <SliderCard />
            <SliderCard />
            <SliderCard />
            <SliderCard />
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
