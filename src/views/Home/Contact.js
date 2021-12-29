import React from 'react';
import styled from 'styled-components';
import { Button } from '../../shared/ui-library/Button/Button';

const Container = styled.div`
  position: relative;
  width: 65%;
  margin: auto;
  padding-top: 373px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 153px;
  }
`;
const Description = styled.div`
  text-align: center;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 45px;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 35px;
  }
`;
const Input = styled.input`
  background: #111111;
  width: 100%;
  padding: 30px 20px;
  border: none;
  margin: 0 auto;
  &::-webkit-input-placeholder {
    font-family: Open Sans;
    line-height: 45px;
    letter-spacing: 0em;
  }
  @media (max-width: 768px) {
    padding: 12px 15px;
    &::-webkit-input-placeholder {
      line-height: 35px;
      letter-spacing: 0em;
    }
  }
  color: #fff;
`;
const TextArea = styled.textarea`
  background: #111111;
  width: 100%;
  padding: 30px 20px;
  border: none;
  margin: 0 auto;
  &::-webkit-input-placeholder {
    font-family: Open Sans;
    line-height: 45px;
    letter-spacing: 0em;
  }

  color: #fff;

  @media (max-width: 768px) {
    &::-webkit-input-placeholder {
      line-height: 35px;
    }
  }
`;
const InputRow = styled.div`
  margin: 19px auto;
  width: 70%;
  text-align: center;
`;
const Form = styled.form`
  width: 100%;
  @media (max-width: 768px) {
    &::-webkit-input-placeholder {
      width: 90%;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <Description>
        Please contact us below or message our team in our discord if you’d like
        to be a CryptoLifter sponsor to help promote the brand and explain why
        you think youd do a good job. Let’s get those GAINS!
      </Description>
      <Form>
        <InputRow>
          <Input type="text" placeholder="Name" />
        </InputRow>
        <InputRow>
          <Input type="text" placeholder="Email" />
        </InputRow>
        <InputRow>
          <Input type="text" placeholder="Subject" />
        </InputRow>

        <InputRow>
          <TextArea rows="4" placeholder="Message" />
        </InputRow>

        <InputRow>
          <Button bg={'#FC475D'}>Contact Us</Button>
        </InputRow>
      </Form>
    </Container>
  );
};

export default Contact;
