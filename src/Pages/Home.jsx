import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import HomeCardList from "../Components/HomeCardList";
import HomeCardListInput from "../Components/HomeCardListInput";
import HomeEventBanner from "../Components/HomeEventBanner";
import Navbar from "../Components/NavBar";
import NavCardMenu from "../Components/NavCardMenu";
import Slider from "../Components/Slider";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <NavCardMenu />
      <HomeEventBanner />
      <Slider />
      <HomeCardListInput />
      <HomeCardList />
      <Footer />
    </Container>
  );
};

export default Home;
