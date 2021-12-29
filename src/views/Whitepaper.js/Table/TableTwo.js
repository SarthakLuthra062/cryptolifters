import React from "react";
import styled from "styled-components";

const Table = styled.table`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  color: #ffff;
  margin: 78px 0px 48px 0px;
  padding: 50px 30px;
  width: 100%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const Theading = styled.th`
  font-family: Open Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const FTdata = styled.td`
  padding: 12px 0px;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;
const Tdata = styled.td`
  padding: 12px 0px;
  font-family: Open Sans;
  font-size: 24px;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;
const Line = styled.div`
  height: 1px;
  background: #929292;
`;
const TheadingTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300%;
  border-bottom: 1px solid white;
  font-family: Open Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
`;

const TableTwo = () => {
  return (
    <Table>
      <TheadingTwo>
        <p>Plate Pack</p>

        <p>Promo Pack</p>
      </TheadingTwo>
      <Line />
      <tr>
        <Theading>1000 Packs</Theading>
        <Theading>rarity</Theading>
        <Theading>Plate ID</Theading>
        <Theading>Number</Theading>
        <Theading>Percent</Theading>
        <Theading>1000 Packs</Theading>
      </tr>
      <tr>
        <FTdata></FTdata>

        <Tdata>common</Tdata>
        <FTdata>5</FTdata>
        <FTdata>5</FTdata>
        <FTdata>5</FTdata>
        <FTdata>common logo 250</FTdata>
      </tr>
      <tr>
        <FTdata></FTdata>

        <Tdata>uncommon</Tdata>
        <FTdata>10</FTdata>
        <FTdata>10</FTdata>
        <FTdata>10</FTdata>
        <FTdata>common2 logo 250</FTdata>
      </tr>
      <tr>
        <FTdata></FTdata>

        <Tdata>Rare</Tdata>
        <FTdata>25</FTdata>
        <FTdata>25</FTdata>
        <FTdata>25</FTdata>
        <FTdata>common3 logo 250</FTdata>
      </tr>
      <tr>
        <FTdata></FTdata>

        <Tdata>Epic</Tdata>
        <FTdata>35</FTdata>
        <FTdata>35</FTdata>
        <FTdata>35</FTdata>
        <FTdata>uncommon plate 250</FTdata>
      </tr>
      <tr>
        <FTdata></FTdata>

        <Tdata>Legendary</Tdata>
        <FTdata>45</FTdata>
        <FTdata>45</FTdata>
        <FTdata>45</FTdata>
      </tr>
    </Table>
  );
};

export default TableTwo;
