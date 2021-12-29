import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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


export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;


const WeightPacks = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [assets, setAssets] = useState([]);
  const [timeLeft,setTime] = useState([]);
  const [stakePower,setPower] = useState([]);
  const [unclaimedBal,setUnclaimed] = useState([]);

  const getAssets = async () => {
    try {
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
      return Assets.assets;
    } catch (e) {
      alert(e.message);
    }
  };

  const createAction = (contract, name, user, permission) => {
    return {
        actions: [{
        account: contract,
        name: name,
        authorization: [{
          actor: user,
          permission: permission,
        }],
        data: {
          _user: user
        },
      }]
    }
  };

  async function claimGains(){
    try{
      const action = createAction("crypliftrstk", "claim", props.ual.activeUser.accountName,'active');
      await props.ual.activeUser.signTransaction(action, { expireSeconds: 120, blocksBehind: 3 })
      alert("Rewards Claimed Successfully !");
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getAssets()
    .then((data) => {
      setAssets(data);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [setAssets,assets]);

  return (
    <div>
      <Navbar />
      <Container>
        <Title style={{ marginBottom: '100px' }}>
          {isLoading ? !assets ? 'Loading...Kindly see un-staked section to view un-staked NFTs' : 'Loading...':'Inventory'}
        </Title>
        {!isLoading}
        {assets ? <div><table id="dashboard" style={{display:"flex",justifyContent:"center",textAlign:"center", color:"white"}}>
                    <tbody>            
                      <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <button style={{width:"200px",height:"50px",border:"solid white",backgroundColor:"transparent",color:"#fc475d",fontSize:"22px",fontFamily:"Open Sans",fontWeight:"700",textTransform:"uppercase"}} onClick={claimGains}>Claim Gains</button>
                        </div>
                        <tr><td>--------------------------------------</td><td>--------------------------------------</td></tr>
                        <tr><td>Rewards</td><td>{stakePower + ' Gains / Hour'}</td></tr>
                        <tr><td>Time To Reward</td><td>{timeLeft}</td></tr>
                        <tr><td>Unclaimed Balance</td><td>{unclaimedBal}</td></tr>
                    </tbody>
                </table></div>:""}
        {!isLoading && (
          <CardContainer>
            {assets ? assets.map((item) => {
              if (item.template.immutable_data.img) {
                return (
                  <Card
                    img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
                    url={`${process.env.REACT_APP_ATOMIC_HUB}/explorer/asset/${item.asset_id}`}
                    ual = {props.ual.activeUser}
                    asset_id={item.asset_id}
                    text={'Unstake'}
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
