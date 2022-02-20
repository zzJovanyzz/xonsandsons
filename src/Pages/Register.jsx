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
  height: 35%;
  margin: auto;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 800px;
`;

const FormLabelContainer = styled.div`
  text-align: center;
`;

const FormLabel = styled.label`
  align-self: center;
  color: white;
  font-size: 38px;
  text-shadow: 2px 2px black;
`;

const InputWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  height: 90%;
  width: 100%;
`;

const InputFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const Input = styled.input`
  margin: 10px 5px;
  height: 32px;
  width: 90%;
`;

const Agreement = styled.div`
  color: white;
  font-size: 24px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 2px 2px black;
`;

const PrivacyPolicy = styled.span`
  font-weight: 600;
`;

const CreateButton = styled.button`
  background-color: #f05454;
  border: solid;
  border-width: 1px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  font-size: 28px;
  height: 50px;
  margin: auto;
  text-shadow: 2px 2px black;
  width: 15%;

  &:hover {
    box-shadow: 0px 0px 20px gold;
    height: 55px;
    width: 16%;
  }
`;

const Register = () => {
  return (
    <Container>
      <Navbar />
      <FormWrapper>
        <Form>
          <FormLabelContainer>
            <FormLabel>Create An Account</FormLabel>
          </FormLabelContainer>

          <InputWrapper>
            <InputFlex>
              <Input placeholder="First Name"></Input>
              <Input placeholder="Username"></Input>
              <Input placeholder="Password"></Input>
            </InputFlex>
            <InputFlex>
              <Input placeholder="Last Name"></Input>
              <Input placeholder="Email"></Input>
              <Input placeholder="Confirm Password"></Input>
            </InputFlex>
          </InputWrapper>

          <Agreement>
            By creating an account I consent to the processing of my personal
            data in accordance with the
            <PrivacyPolicy> Privacy Policy</PrivacyPolicy>
          </Agreement>

          <CreateButton>Create</CreateButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
