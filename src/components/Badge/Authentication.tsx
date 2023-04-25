import styled, { css } from 'styled-components';
import { BiCheck } from 'react-icons/bi';
import { CertikLogoSvg, KYCLogoSvg } from 'src/config/images';

export const AuditBadge = () => {
  return (
    <AuditBadgeContainer>
      <BiCheck
        style={{
          width: '24px',
          height: 'auto',
          color: '#52FFAC'
        }}
      />
      Audit
    </AuditBadgeContainer>
  );
};

export const KYCBadge = () => {
  return (
    <KYCBadgeContainer>
      <Img src={KYCLogoSvg} alt="kyc-logo" />
      KYC
    </KYCBadgeContainer>
  );
};

export const CertikBadge = () => {
  return (
    <CertikBadgeContainer>
      <Img src={CertikLogoSvg} alt="kyc-logo" />
      Certik Audit
    </CertikBadgeContainer>
  );
};

export const InHouseBadge = () => {
  return (
    <InHouseBadgeContainer>
      <BiCheck
        style={{
          width: '24px',
          height: 'auto',
          color: '#CF86EC'
        }}
      />
      In house
    </InHouseBadgeContainer>
  );
};

export const EndorsedBadge = () => {
  return (
    <EndorsedBadgeContainer>
      <BiCheck
        style={{
          width: '24px',
          height: 'auto',
          color: '#FDCE77'
        }}
      />
      Endorsed
    </EndorsedBadgeContainer>
  );
};

export const BoostBadge = () => {
  return (
    <BoostBadgeContainer>
      <BiCheck
        style={{
          width: '24px',
          height: 'auto',
          color: '#FC633F'
        }}
      />
      Boost
    </BoostBadgeContainer>
  );
};

const CommonStyle = css`
  padding: 12px 15px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 7.5px;
  border: 0.75px solid transparent;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  width: fit-content;
  height: 40px;
  @media screen and (max-width: 540px) {
    height: 29px;
    padding: 12px 8px;
    gap: 4px;
    font-size: 11px;
    line-height: 13px;
  }
`;

const AuditBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #daffed -11.96%, #52ffac 95.69%) border-box;
`;

const KYCBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #00b0e5 -11.96%, #432ad9 95.69%) border-box;
`;

const Img = styled.img`
  width: 24px;
  height: auto;
  @media screen and (max-width: 540px) {
    width: 18px;
  }
`;

const CertikBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #ffffff -11.96%, #938f8f 95.69%) border-box;
`;

const InHouseBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #ffd9e9 -11.96%, #eb71ff 95.69%) border-box;
`;

const EndorsedBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #ffe89b -11.96%, #fbaf4c 95.69%) border-box;
`;

const BoostBadgeContainer = styled.div`
  ${CommonStyle}
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(102.14deg, #fb9e34 -11.96%, #f13742 95.69%) border-box;
`;
