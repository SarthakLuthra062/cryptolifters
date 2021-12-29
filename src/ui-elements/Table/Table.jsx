import styled, { css } from 'styled-components';

export const TableContainer = styled.div`
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
`;

export const TableRow = styled.div`
  display: flex;
  & > div {
    ${(props) =>
      props.isHeader
        ? css`
            font-family: Open Sans;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 60px;
            letter-spacing: 0em;
            text-align: left;
          `
        : css`
            font-family: Open Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 60px;
            letter-spacing: 0em;
            text-align: left;
          `}

    padding: ${(props) => (props.isHeader ? '50px 30px' : '10px 30px')};
  }

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;

export const TableCell = styled.div`
  flex-grow: ${(props) => (props.flex ? props.flex : 1)};
  flex-shrink: 1;
  flex-basis: 0%;

  &:not(:last-child) {
    border-right: 1px solid rgb(146, 146, 146);
  }
`;
