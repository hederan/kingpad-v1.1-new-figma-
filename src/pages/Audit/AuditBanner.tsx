import { KingpadFooterLogo, CertikBannerLogoSvg, CertikBannerPng } from 'src/config/images';
import styled, { keyframes } from 'styled-components';

export const AuditBanner = () => {
  return (
    <AuditBannerContainer>
      <AuditBannerService>
        <AuditBannerTitle>Kingpad and Certik</AuditBannerTitle>
        <AuditBannerText>Elite auditing services</AuditBannerText>
        <AuditBannerImageContainer>
          <AuditBannerImg src={KingpadFooterLogo} alt="kingpad-logo" />
          <AuditBannerImg src={CertikBannerLogoSvg} alt="certik-logo" />
        </AuditBannerImageContainer>
      </AuditBannerService>
      <AuditBannerLogoContainer>
        <AuditBannerBackgroundFilter />
        <AuditBannerLogo src={CertikBannerPng} alt="audit-banner" />
      </AuditBannerLogoContainer>
    </AuditBannerContainer>
  );
};

const AuditBannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 42px;
  position: relative;
  padding-top: 90px;
  @media screen and (max-width: 1120px) {
    flex-direction: column-reverse;
    padding-top: 60px;
    align-items: center;
  }
`;

const AuditBannerService = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1120px) {
    align-items: center;
  }
`;

const AuditBannerTitle = styled.div`
  font-size: 55px;
  line-height: 66px;
  font-family: 'gotham-bold';
  width: 290px;
  @media screen and (max-width: 1120px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const AuditBannerText = styled.div`
  font-size: 16px;
  line-height: 19px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
`;

const AuditBannerImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media screen and (max-width: 1120px) {
    padding-top: 30px;
  }
`;

const AuditBannerImg = styled.img`
  height: 85px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 58px;
  }
`;

const AuditBannerLogoContainer = styled.div`
  position: relative;
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

const AuditBannerLogo = styled.img`
  height: 380px;
  width: auto;
  animation: ${floaty} 2s infinite;
  @media screen and (max-width: 768px) {
    height: 260px;
  }
`;

const AuditBannerBackgroundFilter = styled.div`
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
