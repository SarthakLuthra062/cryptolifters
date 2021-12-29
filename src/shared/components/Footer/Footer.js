import React from 'react';
import styled from 'styled-components';
import footerLogo from './../../../images/logo.svg';
import twiter from './../../../images/twiter.png';
import discord from './../../../images/discord.png';
import { Line } from '../../ui-library/Line/line';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContactContainer = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 36px;
  line-height: 49.03px;
  align-items: center;
  padding: 8px 18px;
  color: #ffff;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30.03px;
    padding: 0px 18px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoBox = styled.a`
  background-color: #fc475d;
  margin: 0px 13px;
  border-radius: 10px;
  height: 68px;
  width: 68px;
  margin-bottom: 75px;
  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;
const Logo = styled.img`
  padding: 14px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  transition: all 250ms;
  @media (max-width: 768px) {
    width: 50%;
    padding: 10px 10px;
  }
`;
const CheckUs = styled.div`
  display: flex;

  margin-top: 57px;
`;
const CopyRight = styled.p`
  text-align: center;
  color: #ffff;
  padding-top: 67px;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 45px;
  @media (max-width: 768px) {
    padding-top: 20px;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
  }
`;
const FooterLogo = styled.img`
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <ContactContainer>
        <Title>Connect with us</Title>
        <LogoContainer>
          <LogoBox
            href="https://twitter.com/CryptoLifters"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={twiter} alt="" />
          </LogoBox>
          <LogoBox
            href="https://discord.com/invite/94NWJ3r7"
            target="_blank"
            rel="noreferrer"
          >
            <Logo src={discord} alt="" />
          </LogoBox>
        </LogoContainer>
      </ContactContainer>

      <Line />
      <CheckUs>
        <Title>Check us out on :</Title>

        <a
          href="https://wax.atomichub.io/market?collection_name=cryptolifter&order=desc&sort=created&symbol=WAX"
          rel="noreferrer"
          style={{ display: 'flex', width: '45%' }}
          target="_blank"
        >
          <FooterLogo src={footerLogo} alt="logo" />
        </a>
      </CheckUs>
      <CopyRight>Copyright © 2021 Cryptolifters LLC</CopyRight>
    </Container>
  );
};

export default Footer;
