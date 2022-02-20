import {
  LanguageOutlined,
  Person,
  PersonAdd,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 70px;

  background: #222831;
  display: flex;
  width: 100%;

  justify-content: center;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100vw;
`;
const Left = styled.div`
  align-itmes: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const LanguageContainer = styled.div`
  ${mobile({ display: "none" })}
`;

const Language = styled.span`
  font-size: 18px;
  color: white;
  cursor: pointer;
  padding-top: 8px;
  padding-left: 10px;
  text-shadow: 2px 2px black;
`;

const SearchContainer = styled.div`
  align-itmes: center;
  border-radius: 50px;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  padding-left: 8px;

  ${mobile({ marginLeft: "5px" })}
`;

const Input = styled.input`
  border: 2px solid black;
  border-radius: 20px;
  margin-right: 10px;
  ${mobile({ width: "50px", paddingLeft: "10px", marginRight: "0px" })}
`;

const Center = styled.div`
  flex: 3;
  text-align: center;
  ${mobile({ flex: 2 })}
`;
const Logo = styled.h1`
  font-size: 40px;
  color: white;
  letter-spacing: 2px;

  ${mobile({ fontSize: "20px", marginLeft: "10px", marginRight: "10px" })}
`;

const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  ${mobile({ justifyContent: "center", flex: 1 })}
`;

const MenuItemContainer = styled.div`
  display: flex;

  ${mobile({ fontSize: "18" })}
`;

const MenuItem = styled.div`
    font-size 25px;
    color: white;
    cursor: pointer;
    text-shadow: 2px 2px black;


  ${mobile({ fontSize: "18" })}


`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LanguageContainer>
            <LanguageOutlined style={{ paddingTop: "8px", color: "white" }} />
            <Language>EN</Language>
          </LanguageContainer>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <Search
              style={{ color: "white", fontSize: 20, cursor: "pointer" }}
            ></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                textShadow: "2px 2px black",
              }}
            >
              XONSANDSON
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItemContainer>
            <MenuItem>
              <Link to="/Login">
                <Person
                  style={{ color: "white", fontSize: 18, paddingTop: "0px" }}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/Register">
                <PersonAdd
                  style={{ color: "white", fontSize: 18, paddingTop: "0px" }}
                />
              </Link>
            </MenuItem>
            <MenuItem>
              {/* BADGE */}

              <Link
                to="/Cart"
                style={{
                  color: "white",
                  fontSize: 30,
                  paddingTop: "8px",
                }}
              >
                <ShoppingCartOutlined />
              </Link>
              {/* BADGE */}
            </MenuItem>
          </MenuItemContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
