import { ALink } from 'src/components/ALink';
import {
  DiscordSvg,
  FacebookSvg,
  InstagramSvg,
  TelegramSvg,
  TwitterSvg,
  WebsiteSvg,
  YoutubeSvg
} from 'src/config/images';
import styled from 'styled-components';
import { BiPlusCircle } from 'react-icons/bi';
import { FiPlayCircle } from 'react-icons/fi';
import {
  AuditBadge,
  BoostBadge,
  CertikBadge,
  EndorsedBadge,
  InHouseBadge,
  KYCBadge
} from 'src/components/Badge/Authentication';
import { MobileBorderLine } from 'src/components/Line/BorderLine';

export const PresaleHeader = () => {
  return (
    <PresaleHeaderContainer>
      <PresaleHeaderContent>
        <PresaleAvatar alt="presale-avatar" />
        <PresaleHeaderDetail>
          <PresaleTitle>Project Name</PresaleTitle>
          <PresaleSocialLinks>
            <ALink link="/">
              <PresaleSocialLink src={WebsiteSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={TwitterSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={TelegramSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={DiscordSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={YoutubeSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={FacebookSvg} alt="presale-social-link" />
            </ALink>
            <ALink link="/">
              <PresaleSocialLink src={InstagramSvg} alt="presale-social-link" />
            </ALink>
          </PresaleSocialLinks>
          <PresaleDescription>
            <ProjectDescription>
              Project Description <BiPlusCircle style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
            </ProjectDescription>
            <PlayVideo>
              Play Video <FiPlayCircle style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
            </PlayVideo>
          </PresaleDescription>
        </PresaleHeaderDetail>
      </PresaleHeaderContent>
      <MobileBorderLine />
      <PresaleBadgeContainer>
        <AuditBadge />
        <KYCBadge />
        <CertikBadge />
        <InHouseBadge />
        <EndorsedBadge />
        <BoostBadge />
      </PresaleBadgeContainer>
    </PresaleHeaderContainer>
  );
};

const PresaleHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
  }
  @media screen and (max-width: 540px) {
    gap: 25px;
  }
`;

const PresaleHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 840px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 540px) {
    gap: 15px;
  }
`;

const PresaleAvatar = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  background: #f13742;
  @media screen and (max-width: 540px) {
    width: 90px;
    height: 90px;
  }
`;

const PresaleHeaderDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
  align-items: flex-start;
`;

const PresaleTitle = styled.div`
  font-family: 'gotham-bold';
  font-size: 30px;
  line-height: 36px;
  @media screen and (max-width: 540px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

const PresaleSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const PresaleSocialLink = styled.img`
  width: auto;
  height: 14px;
  &:hover {
    filter: brightness(0) invert(1);
    color: #ffffff;
  }
`;

const PresaleDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  @media screen and (max-width: 540px) {
    gap: 20px;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  @media screen and (max-width: 540px) {
    gap: 7px;
    font-size: 11px;
    line-height: 13px;
  }
`;

const PlayVideo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  @media screen and (max-width: 540px) {
    gap: 7px;
    font-size: 11px;
    line-height: 13px;
  }
`;

const PresaleBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 375px;
  @media screen and (max-width: 1064px) {
    width: 280px;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    padding-left: 100px;
    padding-right: 100px;
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 640px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (max-width: 560px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 450px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
