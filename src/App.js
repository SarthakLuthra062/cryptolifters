import styled from 'styled-components';
import { Routes } from './routes/Routes';

const Body = styled.div`
  background: #020202;
`;

function App() {
  return (
    <Body>
      <Routes />
    </Body>
  );
}

export default App;
