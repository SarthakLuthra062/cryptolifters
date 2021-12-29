import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Assets= require('../../../views/assets');

const CardBox = styled.div`
  flex-grow: 1;
  background: #060606;
  box-shadow: -5px 16px 9px rgba(0, 0, 0, 0.13);
  border-radius: 17px;
  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;
const CardImage = styled.img`
  height: 300px;
  padding: 49px 45px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: ${(props) => (props.imageType === 'true' ? '150px' : '100px')};
  }
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const CardButton = styled.button`
  min-height: 150px;
  background: ${(props) =>
    props.background ? 'rgba(29, 29, 29, 0.62)' : 'none'};
  border-radius: 0px 0px 17px 17px;
  width: 100%;
  color: #ffffff;
  border: 4px solid rgba(29, 29, 29, 0.62);

  & a {
    text-decoration: none;
  }
`;
const BtnText = styled.p`
  font-family: Ubuntu;
  font-size: 24px;
  line-height: 27.58px;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 22.58px;
  }
  &:hover {
    color: #fc475d;
  }
`;
const CardWrapper = styled.div`
  min-width: 30%;
  /* min-width: 250px; */
  flex-grow: 1;
  border: ${(props) =>
    props.cardwrapper ? '4px solid rgba(29, 29, 29, 0.62)' : 'none'};
  margin: 12px 12px;
  border-radius: 17px;
`;
const Gain = styled.span`
  position: relative;
  top: 45px;
  left: 54px;
  color: #fc475d;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 24px;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 40.58px;
    left: 20px;
    top: 30px;
    font-size: 16px;
  }
`;
const Card = (props) => {

  const createAction = (contract, name, user, data, permission) => {
    return {
        actions: [{
        account: contract,
        name: name,
        authorization: [{
          actor: user,
          permission: permission,
        }],
        data: data,
      }]
    }
  };

  const openOnAtomicHub = async() => {
      try {
        const action = props.text === "Unstake" ? createAction("crypliftrstk", "removenft", props.ual.accountName,{asset_ids:[props.asset_id],},'active'):createAction("crypliftrstk", "stakeassets", props.ual.accountName,{asset_ids:[props.asset_id],_user:props.ual.accountName,},'active');
        console.log(action);
        await props.ual.signTransaction(action, { expireSeconds: 120, blocksBehind: 3 });
        alert("Transaction Successfull");
        window.location.reload();
      } catch (e) {
        alert(e.message);
      }
  };
  return (
    <>
      <CardWrapper
        cardwrapper={props.cardwrapper}
        percentWidth={props.percentWidth}
      >
        <CardBox>
          {props.gain && <Gain></Gain>}
          <CardImage
            src={props.img}
            imageType={props.isPrimary}
            btn={props.button}
            blur={props.blur}
            alt=""
          />
          {props.button === 'true' && (
            <ButtonContainer>
              <CardButton>
                {/* <a
                  href="https://wax.atomichub.io/market?collection_name=cryptolifter&order=desc&sort=created&symbol=WAX"
                  target="_blank"
                  rel="noreferrer"
                > */}
                <BtnText onClick={!props.description && openOnAtomicHub}>
                  {props.description ? props.description : props.text}
                </BtnText>
                {/* </a> */}
              </CardButton>
              {/* <CardButton background={true}>
                <BtnText>Buy</BtnText>
              </CardButton> */}
            </ButtonContainer>
          )}
        </CardBox>
      </CardWrapper>
    </>
  );
};

export default Card;
