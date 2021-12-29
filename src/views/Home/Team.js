import React from 'react';
import styled from 'styled-components';
import { Title } from '../../shared/ui-library/Title/Title';
import parker from './../../images/parker.png';
import harsimar from './../../images/harsimar.jpg';

const Container = styled.div`
  position: relative;
  width: 65%;
  margin: auto;
  padding-top: 170px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 120px;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 78px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 768px) {
    padding-bottom: 58px;
  }
`;
const TCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 94px;
  padding: 0px 25px;

  @media (max-width: 768px) {
    margin-top: 64px;
    padding: 0px 15px;
  }
`;
const TeamMember = styled.img`
  width: 100%;
  border-radius: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 175px;
  border-radius: 95px;
  padding: 15px;
  border: 2px solid #ff6477;
`;
const Name = styled.p`
  font-family: Open Sans;
  font-size: 24px;
  line-height: 32.68px;
  color: #ffff;

  margin: 0;
  margin-top: 20px;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30.68px;
  }
`;

const Designation = styled(Name)`
  color: #ff6477;
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

const TeamCard = (props) => {
  return (
    // <div style={{ width: 230, background: 'red', margin: '2px' }}>
    <TCard>
      <ImageWrapper>
        <TeamMember src={props.img} border={props.border} />
      </ImageWrapper>
      <Name>{props.name}</Name>
      <Designation>{props.designation}</Designation>
    </TCard>
    // </div>
  );
};

const Team = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <TeamContainer>
        <TeamCard
          img={parker}
          border="color"
          name="Parker Butler"
          designation="Founder"
        />
        <TeamCard
          img={harsimar}
          name="Harsimar Singh"
          designation="Software Engineer"
        />
      </TeamContainer>
    </Container>
  );
};

export default Team;
