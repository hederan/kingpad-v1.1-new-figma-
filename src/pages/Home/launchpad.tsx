import { ALink } from 'src/components/ALink';
import { DiscordSvg, MediumSvg, RocketLogo, TelegramSvg, TwitterSvg, YoutubeSvg } from 'src/config/images';
import styled, { keyframes } from 'styled-components';

export const LaunchPad = () => {
  return (
    <LaunchPadContainer>
      <SafePlaceWrapper>
        <SafePlaceContainer>
          <SafePlaceTitle>
            <PrimaryTitle>A Safe place</PrimaryTitle>
            <SecondaryTitle>
              to join the <BestLetter> best</BestLetter>.
            </SecondaryTitle>
          </SafePlaceTitle>
          <SafePlaceContent>Kingpad is your place to be if you are looking to invest in the future.</SafePlaceContent>
          <SocialItems>
            <ALink link="https://twitter.com/kingfinance">
              <SocialItem src={TwitterSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://t.me/KlNGfinance">
              <SocialItem src={TelegramSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://www.youtube.com/@kingfinanceco">
              <SocialItem src={YoutubeSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://medium.com/@kingfinance">
              <SocialItem src={MediumSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://discord.gg/kingfinance">
              <SocialItem src={DiscordSvg} alt="social-svg" />
            </ALink>
          </SocialItems>
        </SafePlaceContainer>
        <LaunchPadRocket>
          <LaunchPadRocketLogo />
        </LaunchPadRocket>
      </SafePlaceWrapper>
      <LaunchPadCard>
        <LaunchPadCardTitle>
          <LaunchPadCardPrimaryTitle>Launch with Kingpad</LaunchPadCardPrimaryTitle>
          <LaunchPadCardSecondaryTitle>Make sure to go through our vetting processes </LaunchPadCardSecondaryTitle>
        </LaunchPadCardTitle>
        <LaunchPadCardAction>
          <span>Apply Now</span>
        </LaunchPadCardAction>
        <LaunchPadCardContent>
          <LaunchPadCardBorder />
          <LaunchPadContentValue value="565k" title="Raised capital" />
          <LaunchPadCardContentBorder />
          <LaunchPadContentValue value="4.5k" title="Total participants" />
        </LaunchPadCardContent>
        <LaunchPadCardMobileAction>
          <span>Apply Now</span>
        </LaunchPadCardMobileAction>
      </LaunchPadCard>
    </LaunchPadContainer>
  );
};

const LaunchPadContainer = styled.div``;

const SafePlaceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  padding-top: 70px;
  justify-content: center;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    gap: 50px;
  }
  @media screen and (max-width: 450px) {
    gap: 30px;
  }
`;

const SafePlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1120px) {
    gap: 30px;
    align-items: center;
  }
`;

const SafePlaceTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 55px;
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 45px;
  }
  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`;

const PrimaryTitle = styled.div``;

const SecondaryTitle = styled.div`
  white-space: nowrap;
`;

const BestLetter = styled.span`
  background: linear-gradient(103.91deg, #cd9bf4 8.59%, #422ad9 86.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SafePlaceContent = styled.div`
  font-size: 16px;
  line-height: 25px;
  width: 388px;
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
    width: 290px;
  }
`;

const SocialItems = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media screen and (max-width: 1120px) {
    justify-content: center;
  }
`;

const SocialItem = styled.img`
  width: 24px;
  height: auto;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    width: 20px;
  }
`;

const LaunchPadRocket = styled.div`
  position: relative;
  width: 500px;
  height: 350px;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 240px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #432ad9;
    /* background-color: red; */
    filter: blur(220.362px);
    -webkit-filter: blur(220.362px);
    z-index: -1;
  }
`;

const floaty = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

const LaunchPadRocketLogo = styled.div`
  position: relative;
  animation: ${floaty} 2s infinite;
  z-index: 1;
  background-size: 100%;
  background-position: center center;
  background-image: url(${RocketLogo});
  background-repeat: no-repeat;
  width: 500px;
  height: 350px;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 240px;
  }
`;

const LaunchPadCard = styled.div`
  background: #060111;
  border-radius: 20px;
  margin-top: 50px;
  padding: 38px 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    gap: 25px;
    justify-content: center;
  }
  @media screen and (max-width: 540px) {
    padding: 38px 30px;
  }
`;

const LaunchPadCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  @media screen and (max-width: 1120px) {
    align-items: center;
  }
`;

const LaunchPadCardPrimaryTitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 540px) {
    font-size: 24px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
`;

const LaunchPadCardSecondaryTitle = styled.div`
  font-size: 13px;
  line-height: 20px;
  @media screen and (max-width: 540px) {
    font-size: 12px;
    line-height: 14px;
    width: 150px;
    text-align: center;
  }
  @media screen and (max-width: 380px) {
    font-size: 10px;
  }
`;

const LaunchPadCardAction = styled.div`
  border-radius: 100px;
  display: inline-block;
  padding: 14px 20px;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

const LaunchPadCardBorder = styled.div`
  width: 0px;
  border: 2px solid #ffffff;
  height: 112px;
  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

const LaunchPadCardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  @media screen and (max-width: 1120px) {
    gap: 54px;
  }
  @media screen and (max-width: 540px) {
    gap: 32px;
  }
`;

interface LaunchPadContentProps {
  value: string;
  title: string;
}

const LaunchPadContentValue = (props: LaunchPadContentProps) => {
  const { title, value } = props;

  return (
    <LaunchPadContentContainer>
      <LaunchPadValue>{value}</LaunchPadValue>
      <LaunchPadTitle>{title}</LaunchPadTitle>
    </LaunchPadContentContainer>
  );
};

const LaunchPadContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
`;

const LaunchPadValue = styled.div`
  font-size: 38px;
  line-height: 45px;
  background: linear-gradient(180deg, #432ad9 0%, #cd9bf4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'gotham-bold';
  @media screen and (max-width: 540px) {
    font-size: 30px;
  }
`;

const LaunchPadTitle = styled.div`
  width: 78px;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  @media screen and (max-width: 540px) {
    font-size: 11px;
    width: 64px;
  }
`;

const LaunchPadCardContentBorder = styled.div`
  width: 0px;
  border: 2px solid #ffffff;
  height: 84px;
  display: none;
  @media screen and (max-width: 1120px) {
    display: block;
  }
`;

const LaunchPadCardMobileAction = styled.div`
  display: none;
  border-radius: 100px;
  padding: 14px 20px;
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  @media screen and (max-width: 1120px) {
    display: inline-block;
  }
`;
