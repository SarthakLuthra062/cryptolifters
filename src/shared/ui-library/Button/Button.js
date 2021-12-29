import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.bg ? props.bg : '#ff6477')};
  border-radius: 8px;
  font-family: Ubuntu;
  color: #ffffff;
  padding: 11px 27px 14px 28px;
  font-size: 24px;
  line-height: 27.58px;
  padding: 12px 28px;
  border: 0;

  &:hover {
    opacity: 0.8;
  }

  transition: all 250ms;
  cursor: pointer;
  @media (max-width: 768px) {
    border-radius: 5px;
    font-size: 8px;
    padding: 4px 8px;
    width: auto;
  }
`;
