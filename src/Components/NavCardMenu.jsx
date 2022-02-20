import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  align-items: center;
  background-color: #30475e;
  display: flex;
  height: 45px;
  justify-content: center;
  ${mobile({ height: "200px" })}
`;

const Nav = styled.nav``;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column", height: "200px" })}
`;

const MenuItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 30px;
  list-style-type: none;
  text-shadow: 2px 2px black;
  padding-right: 20px;
  padding-top: 2px;
`;

const NavCardMenu = () => {
  return (
    <Container>
      <Nav>
        <Menu>
          <MenuItem>Yu-Gi-Oh</MenuItem>
          <MenuItem>Pokemon</MenuItem>
          <MenuItem>Dragon Ball</MenuItem>
          <MenuItem>Marvel</MenuItem>
          <MenuItem>Sports</MenuItem>
        </Menu>
      </Nav>
    </Container>
  );
};

export default NavCardMenu;
