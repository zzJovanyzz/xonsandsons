import React from "react";
import Navbar from "../Components/NavBar";
import NavCardMenu from "../Components/NavCardMenu";
import styled from "styled-components";
import Footer from "../Components/Footer";
import HomeCardList from "../Components/HomeCardList";

const Container = styled.div`
  height: 100vh;

  @media only screen and (max-width: 320px) {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  border-bottom: solid;
  display: flex;
  height: 50px;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 50px;
  padding-bottom: 20px;
  width: 85%;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin-left: 15px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <NavCardMenu />
      <Title>Pokemon</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Cards: </FilterText>
          <Select>
            <Option disabled selected>
              Set
            </Option>
            <Option>Base Set</Option>
            <Option>Sword and Shield</Option>
            <Option>Jungle</Option>
            <Option>Fossil</Option>
          </Select>
          <Select>
            <Option disabled selected>
              PSA Grade
            </Option>
            <Option>10</Option>
            <Option>9</Option>
            <Option>8</Option>
            <Option>7</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Cards: </FilterText>
          <Select>
            <Option selected>Name(A-Z)</Option>
            <Option>Name(Z-A)</Option>
            <Option>Price($-$$$)</Option>
            <Option>Price($$$-$)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <HomeCardList />
      <Footer />
    </Container>
  );
};

export default ProductList;
