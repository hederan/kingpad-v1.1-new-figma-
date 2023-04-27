import { NoWalletConnectButton } from 'src/components/Button/NoWalletConnect';
import { KingpassLogoSvg } from 'src/config/images';
import styled from 'styled-components';
import { commaSeparators } from '../../utils/commaSeparators';

export const NoWalletCard = () => {
  return (
    <CardContainer>
      <NoWalletText>Connect wallet to interact with the sale</NoWalletText>
      <NoWalletConnectButton />
    </CardContainer>
  );
};

export const NoKingpassCard = () => {
  return (
    <CardContainer>
      <Img src={KingpassLogoSvg} alt="kingpass-logo" />
      <NoKingpassCardTitle>Sorry! You need a Kingpass to join this sale</NoKingpassCardTitle>
      <MintNowButton>Mint Now</MintNowButton>
    </CardContainer>
  );
};

export const ContributionCard = () => {
  return (
    <CardContainer>
      <BuyContainer>
        <TokenContribute value={0.1} currency={'BNB'} name="Min buy" />
        <BuyLine />
        <TokenContribute value={4} currency={'BNB'} name="Max buy" />
      </BuyContainer>
      <ContributionCardContent>You are not whitelisted, wait for the open Kingsale event.</ContributionCardContent>
      <TokenContribute value={5} currency={'BNB'} name="Your contribution" />
    </CardContainer>
  );
};

export const EndedCard = () => {
  return (
    <EndedCardContainer>
      <TokenContribute value={4} currency={'BNB'} name="Your contribution" />
      <EndedLine />
      <TokenContribute value={commaSeparators(3456.87)} currency={'BTC'} name="Your contribution" />
      <TokenContributeContent>Kingsale is ended, wait owner to finalise it to claim your Token</TokenContributeContent>
    </EndedCardContainer>
  );
};

const CardContainer = styled.div`
  background: linear-gradient(180deg, #432ad9 0%, #8462f6 85.42%);
  border-radius: 20px;
  min-width: 380px;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16.5px;
  @media screen and (max-width: 1240px) {
    min-width: 335px;
    min-height: 380px;
  }

  @media screen and (max-width: 370px) {
    min-width: 300px;
    min-height: 380px;
  }
`;

const NoWalletText = styled.div`
  font-family: 'gotham-bold';
  font-size: 21px;
  line-height: 25px;
  width: 160px;
  text-align: center;
`;

const Img = styled.img`
  height: 65px;
  width: auto;
  object-fit: none;
`;

const NoKingpassCardTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
  width: 252px;
  text-align: center;
`;

const MintNowButton = styled.div`
  border: 2px solid #ffffff;
  border-radius: 31.8505px;
  width: 148px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'gotham-bold';
  font-size: 17.2165px;
  line-height: 21px;
`;

const BuyContainer = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;

const TokenContribute = (props: { value: number | string; currency: string; name: string }) => {
  const { value, currency, name } = props;
  return (
    <TokenContributeContainer>
      <TokenValue>
        {value} {currency}
      </TokenValue>
      <TokenContributeName>{name}</TokenContributeName>
    </TokenContributeContainer>
  );
};

const TokenContributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TokenValue = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  line-height: 29px;
`;

const TokenContributeName = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 29px;
`;

const BuyLine = styled.div`
  width: 1px;
  height: 52px;
  background-color: #ffffff;
`;
const ContributionCardContent = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 246px;
`;

const EndedCardContainer = styled.div`
  background: linear-gradient(180deg, #432ad9 0%, #8462f6 85.42%);
  border-radius: 20px;
  min-width: 380px;
  min-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24.5px;
  @media screen and (max-width: 1240px) {
    min-width: 335px;
    min-height: 380px;
  }
  @media screen and (max-width: 370px) {
    min-width: 300px;
    min-height: 380px;
  }
`;

const EndedLine = styled.div`
  height: 1px;
  width: 70px;
  background-color: #ffffff;
`;

const TokenContributeContent = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 240px;
`;
