import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from './../../../images/Cryptolifters.png';
import line from './../../../images/line.png';
import { Button } from '../../ui-library/Button/Button';
import { Link } from 'react-router-dom';
import { withUAL } from 'ual-reactjs-renderer';
import * as waxjs from "@waxio/waxjs/dist";
const Assets= require('../../../views/assets.js');

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Image = styled.img`
  padding: 18px 0px 21px 67px;

  @media (max-width: 768px) {
    width: 219px;
    height: 85px;
    margin: 0 auto;
    padding-right: 20%;
  }
`;

const Navmenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0px 30px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  list-style-type: none;
  padding-left: 73px;
  font-size: 24px;
  line-height: 27.58px;
  font-family: Ubuntu;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0px 8px;
    font-size: 14px;
    line-height: 19.58px;
  }
`;

const Line = styled.img`
  padding-right: 80px;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  margin-top: 20px;
  width: 250px;
  background: #000000;
  box-shadow: -1px -2px 7px 9px rgba(55, 55, 55, 0.14);
  border-radius: 8px;
  right: 0px;
  padding: 10px 0;
`;

const DropdownItem = styled(Link)`
  text-decoration: none;
`;

const DropdownOption = styled.div`
  font-family: Ubuntu;
  font-size: 24px;
  color: #fff;
  margin: 20px 20px;
  cursor: pointer;
  text-decoration: none;
`;
const wax = new waxjs.WaxJS({
  rpcEndpoint: 'https://waxtestnet.greymass.com'
});
  
const Navbar = (props) => {
  const [account, setAccount] = useState('');
  const [gains, setGains] = useState('0 GAINS');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const connectWallet = async () => {
    await props.ual.showModal();
  };

  const disconnectWallet = async () => {
    await props.ual.logout();
  };

  const getGains = async (user) => {
    try {
      const r = await wax.rpc.get_table_rows({
        json: true,
        code: 'cryptolifter',
        scope: user,
        table: 'accounts',
        limit: 1,
      });
      if (r.rows.length === 0) {
        setGains(0.0 + ' GAINS');
      } else {
        setGains(r.rows[0].balance);
      }console.log(gains);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (props.ual.activeUser) {
      getGains(props.ual.activeUser.accountName);
      setAccount(props.ual.activeUser.accountName);
      if( Assets.assets==null )
        Assets.functions.getassetdata(props.ual.activeUser.accountName);
    }
  }, [props.ual]);

  const dropdownHandler = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <Navigation>
      <NavItem to="/home">
        <Image src={logo} alt="" />
      </NavItem>

      <Navmenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/roadmap">Roadmap</NavItem>
        <NavItem to="/whitepaper">Whitepaper</NavItem>
        <NavItem to="/about">About</NavItem>
        <Line src={line} alt="" />
        <DropdownContainer>
          <Button onClick={account ? dropdownHandler : connectWallet}>
            {account ? account : 'Connect Wallet'}
          </Button>

          {isDropdownVisible && (
            <DropdownWrapper>
              <DropdownOption>{gains}</DropdownOption>
              <DropdownItem to="/inventory">
                <DropdownOption>Staked NFTs</DropdownOption>
              </DropdownItem>
              <DropdownItem to="/pack">
                <DropdownOption>Unstaked NFTs</DropdownOption>
              </DropdownItem>

              <DropdownItem to="/">
                <DropdownOption onClick={disconnectWallet}>
                Disconnect Wallet
              </DropdownOption>
              </DropdownItem>
            </DropdownWrapper>
          )}
        </DropdownContainer>
      </Navmenu>
    </Navigation>
  );
};

export default withUAL(Navbar);
