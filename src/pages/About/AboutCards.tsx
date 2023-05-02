import styled from 'styled-components';
import { SafePng, ArrowBoardPng, CupPng } from 'src/config/images';

export const AboutCards = () => {
  return (
    <AboutCardsContainer>
      <BlueFilterBackground />
      <AboutCard
        logo={SafePng}
        title="Safe and Secure"
        content="We thoroughly vet all start-ups before they are listed on our platform, ensuring that only the best and most promising opportunities are available for investment."
      />
      <AboutCard
        logo={ArrowBoardPng}
        title="360-Degree Services"
        content="We provide our clients with everything they need to succeed, from fundraising strategy and marketing to legal and accounting support."
      />
      <AboutCard
        logo={CupPng}
        title="Experienced Team"
        content="Our team is made up of experienced professionals who are passionate about helping start-ups succeed. We use our knowledge and expertise to provide our clients with all the support they need to succeed."
      />
    </AboutCardsContainer>
  );
};

const AboutCardsContainer = styled.div`
  display: flex;
  gap: 24px;
  position: relative;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    gap: 86px;
  }
`;

const AboutCard = (props: { logo: string; title: string; content: string }) => {
  return (
    <AboutCardContainer>
      <AboutCardLogo src={props.logo} alt="card-logo" />
      <AboutCardText>
        <AboutCardTitle>{props.title}</AboutCardTitle>
        <AboutCardContent>{props.content}</AboutCardContent>
      </AboutCardText>
    </AboutCardContainer>
  );
};

const AboutCardContainer = styled.div`
  background-color: #060111;
  border-radius: 20px;
  position: relative;
  width: 357px;
  height: 394px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1240px) {
    flex-direction: row;
    width: 100%;
    height: 200px;
    gap: 62px;
    padding: 24px 52px;
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    padding: 33px;
    flex-direction: column;
  }
  &:hover {
    background: linear-gradient(315deg, #ffffff 0%, #cd9bf4 100%);
    color: #000000;
  }
`;

const AboutCardLogo = styled.img`
  position: absolute;
  height: 150px;
  width: auto;
  top: -34px;
  @media screen and (max-width: 1240px) {
    position: static;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: -65px;
  }
`;

const AboutCardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1240px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const AboutCardTitle = styled.div`
  font-size: 21px;
  font-family: 'gotham-bold';
  line-height: 25px;
  padding-top: 165px;
  @media screen and (max-width: 1240px) {
    padding-top: 0px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 105px;
  }
`;

const AboutCardContent = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 255px;
  text-align: center;
  padding-top: 16px;
  @media screen and (max-width: 1240px) {
    width: auto;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const BlueFilterBackground = styled.div`
  background-color: #432ad9;
  background: #432ad9;
  filter: blur(220.362px);
  -webkit-filter: blur(220.362px);
  -webkit-backdrop-filter: blur(220.362px);
  backdrop-filter: blur(220.362px);
  position: absolute;
  width: 995px;
  height: 1025px;
  z-index: -1;
  @media screen and (max-width: 1120px) {
    width: 511px;
    height: 1376.08px;
  }
  @media screen and (max-width: 640px) {
    width: 338.28px;
    height: 1795.31px;
  }
`;
