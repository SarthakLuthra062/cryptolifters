import React from 'react';
import styled from 'styled-components';
import search from './../../../images/Vector.png';

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: 179px;
  border-bottom: 1px solid grey;
  @media (max-width: 768px) {
    padding-top: 46px;
    flex-direction: column;
    border-bottom: none;
  }
`;
export const Input = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  width: 100%;
  text-decoration: none;
  -webkit-appearance: none;
  outline: none;
  color: #ffff;
  focus: none;
  background: none;
  &::-webkit-input-placeholder {
    font-size: 19px;
    font-family: Open Sans;
    line-height: 60px;
    padding-left: 10px;
  }
  padding: 20px;
  font-size: 25px;
  @media (max-width: 768px) {
    width: 80%;
    border-bottom: 1px solid grey;
    padding: 0;
    margin-bottom: 10px;
    &::-webkit-input-placeholder {
      font-size: 15px;
      font-family: Open Sans;
      line-height: 40px;
      padding-left: 25px;
    }
  }
`;
export const Search = styled.img`
  color: #949494;
  width: 25px;
  height: 25px;
  padding-top: 19px;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    position: relative;
    top: 25px;
    left: -15px;
  }
`;
export const Select = styled.select`
  border: none;
  padding: 0px 40px;
  background: transparent;
  color: #949494;
  outline: none;
  font-size: 24px;
  line-height: 60px;
  @media (max-width: 768px) {
    padding: 7px 15px;
    font-size: 17px;
  }
`;
export const Option = styled.option`
  font-size: 24px;
  font-family: Open Sans;
  line-height: 60px;
`;

const Searchinput = () => {
  return (
    <InputContainer>
      <Search src={search} alt="logo" />
      <Input type="text" placeholder="Search" />

      <Select name="filter1" id="filter1">
        <Option value="Option1">filter1</Option>
        <Option value="Option2">filter2</Option>
      </Select>

      <Select name="filter2" id="filter2">
        <Option value="Option1">filter1</Option>
        <Option value="Option2">filter2</Option>
      </Select>
    </InputContainer>
  );
};

export default Searchinput;
