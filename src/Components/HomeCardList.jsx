import React from "react";
import styled from "styled-components";
import { CardList } from "../data";
import { mobile } from "../responsive";

const ListContainer = styled.div`
  padding-bottom: 100px;
  width: 100%;

  ${mobile({ display: "none" })}
`;

const ListWrapper = styled.div`
  display: grid;
  height: 50%;
  gap: 40px;
  grid-template-columns: 375px 375px 375px 375px;
  width: 100%;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 10px darkgray;
  height: 250px;
  width: 375px;
  margin: auto;
`;

const CardWrapper = styled.div`
  display: flex;
  padding: 15px;
`;

const CardDetailsWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const CardImg = styled.img`
  height: 220px;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100px;
  width: 100px;
`;

const CardCatergory = styled.div`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

const CardSet = styled.div`
  color: #424242;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
`;

const GradeWrapper = styled.div`
  color: #424242;
  font-size: 12px;
  margin-top: 5px;
`;

const CardCondition = styled.div`
  color: blue;
`;

const PriceContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Price = styled.div`
  color: darkgreen;
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
  background-color: #f05454;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  padding: 5px;
  text-shadow: 1px 1px black;
`;

const HomeCardList = () => {
  return (
    <ListContainer>
      <ListWrapper>
        {CardList.map((card) => (
          <Container>
            <CardWrapper>
              <CardDetailsWrapper>
                <CardImg src={card.img} />
                <CardInfoWrapper>
                  <CardCatergory>{card.category}</CardCatergory>
                  <CardSet>{card.cardset}</CardSet>
                  <Title>{card.title}</Title>

                  <GradeWrapper>PSA: {card.grade}</GradeWrapper>

                  <CardCondition>{card.condition}</CardCondition>

                  <PriceContainer>
                    Price:
                    <Price>{card.price}</Price>
                  </PriceContainer>

                  <ButtonWrapper>
                    <Button>Add to Cart</Button>
                  </ButtonWrapper>
                </CardInfoWrapper>
              </CardDetailsWrapper>
            </CardWrapper>
          </Container>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default HomeCardList;
