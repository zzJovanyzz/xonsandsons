import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  align-items: space-between;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-bottom: 50px;
  width: 100%;
  ${mobile({ display: "none" })}
`;

const InputTitle = styled.span`
  font-size: 32px;
  font-weight: 500;
  margin-right: 70%;
`;

const InputWrapper = styled.div`
  border-bottom: solid;

  height: 40px;
  margin-bottom: 50px;
  padding-bottom: 15px;
  width: 85%;
`;

const FilterLabel = styled.span`
  font-size: 34px;
`;

const FilterSelect = styled.select`
  height: 30px;
  margin-left: 10px;
`;

const FilterOption = styled.option`
  height: 30px;
`;

const HomeCardListInput = () => {
  return (
    <Container>
      <InputWrapper>
        <InputTitle>Featured Items</InputTitle>
        <FilterLabel>Category:</FilterLabel>
        <FilterSelect>
          <FilterOption disabled selected>
            Category
          </FilterOption>
          <FilterOption>Yu-Gi-Oh</FilterOption>
          <FilterOption>Pokemon</FilterOption>
          <FilterOption>Marvel</FilterOption>
          <FilterOption>Sports</FilterOption>
        </FilterSelect>
      </InputWrapper>
    </Container>
  );
};

export default HomeCardListInput;
