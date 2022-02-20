import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 3%;
  background-color: #f05454;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;

  ${mobile({ height: "30px" })}
`;

const Announcement = () => {
  return <Container>Free Shipping on Orders over $50!</Container>;
};

export default Announcement;
