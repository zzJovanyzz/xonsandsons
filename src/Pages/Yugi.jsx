import React from 'react';
import styled from "styled-components";
import Navbar from '../Components/NavBar';
import NavCardMenu from '../Components/NavCardMenu';
import HomeCardList from '../Components/HomeCardList';

const Container = styled.div`
  width:100%;
  
`;

const Yugi = () => {
    return (
    <Container>
        <Navbar />
        <NavCardMenu />
        <br></br>
        <br></br>
        <br></br>
        <HomeCardList />
        
    </Container>
  );
};

export default Yugi;
