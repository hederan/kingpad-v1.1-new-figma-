import { KingpadFooterLogo, AssureDefiLogoSvg, KycBannerPng } from 'src/config/images';
import styled from 'styled-components';

export const KycBanner = () => {
  return (
    <KycBannerContainer>
      <KycBannerService>
        <KycBannerTitle>Kingpad and AssureDeFi</KycBannerTitle>
        <KycBannerText>Elite KYC services</KycBannerText>
        <KycBannerImageContainer>
          <KycBannerImg src={KingpadFooterLogo} alt="kingpad-logo" />
          <KycBannerImg src={AssureDefiLogoSvg} alt="certik-logo" />
        </KycBannerImageContainer>
      </KycBannerService>
      <KycBannerLogoContainer>
        <KycBannerBackgroundFilter />
        <KycBannerLogo src={KycBannerPng} alt="Kyc-banner" />
      </KycBannerLogoContainer>
    </KycBannerContainer>
  );
};

const KycBannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  position: relative;
  @media screen and (max-width: 1120px) {
    flex-direction: column-reverse;
  }
`;

const KycBannerService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1120px) {
    align-items: center;
  }
`;

const KycBannerTitle = styled.div`
  font-size: 55px;
  line-height: 66px;
  font-family: 'gotham-bold';
  width: 390px;
  @media screen and (max-width: 1120px) {
    width: 560px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    width: auto;
  }
`;

const KycBannerText = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
`;

const KycBannerImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 1120px) {
    padding-top: 30px;
  }
`;

const KycBannerImg = styled.img`
  height: 85px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 58px;
  }
`;

const KycBannerLogoContainer = styled.div`
  position: relative;
`;

const KycBannerLogo = styled.img`
  height: 380px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 260px;
  }
`;

const KycBannerBackgroundFilter = styled.div`
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
  @media screen and (max-width: 768px) {
    width: 320px;
    height: 640px;
  }
`;
