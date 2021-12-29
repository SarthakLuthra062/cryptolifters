import React from 'react';
import Navbar from '../../shared/components/Navbar/Navbar';
import Team from '../Home/Team';
import Contact from '../Home/Contact';
import Footer from '../../shared/components/Footer/Footer';
// import { Title } from '../../shared/ui-library/Title/Title';
import styled from 'styled-components';

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

const Gradient = styled.div`
  background: rgba(252, 71, 93, 0.75);
  filter: blur(333px);
  position: absolute;
  min-height: 500px;
  min-width: 500px;
  margin-top: 200px;
`;

const Gradient2 = styled.div`
  background: rgba(252, 71, 93, 0.75);
  filter: blur(333px);
  position: absolute;
  min-height: 500px;
  min-width: 500px;
  margin-top: 200px;
  right: -300px;
  margin-top: 1000px;
`;

const About = () => {
  return (
    <div>
      <Navbar />
      <Gradient />
      <Gradient2 />
      <Team />
      <Contact />
      <div style={{ marginTop: '40px' }}>
        <Description style={{ fontSize: '28px', fontWeight: 800 }}>
          Place of Business
        </Description>
        <Description>
          346 Lacey Avenue Alabaster Alabama United States of America <br />
          Business ID: 1296807 <br />
          Cryptolifters LLC <br />
          Parker Butler CEO <br />
          Prbutler06@gmail.com
        </Description>
      </div>
      <Footer />
    </div>
  );
};

export default About;
