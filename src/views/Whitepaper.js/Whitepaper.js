import React from 'react';
import styled from 'styled-components';
import Footer from '../../shared/components/Footer/Footer';
import Navbar from '../../shared/components/Navbar/Navbar';
import { Container } from '../Home/About';
import { Title } from './../../shared/ui-library/Title/Title';

import { TableCell, TableContainer, TableRow } from '../../ui-elements';
import gains from './../../images/gains.png';
import lifter from './../../images/lifter.png';

const WhitepaperWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Topic = styled.p`
  font-family: Open Sans;
  font-size: 36px;
  font-weight: 700;
  color: #ffff;
  align-items: left;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
const Answer = styled.p`
  width: 100%;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 50px;
  color: #ffff;
  letter-spacing: 0em;
  padding-bottom: 80px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ContainerWrapper = styled.div`
  display: flex;
  padding-right: 30px;
`;

// const Paragraph = styled.p`
//   color: #ffff;
//   font-family: Open Sans;
//   font-size: 24px;
//   line-height: 60px;
//   letter-spacing: 0em;
//   text-align: left;
// `;

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

const Paper = (props) => {
  return (
    <WhitepaperWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        <Dot>
          <div />
        </Dot>
        <Topic>{props.title}</Topic>
      </div>

      <div style={{ display: 'flex' }}>
        <Line isLast={props.isLast} />
        <Answer>{props.children}</Answer>
      </div>
    </WhitepaperWrapper>
  );
};

const TableSpacer = styled.div`
  height: 40px;
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
  position: absolute;
  background: rgba(252, 71, 93, 0.75);
  filter: blur(333px);
  position: absolute;
  min-height: 500px;
  min-width: 500px;
  margin-top: 200px;
  right: -300px;
  margin-top: 1000px;
`;

const Whitepaper = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />

      <Gradient />
      <Gradient2 />
      <Title style={{ marginBottom: '180px' }}>Whitepaper</Title>
      <Container>
        <ContainerWrapper>
          {/* <StraightLine /> */}
          <div>
            <Paper title="What is Cryptolifters?">
              Cryptolifters are weightlifting themed NFTs on the WAX Blockchain.
              You will be able to amass weight NFTs and Lifter NFTs in order to
              receive GAINS. GAINS will be used to compete in events. Events
              will regularly occur in Cryptolifters, and winning these events
              will grant NFTs and potentially real-world items like lifting gear
              and apparel.
            </Paper>
            <Paper title="Staking for GAINS">
              Currently, we have three weight/equipment sales planned. Namely:
              Plates, Kettlebells, and Dumbbells. After this, as long as you
              have one of these in your inventory, you will be whitelisted for
              the lifter sale. Each Lifter can use equipment to get GAINS. The
              rarer (or heavier) the equipment, the more GAINS are possible.
            </Paper>
            <Paper title="$GAINS staking power">
              <p>
                As previously mentioned, GAINS are acquired by weight and lifter
                combinations. Simply put, we believe we will use something
                similar to this:
              </p>
              <img src={gains} style={{ width: '100px' }} alt="" />
              <TableSpacer />
              <TableContainer>
                <TableRow isHeader>
                  <TableCell>Weight</TableCell>
                  <TableCell flex={3}>Staking per hour</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell flex={3}>5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell flex={3}>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15</TableCell>
                  <TableCell flex={3}>15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>25</TableCell>
                  <TableCell flex={3}>25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>35</TableCell>
                  <TableCell flex={3}>35</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>45</TableCell>
                  <TableCell flex={3}>45</TableCell>
                </TableRow>
              </TableContainer>
            </Paper>
            <Paper title="GAINS">
              Weights don’t lift themselves, though. You’ll need Lifters for
              that to start making GAINS. Lifters will come with various
              strength levels that are all upgradable through GAINS.
            </Paper>
            <Paper title="Lifters">
              <p>
                Lifters are a unique part of Cryptolifters. They hold potential
                to become world class, but will definitely not start that way.
                There will be a level up system, where characters get stronger
                through the use of GAINS. The stronger the character, the better
                odds they have of doing well in events and competitions. Leading
                up to our lifter sale, we will take ideas from our community as
                well as reach out to influencers on becoming a Cryptolifter
                representative lifter in the game.
              </p>
              <img src={lifter} alt="" style={{ width: '250px' }} />
              <TableSpacer />
              <TableContainer>
                <TableRow isHeader>
                  <TableCell>Lifter Strength</TableCell>
                  <TableCell flex={4}>
                    Liftable Weight (Maximum weight able to be staked to the
                    lifter for Gains)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell flex={4}>25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell flex={4}>45</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell flex={4}>65</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell flex={4}>85</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell flex={4}>105</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>6</TableCell>
                  <TableCell flex={4}>125</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>7</TableCell>
                  <TableCell flex={4}>145</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8</TableCell>
                  <TableCell flex={4}>165</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>9</TableCell>
                  <TableCell flex={4}>185</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10</TableCell>
                  <TableCell flex={4}>205</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11</TableCell>
                  <TableCell flex={4}>225</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12</TableCell>
                  <TableCell flex={4}>245</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13</TableCell>
                  <TableCell flex={4}>265</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>14</TableCell>
                  <TableCell flex={4}>275</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15</TableCell>
                  <TableCell flex={4}>305</TableCell>
                </TableRow>
              </TableContainer>
              <p>
                Each lifter only has so much potential. They begin with the
                ability to not lift that much weight. Through the use of GAINS,
                you will be able to make your lifter stronger, so they can lift
                more, and ultimately get you more GAINS.
              </p>
            </Paper>

            <Paper title="Weights/Equipment Pack">
              Currently, we can only show the Plate Pack and numbers as it is
              the first one scheduled:
              <TableSpacer />
              <TableContainer>
                <TableRow isHeader>
                  <TableCell>Plate Pack</TableCell>
                </TableRow>
                <TableRow isHeader>
                  <TableCell>1000 Packs</TableCell>
                  <TableCell>Rarity</TableCell>
                  <TableCell>Plate ID</TableCell>
                  <TableCell>Percent Chance to Receive</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Common</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>42%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Uncommon</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>25%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Rare</TableCell>
                  <TableCell>25</TableCell>
                  <TableCell>16%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Epic</TableCell>
                  <TableCell>35</TableCell>
                  <TableCell>10%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Legendary</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>7%</TableCell>
                </TableRow>
              </TableContainer>
              <p>*Percent chance is estimated, but not guaranteed*</p>
            </Paper>
            <Paper title="Gyms" isLast>
              We also plan on having a gym sale. You can think of this as land
              functionality. Players can own gyms where lifters will come to
              work out, owning the gym will give you some of the GAINS the
              player received. Other players will not need to purchase weights
              to get Gains, they simply stake their Lifter to the gym and
              generate the full possible number of GAINS capable of that lifters
              level. A percentage of the gains received will go the owner of the
              gym and a percentage will go to the players athlete that staked
              the lifter there.
            </Paper>
          </div>
        </ContainerWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Whitepaper;
