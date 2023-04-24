import {
  ArbitrumLogo,
  BinanceLogo,
  BlockchainLogo1,
  BlockchainLogo2,
  BlockchainLogo3,
  EthereumLogo,
  PolygonLogo
} from 'src/config/images';
import styled from 'styled-components';

export const BlockchainIcons = () => {
  return (
    <BlockchainIconsContainer>
      <Img src={BinanceLogo} alt="blockchain-icon" />
      <Img src={EthereumLogo} alt="blockchain-icon" />
      <Img src={ArbitrumLogo} alt="blockchain-icon" />
      <Img src={PolygonLogo} alt="blockchain-icon" />
      <Img src={BlockchainLogo1} alt="blockchain-icon" />
      <Img src={BlockchainLogo2} alt="blockchain-icon" />
      <Img src={BlockchainLogo3} alt="blockchain-icon" />
    </BlockchainIconsContainer>
  );
};

const BlockchainIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 80px 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 840px) {
    padding: 40px 30px;
  }
  @media screen and (max-width: 370px) {
    padding: 40px 0px;
  }
`;

const Img = styled.img`
  width: auto;
  height: 30px;
`;
