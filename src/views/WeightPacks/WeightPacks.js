import React, { useState, useEffect } from 'react';
import styled, { isStyledComponent } from 'styled-components';
import Footer from '../../shared/components/Footer/Footer';
import Navbar from '../../shared/components/Navbar/Navbar';
import Card from '../../shared/ui-library/Card/Card';
import { Title } from '../../shared/ui-library/Title/Title';
import { withUAL } from 'ual-reactjs-renderer';
const Assets= require('../assets');

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: auto;
  padding: 146px 0px;
  @media (max-width: 768px) {
    padding: 106px 0px;
  }
`;

const Subtitle = styled.p`
  font-family: Open Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  color: #fff;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const WeightPacks = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [assets, setUnstakedAssets] = useState([]);
  const [timeLeft,setTime] = useState([]);
  const [stakePower,setPower] = useState([]);
  const [unclaimedBal,setUnclaimed] = useState([]);

  const getAssets = async () => {
    try {
      setIsLoading(true);
      if(props.ual.activeUser)
      Assets.functions.getassetdata(props.ual.activeUser.accountName);
      const now = new Date()  
      const utcMilllisecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);  
      const utcSecondsSinceEpoch = Math.round(utcMilllisecondsSinceEpoch / 1000);

      var timeLeft,stakePower,unclaimed=0;
      if( Assets.user_data!=null)
      {
        var seconds=(Assets.user_data.last_claim+3600)-utcSecondsSinceEpoch;
        var g=new Date(seconds * 1000).toISOString().substr(14, 5);
        timeLeft= utcSecondsSinceEpoch>=Assets.user_data.last_claim+3600?"Claim now":g;
        stakePower=Assets.user_data.stakePower;
        unclaimed = Assets.user_data.data[0].unclaimed;
      }
      setTime(timeLeft);
      setPower(stakePower);
      setUnclaimed(unclaimed);
      setUnstakedAssets(Assets.unstaked);
      setIsLoading(false);
    } catch (e) {
      alert(e.message);
    }
  };

  const createAction = (contract, name, user,data, permission) => {
    return {
        actions: [{
        account: contract,
        name: name,
        authorization: [{
          actor: user,
          permission: permission,
        }],
        data: {
          asset_ids : data,
          _user: user,
        },
      }]
    }
  };

  async function stakeAll(){
    try{
      var ids = [];
      for(let i = 0; i < Assets.unstaked.length; i++){
        ids.push(parseInt(Assets.unstaked[i].asset_id));
      }
      console.log(ids);
      const action = createAction("crypliftrstk", "stakeassets", props.ual.activeUser.accountName,ids,'active');
      console.log(action);
      await props.ual.activeUser.signTransaction(action, { expireSeconds: 120, blocksBehind: 3 })
      alert("All Assets Staked Successfully !");
    } catch (e) {
      alert(e);
    }
  }


  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <Title style={{ marginBottom: '100px' }}>
          {isLoading ? "Loading All NFT's..." : "Wallet"}
        </Title>
        {!isLoading}
        {assets ? <div><table id="dashboard" style={{display:"flex",justifyContent:"center",textAlign:"center", color:"white"}}>
                    <tbody>            
                      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <button style={{width:"200px",height:"50px",border:"solid white",backgroundColor:"transparent",color:"#fc475d",fontSize:"22px",fontFamily:"Open Sans",fontWeight:"700",textTransform:"uppercase"}} onClick={stakeAll}>Stake All</button>
                        </div>
                        <tr><td>--------------------------------------</td><td>--------------------------------------</td></tr>
                        <tr><td>Rewards</td><td>{stakePower + ' Gains / Hour'}</td></tr>
                        <tr><td>Time To Reward</td><td>{timeLeft}</td></tr>
                        <tr><td>Unclaimed Balance</td><td>{unclaimedBal}</td></tr>
                    </tbody>
                </table></div>:""}
        {!isLoading && (
           <Subtitle>
           {assets ? assets.length > 0
             ? "All your Un-Staked NFT's will appear here."
             : "You do not own any cryptolifter NFT's":""}
         </Subtitle>
        )}
        {!isLoading && (
          <CardContainer>
          {assets ? assets.map((item, idx) => {
            if (item.template.immutable_data.img) {
              return (
                <Card
                  img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
                  url={`${process.env.REACT_APP_ATOMIC_HUB}/explorer/asset/${item.asset_id}`}
                  ual = {props.ual.activeUser}
                  asset_id={item.asset_id}
                  type={'stakeasset'}
                  text={'Stake'}
                  gain={true}
                  button="true"
                  cardwrapper={true}
                />
              );
            } else return null;
          }):setIsLoading(true)}
        </CardContainer>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default withUAL(WeightPacks);
