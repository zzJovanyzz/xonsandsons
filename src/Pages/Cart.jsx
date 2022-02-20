import React from "react";
import styled from "styled-components";
import Navbar from "../Components/NavBar";
import NavCardMenu from "../Components/NavCardMenu";
import Footer from "../Components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const CartWrapper = styled.div`
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 10px;
`;

const TopButton = styled.button`
  background-color: #f05454;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  text-shadow: 1px 1px black;

  &:hover {
    box-shadow: 0px 0px 20px darkblue;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  align-items: flex-end;
  border: 0.5px solid lightgray;
  display: flex;
  height: 50vh;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
  padding: 15px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  background-color: #f05454;
  border: none;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  text-shadow: 1px 1px black;

  &:hover {
    box-shadow: 0px 0px 20px darkblue;
  }
`;

const Product = styled.div`
  border-radius: 10px;
  display: flex;
  height: 300px;
  justify-content: space-between;
  margin: 15px;
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`;

const ProductImage = styled.img``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 30px;
`;

const ProductName = styled.h1``;

const ProductId = styled.div``;

const ProductSet = styled.div``;

const ProductCondition = styled.div``;

const PriceDetail = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  color: #eee;
  height: 1px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <NavCardMenu />
      <CartWrapper>
        <Title>Cart</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Cart(4)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton>CHECK OUT</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ProductImage src="https://product-images.tcgplayer.com/fit-in/437x437/106521.jpg" />
                <Details>
                  <ProductName>Gengar</ProductName>
                  <ProductSet>
                    <b>Item Set:</b> Base Set
                  </ProductSet>
                  <ProductCondition>
                    <b>Item Condition:</b> Mint Condition
                  </ProductCondition>
                  <ProductId>
                    <b>ID:</b> 85449754
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$40.99</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <ProductImage src="https://product-images.tcgplayer.com/fit-in/540x540/42408.jpg" />
                <Details>
                  <ProductName>Squirtle</ProductName>
                  <ProductSet>
                    <b>Item Set:</b> Base Set
                  </ProductSet>
                  <ProductCondition>
                    <b>Item Condition:</b> Mint Condition
                  </ProductCondition>
                  <ProductId>
                    <b>ID:</b> 85986754
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$22.99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>$63.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>$3.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount: </SummaryItemText>
              <SummaryItemPrice>-$3.98</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total: </SummaryItemText>
              <SummaryItemPrice>$63.98</SummaryItemPrice>
            </SummaryItem>

            <Button>Check Out</Button>
          </Summary>
        </Bottom>
      </CartWrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
