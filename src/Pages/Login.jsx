import React from "react";
import styled from "styled-components";
import Navbar from "../Components/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: #30475e;
  border-radius: 10px;
  box-shadow: 10px 10px 15px black;
  height: 30%;
  margin: auto;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;
`;

const FormLabelContainer = styled.div`
  text-align: center;
`;

const FormLabel = styled.label`
  align-self: center;
  color: white;
  font-size: 44px;
  font-weight: 600;
  text-shadow: 2px 2px black;
`;

const InputWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 20px;
  width: 80%;
`;

const InputFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;

const Input = styled.input`
  margin: 10px 5px;
  height: 32px;
  width: 90%;
`;

const LinkContainer = styled.div`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: white;
  cursor: pointer;
  font-size: 18px;
  display: block;
  margin: 5px;
  text-decoration: underline;
  text-shadow: 1px 1px black;
`;

const LoginButton = styled.button`
  background-color: #f05454;
  border: solid;
  border-width: 1px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 28px;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  text-shadow: 2px 2px black;
  width: 25%;

  &:hover {
    box-shadow: 0px 0px 20px gold;
    height: 55px;
    width: 26%;
  }
`;

const Login = () => {
  return (
    <Container>
      <Navbar />
      <FormWrapper>
        <Form>
          <FormLabelContainer>
            <FormLabel>Login</FormLabel>
          </FormLabelContainer>

          <InputWrapper>
            <InputFlex>
              <Input placeholder="Username"></Input>
              <Input placeholder="Password"></Input>
            </InputFlex>
          </InputWrapper>

          <LinkContainer>
            <Link>Forgot Password?</Link>
            <Link>Create New Account</Link>
          </LinkContainer>

          <LoginButton>Login</LoginButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
