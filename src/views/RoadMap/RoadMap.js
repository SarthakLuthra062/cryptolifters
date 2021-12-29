import React from 'react';
import styled from 'styled-components';
import Footer from '../../shared/components/Footer/Footer';
import Navbar from '../../shared/components/Navbar/Navbar';
import Card from '../../shared/ui-library/Card/Card';
import { Title } from '../../shared/ui-library/Title/Title';

import rotating_45 from './../../images/45LBS.gif';
import lifter from './../../images/lifter.png';
import pack from './../../images/Promo_NoBG.png';
import gains from './../../images/gains.png';
import questionMark from './../../images/question-mark.png';

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: auto;
  padding-top: 146px;
  @media (max-width: 768px) {
    padding-top: 46px;
  }
`;

const ContainerWrapper = styled.div`
  margin-top: 80px;
`;

const Date = styled.h1`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 36px;
  color: #ffff;
  position: relative;
  margin: 0;
  @media (max-width: 768px) {
    top: 40px;
    font-size: 26px;
  }
`;

// const RoadmapWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;
// const RoadmapContainer = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
// `;

// const Description = styled.p`
//   color: #ffff;
//   font-family: Open Sans;
//   font-size: 24px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 50px;
//   letter-spacing: 0em;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     line-height: 30px;
//     width: 100%;
//   }
// `;
// const RoadMapContainer = ({ title }) => {
//   return (
//     <RoadmapContainer>
//       <Date>{title}</Date>
//       <RoadmapWrapper>
//         <Description>
//           Cryptolifters are weightlifting themed NFTs on the WAX Blockchain. You
//           will be able to amass weight NFTs and Athlete NFTs in order to receive
//           GAINS. GAINS will be used to compete in events. Events will regularly
//           occur in Cryptolifters, and winning these events will grant NFTs and
//           potentially real-world items like lifting gear and apparel.
//         </Description>

//         <Card img={} button="true" cardwrapper={true} isPrimary="true" />
//       </RoadmapWrapper>
//     </RoadmapContainer>
//   );
// };

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 3.5px solid #fff;

  margin-right: 122px;

  & > div {
    background: #fff;
    min-width: 16px;
    min-height: 16px;

    border-radius: 100%;
  }
`;

const Line = styled.div`
  width: 1px;
  background: ${(props) => (props.isLast ? 'transparent' : '#fff')};
  margin-right: 138px;
  margin-left: 16px;
`;

const RMContainer = styled.div``;

const RoadmapRenderer = ({ title, image, isLast, children }) => {
  return (
    <RMContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Dot>
          <div />
        </Dot>
        <Date>{title}</Date>
      </div>
      <div style={{ display: 'flex' }}>
        <Line isLast={isLast} />
        <div style={{ paddingBottom: '100px' }}>
          {/* <Card img={image} /> */}
          {children}
        </div>
      </div>
    </RMContainer>
  );
};

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

const RoadMap = () => {
  return (
    <div>
      <Navbar />
      <Gradient />
      <Gradient2 />
      <Container>
        <Title>Roadmap</Title>
        <ContainerWrapper>
          <RoadmapRenderer title="Q4 2021 ( Weight Sales )" image={rotating_45}>
            <Card img={rotating_45} />
          </RoadmapRenderer>
          <RoadmapRenderer title="Q4 2021 ( Lifter Sales )">
            <div style={{ display: 'flex' }}>
              <Card img={lifter} />
              <Card img={pack} />
            </div>
          </RoadmapRenderer>
          <RoadmapRenderer title="Q1 2022 ( Gains Staking Begins )">
            <Card img={gains} />
          </RoadmapRenderer>
          <RoadmapRenderer title="Q2 2022 ( Gym Sale )" isLast>
            <Card img={questionMark} />
          </RoadmapRenderer>
        </ContainerWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default RoadMap;
