import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  color: white;
  align-items: center;
  background-image: linear-gradient(to bottom, #30475e, #222831);
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;

  padding-top: 20px;
  text-align: center;
  text-shadow: 2px 2px black;
  font-size: 34px;
  width: 100%;
`;

const FooterWrapper = styled.div`
  display: flex;

  width: 85%;
  ${mobile({ flexDirection: "column", gap: "20px" })}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const LeftTitle = styled.div`
  color: white;
  font-size: 34px;
  font-weight: 800;
  margin-left: 20px;
  text-shadow: 2px 2px black;
`;

const LeftDescription = styled.div`
  font-size: 20px;
  margin-left: 20px;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const CenterTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 600;
  text-shadow: 2px 2px black;
`;

const CenterDescription = styled.div`
  display: flex;
  margin-right: 25px;
`;

const CenterLink = styled.li``;

const CenterLeftLinks = styled.ul`
  font-size: 18px;
  list-style-type: none;
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const RightTitle = styled.div`
  color: white;
  font-size: 26px;
  font-weight: 600;
  margin-left: 20px;
  text-shadow: 2px 2px black;
`;

const RightDescription = styled.div`
  margin-left: 20px;
`;

const Phone = styled.h3`
  font-size: 20px;
  letter-spacing: 2px;
`;

const Email = styled.h3`
  font-size: 20px;
  letter-spacing: 2px;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Left>
          <LeftTitle>XONSANDSON</LeftTitle>
          <LeftDescription>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            fuga neque illum laudantium facere. Minima corporis odio quaerat
            porro. At.{" "}
          </LeftDescription>
        </Left>
        <Center>
          <CenterTitle>Useful Links</CenterTitle>
          <CenterDescription>
            <CenterLeftLinks>
              <CenterLink>Our Instagram</CenterLink>
              <CenterLink>Home</CenterLink>
              <CenterLink>Contact</CenterLink>
            </CenterLeftLinks>
          </CenterDescription>
        </Center>
        <Right>
          <RightTitle>Contact Us</RightTitle>
          <RightDescription>
            <Phone>Text: (619)123-4567</Phone>
            <Email>xonsandson@email.com</Email>
          </RightDescription>
        </Right>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
