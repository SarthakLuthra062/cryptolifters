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
    padding: 0 5%;
  }
`;
const Theading = styled.th`
  font-family: Open Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
`;
const FTdata = styled.td`
  padding: 12px 0px;
  width: 30%;
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
  background: #929292;
  width: 1px;
  height: 100px;
  margin-right: 20px;
`;

const TableOne = () => {
  return (
    <Table>
      <tr>
        <Theading>Weight</Theading>
        <Line />
        <Theading>Staking per day</Theading>
      </tr>
      <tr>
        <FTdata>5</FTdata>
        <Line />
        <Tdata>5</Tdata>
      </tr>
      <tr>
        <FTdata>10</FTdata>
        <Line />
        <Tdata>10</Tdata>
      </tr>
      <tr>
        <FTdata>15</FTdata>
        <Line />
        <Tdata>15</Tdata>
      </tr>
      <tr>
        <FTdata>25</FTdata>
        <Line />
        <Tdata>25</Tdata>
      </tr>
      <tr>
        <FTdata>35</FTdata>
        <Line />
        <Tdata>35</Tdata>
      </tr>
      <tr>
        <FTdata>45</FTdata>
        <Line />
        <Tdata>45</Tdata>
      </tr>
    </Table>
  );
};

export default TableOne;
