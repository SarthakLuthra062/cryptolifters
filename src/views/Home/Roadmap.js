import React from 'react';
import styled from 'styled-components';
import stick from '../../images/stick.png';
import Card from '../../shared/ui-library/Card/Card';
import rotating_45 from './../../images/45LBS.gif';
import lifter from './../../images/lifter.png';
// import pack from './../../images/Promo_NoBG.png';
import gains from './../../images/gains.png';
import questionMark from './../../images/question-mark.png';

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: auto;
  padding-top: 170px;
`;
const Heading = styled.h1`
  text-align: center;
  font-family: Open Sans;
  font-weight: 800;
  font-size: 72px;
  line-height: 98.05px;
  color: #ffff;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    font-weight: 800;
    font-size: 30px;
    line-height: 38.05px;
    color: #ffff;
    padding-bottom: 6px;
  }
`;

const TimelineContainer = styled.div`
  height: 12px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(179, 179, 179, 0.83) 6.4%,
    #fc475d 86%
  );

  border-radius: 20px;
`;

const RMContainer = styled.div`
  flex-grow: 1;
  margin: 0 10px;

  width: 300px;
`;

const RMHeader = styled.div`
  display: flex;
  color: #fff;
  height: 100px;
  background: url(${stick});
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    background: none;
  }
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 3.5px solid #fff;

  margin-right: 122px;
  position: absolute;
  bottom: -16px;

  & > div {
    background: #fff;
    min-width: 16px;
    min-height: 16px;

    border-radius: 100%;
  }
`;

const RMDate = styled.div`
  font-family: Open Sans;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  margin-top: -10px;
  margin-left: 120px;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 0;
  }
`;

const RMDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const RMTitle = styled.h4`
  margin: 0;
  font-family: Open Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  height: 90px;
`;

const RoadmapEvent = ({ title, children, date }) => {
  return (
    <RMContainer>
      <RMHeader>
        <Dot>
          <div />
        </Dot>
        <RMDate>{date}</RMDate>
      </RMHeader>
      <RMDetails>
        <RMTitle>{title}</RMTitle>
        {children}
      </RMDetails>
    </RMContainer>
  );
};

const Roadmap = () => {
  return (
    <>
      <Container>
        <Heading>Roadmap</Heading>

        <TimelineContainer />

        <div style={{ display: 'flex', marginTop: '-106px' }}>
          <RoadmapEvent date="Q4 2021" title="Weight Sales" image={rotating_45}>
            <Card img={rotating_45} />
          </RoadmapEvent>
          <RoadmapEvent date="Q4 2021" title="Lifter Sales">
            <Card img={lifter} />
            {/* <Card img={pack} /> */}
          </RoadmapEvent>
          <RoadmapEvent date="Q1 2022" title="$GAINS Staking Begins">
            <Card img={gains} />
          </RoadmapEvent>
          <RoadmapEvent date="Q2 2022" title="Gym Sales" isLast>
            <Card img={questionMark} />
          </RoadmapEvent>
        </div>
      </Container>
    </>
  );
};

export default Roadmap;
