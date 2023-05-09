import { ContactBannerPng } from 'src/config/images';
import styled from 'styled-components';

export const ContactBanner = () => {
  return (
    <ContactBannerContainer>
      <ContactBannerText>
        <ContactBannerTitle>Got a question or want to apply kingpad?</ContactBannerTitle>
        <ContactBannerContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </ContactBannerContent>
      </ContactBannerText>
      <ContactBannerLogoContainer>
        <ContactBannerBackgroundFilter />
        <ContactBannerLogo src={ContactBannerPng} alt="contact-banner" />
      </ContactBannerLogoContainer>
    </ContactBannerContainer>
  );
};

const ContactBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1120px) {
    flex-direction: column-reverse;
    gap: 38px;
  }
`;

const ContactBannerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 388px;
  @media screen and (max-width: 1120px) {
    width: 560px;
  }
  @media screen and (max-width: 640px) {
    width: auto;
  }
`;

const ContactBannerTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  @media screen and (max-width: 1120px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const ContactBannerContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

const ContactBannerLogoContainer = styled.div`
  position: relative;
`;

const ContactBannerBackgroundFilter = styled.div`
  background-color: #432ad9;
  background: #432ad9;
  filter: blur(220.362px);
  -webkit-filter: blur(220.362px);
  -webkit-backdrop-filter: blur(220.362px);
  backdrop-filter: blur(220.362px);
  position: absolute;
  width: 495.81px;
  height: 375.72px;
  z-index: -1;
  left: -70%;
  @media screen and (max-width: 1120px) {
    left: -35%;
  }
  @media screen and (max-width: 768px) {
    width: 280px;
    height: 640px;
  }
`;

const ContactBannerLogo = styled.img`
  width: 350px;
  height: auto;
  @media screen and (max-width: 640px) {
    width: 277px;
  }
`;
