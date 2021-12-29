import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../shared/ui-library/Card/Card';
import { Title } from '../../shared/ui-library/Title/Title';
import axios from 'axios';
import { useHistory } from 'react-router';
import cover from '../../images/cover.png';
import platePack from '../../images/plate-pack.png';
import kettlebellPack from '../../images/kettlebell-pack.png';
import dumbellPack from '../../images/dumbell-pack.png';

const Container = styled.div`
  position: relative;
  width: 75%;
  margin: auto;
  padding-top: 181px;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 65px;
  }
`;

// const SeeAllContainer = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// `;
const HeaderContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

// const SeeAllText = styled.p`
//   font-family: Open Sans;
//   font-size: 36px;
//   font-weight: 400;
//   line-height: 60px;
//   color: #fff;
//   @media (max-width: 768px) {
//     font-size: 16px;
//     line-height: 36px;
//     padding-top: 5px;
//   }
// `;

// const Dot = styled.img`
//   padding-left: 27px;
//   @media (max-width: 768px) {
//     padding-left: 16px;
//   }
// `;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Packs = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://test.wax.api.atomicassets.io/atomicassets/v1/templates?collection_name=cryptolifter&page=1&limit=1000&order=desc&sort=created'
      );
      console.log(response);
      setAssets(response.data.data);
      setIsLoading(false);
    } catch (e) {
      //
    }
  };
  useEffect(() => {
    getAssets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {assets.length > 0 && !isLoading && (
        <>
          <HeaderContainer>
            {/* <Title>NFT Collection</Title> */}
            <Title>Weight Packs</Title>
          </HeaderContainer>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
           
          </div>
          {/* <CardContainer>
            {assets.map((item, idx) => {
              if (idx < 4) {
                if (item.template.immutable_data.img) {
                  return (
                    <Card
                      img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
                      url={`https://wax.atomichub.io/explorer/asset/${item.asset_id}`}
                      isPrimary="true"
                      button="true"
                      cardwrapper={true}
                    />
                  );
                } else return null;
              } else return null;
            })}
          </CardContainer> */}
          <CardContainer>
            <Card
              // img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
              img={platePack}
              // url={`https://wax.atomichub.io/explorer/asset/${item.asset_id}`}
              isPrimary="true"
              button="true"
              cardwrapper={true}
              description="1000 Plate packs will be released for 10$ to whitelist pass holders in Q4 2021"
              percentWidth={true}
            />
            <Card
              // img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
              // url={`https://wax.atomichub.io/explorer/asset/${item.asset_id}`}
              img={dumbellPack}
              isPrimary="true"
              button="true"
              cardwrapper={true}
              description={`2000 Dumbell packs will be released for 20$ to whitelist pass holders in Q4 2021`}
              percentWidth={true}
            />
            <Card
              // img={`https://ipfs.io/ipfs/${item.template.immutable_data.img}`}
              // url={`https://wax.atomichub.io/explorer/asset/${item.asset_id}`}
              img={kettlebellPack}
              isPrimary="true"
              button="true"
              cardwrapper={true}
              description="2000 Kettlebell packs will be released in Q1 2022"
              percentWidth={true}
            />
          </CardContainer>
        </>
      )}

      <img
        src={cover}
        alt=""
        style={{
          width: '100%',
          zIndex: 0,
          position: 'relative',
          marginTop: '100px',
        }}
      />
    </Container>
  );
};

export default Packs;
