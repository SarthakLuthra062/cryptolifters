import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UALProvider, withUAL } from 'ual-reactjs-renderer';
import { Wax } from '@eosdacio/ual-wax';
import { Anchor } from 'ual-anchor';
import dotenv from 'dotenv';
dotenv.config();

const myChain = {
  chainId: process.env.REACT_APP_WAX_CHAIN_ID,
  rpcEndpoints: [
    {
      protocol: 'https',
      host: process.env.REACT_APP_WAX_RPC_ENDPOINT,
      port: '',
    },
  ],
};

const wax = new Wax([myChain], { appName: 'Crypto Lifters' });
const anchor = new Anchor([myChain], {
  appName: 'Crypto Lifters',
});

const MyUALConsumer = withUAL(App);

ReactDOM.render(
  <UALProvider
    chains={[myChain]}
    authenticators={[wax, anchor]}
    appName={'Crypto Lifters'}
  >
    <MyUALConsumer />
  </UALProvider>,
  document.getElementById('root')
);
