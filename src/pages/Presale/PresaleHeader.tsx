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
import { BiMinusCircle, BiPlusCircle } from 'react-icons/bi';
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
import { useState } from 'react';
import { Collapse } from '@mui/material';
import ModalVideo from 'react-modal-video';

export const PresaleHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <>
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
                Project Description{' '}
                {isOpen ? (
                  <BiMinusCircle
                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    onClick={() => setOpen(false)}
                  />
                ) : (
                  <BiPlusCircle
                    style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    onClick={() => setOpen(true)}
                  />
                )}
              </ProjectDescription>
              <PlayVideo>
                Play Video{' '}
                <FiPlayCircle
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                  onClick={() => setVideoOpen(true)}
                />
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
      <Collapse in={isOpen}>
        <DescriptionText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.{' '}
          <br />
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. <br />
          <br /> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
          aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </DescriptionText>
      </Collapse>
      <ModalVideo channel="youtube" isOpen={isVideoOpen} videoId="G-mIgkf0zAs" onClose={() => setVideoOpen(false)} />
    </>
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

const DescriptionText = styled.p`
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
