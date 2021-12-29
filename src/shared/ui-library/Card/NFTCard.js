import React from 'react';
import styled from 'styled-components';
import dots from './../../../images/dots.png';
import image from './../../../images/Untitled design 3.png';

const CardBox = styled.div`
  background: #000000;
  box-shadow: 1px -3px 13px rgba(60, 60, 60, 0.73);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 24px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.p`
  font-family: Open Sans;
  font-size: 28px;
  font-weight: 600;
  line-height: 60px;
  text-align: left;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 40px;
  }
`;
const Dots = styled.img`
  height: 20px;
`;
const CardImage = styled.img`
  display: flex;
  margin: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;
const Info = styled.div`
  border-bottom: 1px solid #232323;
`;
const Gain = styled.h2`
  color: #ffff;
  font-family: Open Sans;
  font-size: 28px;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
  }
`;
const Quantity = styled.h2`
  color: #fc475d;
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 600;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
  }
`;
const Footer = styled.div`
  display: flex;
`;
const Button = styled.button`
  width: 141px;
  height: 45px;
  background: ${(props) => (props.color ? 'rgba(252, 71, 93, 0.74)' : 'none')};
  border-radius: 33.5px;
  border: none;
  color: #ffff;
  padding: 10px 20px;
  margin: 20px 10px;
  @media (max-width: 768px) {
    margin: 10px 10px;
    padding: 5px 20px;
  }
`;

const NFTCard = () => {
  return (
    <CardBox>
      <Header>
        <Title>Title 1 NFT</Title>
        <Dots src={dots} alt="" />
      </Header>
      <CardImage src={image} alt="" />
      <Info>
        <Gain></Gain>
        <Quantity>1 KG</Quantity>
      </Info>
      <Footer>
        <Button>Details</Button>
        <Button color={true}>Buy</Button>
      </Footer>
    </CardBox>
  );
};

export default NFTCard;
