import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BannerWrapper = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #30475e, white);
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
  text-shadow: 2px 2px black;
`;

const Events = styled.h3`
  color: white;
  font-size: 24px;
  text-shadow: 2px 2px black;
  ${mobile({ marginLeft: "75px" })}
`;

const Dates = styled.div`
  color: yellow;
  display: inline-block;
  text-shadow: 2px 2px black;
`;

const NewsLetterDescription = styled.h4`
  color: black;
  font-size: 20px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0;
  justify-content: center;
`;

const NewsLetterInput = styled.input`
  height: 20px;
  width: 250px;
`;

const NewsLetterButton = styled.button`
  border: none;
  cursor: pointer;
  height: 28px;
  padding-top: 5px;
`;

const HomeEventBanner = () => {
  return (
    <Container>
      <BannerWrapper>
        <Title>Upcoming Events:</Title>
        <Events>
          Poway Card Show - <Dates>March 14th, 2022</Dates>
        </Events>
        <NewsLetterDescription>
          Get Updates About Upcoming Events
        </NewsLetterDescription>
        <InputContainer>
          <NewsLetterInput />
          <NewsLetterButton>
            <Send />
          </NewsLetterButton>
        </InputContainer>
      </BannerWrapper>
    </Container>
  );
};

export default HomeEventBanner;
