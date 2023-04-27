import styled from 'styled-components';
import {
  DiscordSvg,
  EthereumLogo,
  FacebookSvg,
  InstagramSvg,
  SplashImage,
  TelegramSvg,
  TwitterSvg,
  WebsiteSvg,
  YoutubeSvg
} from 'src/config/images';
import { ExploreButton } from '../Button/explore';
import { ALink } from '../ALink';

export const LaunchCard = () => {
  return (
    <LaunchCardContainer>
      <LaunchCardImageContainer>
        <LaunchCardImage src={SplashImage} alt="launchcard-image" />
        <LaunchCardImageCover />
      </LaunchCardImageContainer>
      <LaunchCardContent>
        <LaunchCardHeader>
          <LaunchCardHeaderContent>
            <SecondaryText>Next Launch</SecondaryText>
            <LaunchCardTitle>Project Name</LaunchCardTitle>
            <SocialLinks>
              <ALink link="/">
                <SocialLink src={WebsiteSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={TwitterSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={TelegramSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={DiscordSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={YoutubeSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={FacebookSvg} alt="social-link" />
              </ALink>
              <ALink link="/">
                <SocialLink src={InstagramSvg} alt="social-link" />
              </ALink>
            </SocialLinks>
          </LaunchCardHeaderContent>
          <ProjectLogo src={EthereumLogo} alt="project-logo" />
        </LaunchCardHeader>
        <LaunchMiniCardContainer>
          <LaunchMiniCard value={500} currency="BNB" name="Total Raise" />
          <LaunchMiniCard value={4} currency="BNB" name="Max contr." />
          <LaunchpadStatus status="upcoming" />
        </LaunchMiniCardContainer>
        <LaunchCardAction>
          <LaunchCardTimeContainer>
            <LaunchCardTimerTitle>Starts In</LaunchCardTimerTitle>
            <LaunchCardTimer>20 | 14 | 34 | 12</LaunchCardTimer>
          </LaunchCardTimeContainer>
          <ExploreButton>Explore</ExploreButton>
        </LaunchCardAction>
      </LaunchCardContent>
    </LaunchCardContainer>
  );
};

const LaunchCardImage = styled.img`
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 100%;
  filter: grayscale(50);
  object-fit: cover;
  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

const LaunchCardImageCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: #432ad9;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.6;
  border-radius: 20px 20px 0 0;
  transition: all linear 0.3s;
`;

const LaunchCardContainer = styled.div`
  background: #060111;
  border-radius: 20px;
  z-index: 1;
  width: 360px;
  height: 532px;
  @media screen and (max-width: 1240px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }

  &:hover ${LaunchCardImage} {
    filter: none;
  }

  &:hover ${LaunchCardImageCover} {
    opacity: 0;
  }
  transition: all linear 0.3s;
`;

const LaunchCardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;

const LaunchCardContent = styled.div`
  padding: 30px;
  background: #060111;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 380px) {
    padding: 20px;
  }
`;

const LaunchCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LaunchCardHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SecondaryText = styled.div`
  font-size: 10px;
  line-height: 12px;
`;

const LaunchCardTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 21px;
  line-height: 25px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SocialLink = styled.img`
  height: 15px;
  width: auto;
  &:hover {
    filter: brightness(0) invert(1);
    color: #ffffff;
  }
`;

const ProjectLogo = styled.img`
  height: 32px;
  width: auto;
`;

const LaunchMiniCardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 420px) {
    gap: 15px;
  }
`;

interface LaunchMiniCardProps {
  value: number;
  currency: string;
  name: string;
}

const LaunchMiniCard = (props: LaunchMiniCardProps) => {
  const { value, currency, name } = props;
  return (
    <LaunchMiniCardWrapper>
      <LaunchMiniCardValue>{value}</LaunchMiniCardValue>
      <LaunchMiniCardCurrncy>{currency}</LaunchMiniCardCurrncy>
      <LaunchMiniCardName>{name}</LaunchMiniCardName>
    </LaunchMiniCardWrapper>
  );
};
const LaunchMiniCardWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1.5px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
`;

const LaunchMiniCardValue = styled.div`
  font-family: 'gotham-bold';
  font-size: 21px;
  line-height: 25px;
`;

const LaunchMiniCardCurrncy = styled.div`
  font-family: 'gotham-bold';
  font-size: 14px;
  line-height: 17px;
`;

const LaunchMiniCardName = styled.div`
  font-size: 11px;
  line-height: 13px;
`;

const LaunchpadStatus = (props: { status: string }) => {
  const { status } = props;
  return (
    <LaunchpadStatusContainer>
      <StatusCircle status={status} />
      <StatusText>{status}</StatusText>
    </LaunchpadStatusContainer>
  );
};

const LaunchpadStatusContainer = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  border: 1.5px solid #ffffff;
`;

const StatusCircle = styled.div<{ status: string }>`
  background-color: ${(props) =>
    props.status === 'upcoming' ? '#FF9B52' : props.status === 'ended' ? '#ff4056' : '#00fe9a'};
  width: 23px;
  height: 23px;
  border-radius: 50%;
`;

const StatusText = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
`;

const LaunchCardAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LaunchCardTimeContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media screen and (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LaunchCardTimerTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 14px;
  line-height: 17px;
  color: #8462f6;
`;

const LaunchCardTimer = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
`;
