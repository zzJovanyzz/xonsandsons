import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/NavBar';
import NavCardMenu from '../Components/NavCardMenu';
import Footer from "../Components/Footer";
import Announcement from '../Components/Announcement';


const Container = styled.div`
  
  height: 100vh;
  width; 100%;
`;

const ProductWrapper = styled.div`
  display: flex;
  height: 67%;
`;

const ProductImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 2;
  justify-content: center;
`;


const ProductImg = styled.img`
  height: 440px;
`;

const ProductDescriptionWrapper = styled.div`
  border-color: #F05454;
  border-left: solid;
  border-width: 1px;
  flex: 1.5;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 60px;
`;

const DescriptionTitle = styled.h1`
  color: #30475E;
  font-size: 50px; 
  text-shadow: 1px 1px black;
`;

const CardSet = styled.div`
  color: gray;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;

`;

const PSAgrade = styled.div`
  color: gray;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Condition = styled.div`
  color: blue;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const PriceContainer = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const Price = styled.span`
  color: darkgreen;
  font-size: 22px;

`;

const CartButton = styled.button`
  background-color: #F05454;
  border: none;
  border-radius: 25px;
  color: white;
  height: 30px;
  margin-bottom: 20px;
  text-shadow: 1px 1px black;
  width 150px;
`;

const CardDescription = styled.div`
  overflow-y: scroll;
  height: 225px;
  
  width: 600px;

`;

const Product = () => {
  return (
    <Container>
        <Navbar />
      <NavCardMenu />
      <Announcement />
          <ProductWrapper>
            <ProductImgWrapper>
              <ProductImg src='https://product-images.tcgplayer.com/fit-in/437x437/106521.jpg' />
          </ProductImgWrapper>
        <ProductDescriptionWrapper>
          <ProductDescription>
            <DescriptionTitle>Gengar</DescriptionTitle>
            <CardSet>Base Set</CardSet>
            <PSAgrade>PSA: Not Graded</PSAgrade>
            <Condition>Mint Condition</Condition>
            <PriceContainer>
              Price: <Price>$40.99</Price>
            </PriceContainer>
            <CartButton>Add To Cart</CartButton>

            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptas laborum similique alias cum natus eius quasi, atque odit mollitia numquam autem, optio dicta in accusamus iste dolore ab nesciunt ex dolor obcaecati quibusdam at. Nulla incidunt est aspernatur consequatur praesentium at sint, eum distinctio odio dolor, cumque voluptate harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quae! Magnam sequi laboriosam inventore nostrum accusamus, blanditiis officiis, odio labore id commodi et delectus necessitatibus cupiditate placeat eligendi reiciendis consequatur asperiores, quia corrupti alias fugit iusto? Libero, quas voluptas, et molestiae pariatur fuga magni aliquam sed, nihil recusandae magnam debitis in veniam expedita earum. Illo laborum asperiores itaque vel sint magnam quasi, ipsam alias! Voluptatibus, quisquam quos laudantium odio excepturi laborum. Aut vero tenetur recusandae magnam quis et explicabo sit voluptatibus nesciunt commodi blanditiis, perspiciatis eveniet eum consectetur at necessitatibus beatae ratione ad a. Velit ut aspernatur cumque non voluptatem voluptatibus porro consequatur delectus tempora! Nesciunt nihil cumque accusamus eaque facilis quos? Voluptatibus et unde veritatis esse aut animi facere maxime, laborum odio, labore porro id deleniti in? Asperiores soluta eaque illum, earum labore quo qui non facilis aut ullam corrupti omnis voluptatibus maxime, officiis tempora ad cumque, distinctio ex autem in natus ipsum animi velit! Obcaecati voluptatem facere possimus! Doloribus architecto minima itaque aliquam tenetur eius labore hic aut, neque dolor. A cupiditate cum impedit delectus maiores quas? Minus similique accusantium recusandae nam magnam natus, animi minima unde sint pariatur molestiae laudantium cupiditate, nesciunt, soluta voluptas commodi amet ea?
            </CardDescription>
          </ProductDescription>
          </ProductDescriptionWrapper>
          </ProductWrapper>
      <Footer />
    </Container>
  )
}

export default Product