import React from 'react'
import styled from 'styled-components';
import { CardList } from '../data';


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

const ButtonWrapper = styled.div`

`;

const Button = styled.button`
    background-color: #F05454;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    margin-top: 20px;
    padding: 5px;
    text-shadow: 1px 1px black;
`;

const SliderCards = () => {
  return (
    <Container >
            <CardWrapper sliderCardList={sliderCardList} >
                {sliderCardList.map(item => (
                
                    <CardDetailsWrapper>
                        <CardImg src={item.img} /> 
                        <CardInfoWrapper>
                            <CardCatergory>
                                {item.category}
                            </CardCatergory>
                            <CardSet>
                                {item.cardset}
                            </CardSet>
                            <Title>
                                {item.title}
                            </Title>

                            <GradeWrapper>
                                PSA: {item.grade}
                            </GradeWrapper>

                            <CardCondition>
                                {item.condition}
                            </CardCondition>

                            <PriceContainer>
                                Price:
                                <Price>
                                {item.price}
                            </Price>
                            </PriceContainer>

                            <ButtonWrapper>
                                <Button>Add to Cart</Button>
                            </ButtonWrapper>
                            
                        </CardInfoWrapper>
                    </CardDetailsWrapper>
                
                
            
            ))}
            </CardWrapper>
        </Container>
  )
}

export default SliderCards