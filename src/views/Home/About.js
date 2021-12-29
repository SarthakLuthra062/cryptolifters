import React from 'react';
import styled from 'styled-components';
import carouselImage from './../../images/carousel.png';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 75%;
  margin: auto;
  margin-top: 40px;
  @media (max-width: 768px) {
    padding-top: 46px;
  }
`;
export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AboutTitle = styled.h1`
  font-family: Open Sans;
  font-weight: 800;
  font-size: 76px;
  line-height: 80.73px;
  color: #ffffff;
  margin-right: 38px;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 50.73px;
    margin-right: 10px;
  }
`;
export const Span = styled.span`
  color: #fc475d;
`;
const CardContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Gradient = styled.div`
  background: rgba(252, 71, 93, 0.75);
  filter: blur(333px);
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const Description = styled.p`
  font-family: Open Sans;
  font-size: 28px;
  line-height: 45px;
  color: #ffffff;
  width: 60%;

  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 20px;
    line-height: 35px;
  }
`;
export const DescriptionButton = styled.button`
  background: #000000;
  border: 1px solid #fc475d;
  backdrop-filter: blur(16px);
  border-radius: 8px;
  font-family: Ubuntu;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  padding: 12px 40px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 20px;
  }
`;

export const Box = styled.div`
  position: relative;
  background: #060606;
  box-shadow: -5px 16px 9px rgb(0 0 0 / 13%);
  border-radius: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.isPrimary ? '1px solid orange' : 'none')};
  height: ${(props) => (props.isPrimary ? '455px' : '395px')};
  margin-top: ${(props) => (props.isPrimary ? 'none' : '30px')};
  left: ${(props) => props.position === 'left' && '135px'};
  right: ${(props) => props.position === 'right' && '160px'};
  z-index: ${(props) => props.isPrimary && '1000'};

  @media (max-width: 768px) {
    height: ${(props) => (props.isPrimary ? '215px' : '155px')};
    left: ${(props) => props.position === 'left' && '52px'};
    right: ${(props) => props.position === 'right' && '60px'};
    border-radius: 7px;
  }
`;

export const CardImage = styled.img`
  position: relative;
  z-index: 999;
  padding: 30px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px;
    width: 100px;
  }
`;

// const Card = (props) => {
//   return (
//     <Box isPrimary={props.isPrimary} position={props.position}>
//       <CardImage src={props.img} isPrimary={props.isPrimary} />
//     </Box>
//   );
// };

const About = () => {
  return (
    <Container>
      <HeadingContainer>
        <div style={{ flexGrow: 1 }}>
          <AboutTitle>
            What is
            <br />
            <Span>CryptoLifters</Span>
          </AboutTitle>
          <Description>
            CryptoLifters are weightlifting themed NFTs on the WAX blockchain,
            Through the combination of weights NFTs and Lifter NFTs, you can
            passively generate GAINS as your lifters get stronger
          </Description>
        </div>
        <CardContainer style={{ flexGrow: 1 }}>
          <div>
            <Gradient />
            <CardImage src={carouselImage} alt="" />
          </div>
          {/* <Card img={imageTwo} isPrimary={true} />
          <Card img={imageThree} isPrimary={false} position="right" /> */}
        </CardContainer>
      </HeadingContainer>

      {/* <DescriptionButton>Start Now</DescriptionButton> */}
    </Container>
  );
};

export default About;
