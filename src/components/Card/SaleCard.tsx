import {
  BinanceLogo,
  OnyxImage,
  WebsiteSvg,
  TwitterSvg,
  TelegramSvg,
  DiscordSvg,
  YoutubeSvg,
  FacebookSvg,
  InstagramSvg
} from 'src/config/images';
import styled from 'styled-components';
import { ALink } from '../ALink';
import { ExploreButton } from '../Button/explore';

export const SaleCard = () => {
  return (
    <SaleCardContainer>
      <SaleCardImageContainer>
        <SaleCardImage src={OnyxImage} alt="salecard-image" />
        <SaleCardImageCover />
      </SaleCardImageContainer>
      <SaleCardContent>
        <SaleCardDetails>
          <SaleCardHeader>
            <SecondaryText>SALE IN PROGRESS</SecondaryText>
            <DesktopImg src={BinanceLogo} alt="blockchain-logo" />
          </SaleCardHeader>
          <PrimaryText>Onyx</PrimaryText>
          <SocialLinks>
            <ALink link="/">
              <SocialLogo src={WebsiteSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={TwitterSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={TelegramSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={DiscordSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={YoutubeSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={FacebookSvg} alt="social-logo" />
            </ALink>
            <ALink link="/">
              <SocialLogo src={InstagramSvg} alt="social-logo" />
            </ALink>
          </SocialLinks>
          <SaleCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna
            aliqua.
          </SaleCardText>
        </SaleCardDetails>
        <SaleCardAction>
          <SaleCardState>
            <SaleMiniCard value={500} currency={'BNB'} name={'Total Raised'} />
            <SaleMiniCard value={4} currency={'BNB'} name={'Max Contr.'} />
            <SaleCardStatus status={'active'} />
          </SaleCardState>
          <SaleCardButton>
            <MobileImg src={BinanceLogo} alt="blockchain-logo" />
            <ExploreButton>Explore</ExploreButton>
          </SaleCardButton>
        </SaleCardAction>
      </SaleCardContent>
    </SaleCardContainer>
  );
};

const SaleCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  object-fit: cover;
  filter: saturate(0);
  transition: all linear 0.3s;
  @media screen and (max-width: 1180px) {
    flex-direction: column;
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  @media screen and (max-width: 640px) {
    height: 350px;
  }
`;

const SaleCardImageCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: #432ad9;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  border-radius: 20px 0 0 20px;
  transition: all linear 0.3s;
`;

const SaleCardContainer = styled.div`
  width: 100%;
  height: 380px;
  background: #060111;
  z-index: 1;
  display: flex;
  border-radius: 20px;
  @media screen and (max-width: 1180px) {
    flex-direction: column;
    height: 100%;
    width: auto;
  }
  &:hover ${SaleCardImage} {
    filter: none;
  }

  &:hover ${SaleCardImageCover} {
    opacity: 0;
  }
  transition: all linear 0.3s;
`;

const SaleCardImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const SaleCardContent = styled.div`
  border-radius: 0 20px 20px 0;
  width: 50%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  @media screen and (max-width: 1180px) {
    width: 100%;
    border-radius: 0 0 20px 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 370px) {
    padding: 20px;
  }
`;

const SaleCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SaleCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PrimaryText = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
`;

const SecondaryText = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

const DesktopImg = styled.img`
  width: auto;
  height: 30px;
  @media screen and (max-width: 1180px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileImg = styled.img`
  width: auto;
  height: 30px;
  display: none;
  @media screen and (max-width: 1180px) {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialLogo = styled.img`
  width: auto;
  height: 15px;
  &:hover {
    filter: brightness(0) invert(1);
    color: #ffffff;
  }
`;

const SaleCardText = styled.div`
  font-size: 13px;
  line-height: 20px;
  max-width: 500px;
`;

const SaleCardAction = styled.div`
  display: flex;
  gap: 17px;
  align-items: flex-end;
  @media screen and (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    gap: 30px;
  }

  @media screen and (max-width: 420px) {
    gap: 20px;
  }
`;

interface SaleMiniCardProps {
  value: number;
  currency: string;
  name: string;
}

const SaleMiniCard = (props: SaleMiniCardProps) => {
  const { value, currency, name } = props;
  return (
    <SaleMiniCardContainer>
      <SaleMiniCardValue>{value}</SaleMiniCardValue>
      <SaleMiniCardCurrency>{currency}</SaleMiniCardCurrency>
      <SaleMiniCardName>{name}</SaleMiniCardName>
    </SaleMiniCardContainer>
  );
};

const SaleMiniCardContainer = styled.div`
  display: flex;
  width: 106px;
  height: 106px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 11px;
  border: 1px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 540px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 420px) {
    width: 80px;
    height: 80px;
  }
`;

const SaleMiniCardValue = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

const SaleMiniCardCurrency = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 420px) {
    font-size: 12px;
  }
`;

const SaleMiniCardName = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  line-height: 12px;
`;

interface SaleCardStatusProps {
  status: string;
}

const SaleCardStatus = (props: SaleCardStatusProps) => {
  const { status } = props;
  return (
    <SaleCardStatusContainer>
      <Signal status={status} />
      <StatusText>{status === 'active' ? 'LIVE NOW' : 'INACTIVE'}</StatusText>
    </SaleCardStatusContainer>
  );
};
const SaleCardStatusContainer = styled.div`
  display: flex;
  width: 106px;
  height: 106px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #ffffff;
  border-radius: 11px;
  gap: 10px;
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 540px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 420px) {
    width: 80px;
    height: 80px;
  }
`;

const Signal = styled.div<SaleCardStatusProps>`
  background-color: ${(props) => (props.status === 'active' ? '#52FFAC' : '#ff004a')};
  width: 23px;
  height: 23px;
  border-radius: 50%;
`;

const StatusText = styled.div`
  font-size: 11px;
  line-height: 13px;
  @media screen and (max-width: 420px) {
    font-size: 10px;
  }
`;

const SaleCardState = styled.div`
  display: flex;
  gap: 17px;
  @media screen and (max-width: 540px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const SaleCardButton = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;
