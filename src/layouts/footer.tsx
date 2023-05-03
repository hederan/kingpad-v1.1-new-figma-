import styled from 'styled-components';
import { Container } from '../components/container/container';
import { DiscordSvg, KingpadFooterLogo, MediumSvg, TelegramSvg, TwitterSvg, YoutubeSvg } from 'src/config/images';
import { ALink } from 'src/components/ALink';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FooterContainer>
        <FooterLinkContainer>
          <FooterExplain>
            <FooterLogo
              src={KingpadFooterLogo}
              alt="kingpad-footer-logo"
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
            />
            <ExplainContent>Launching the future through De-Fi with safety and security.</ExplainContent>
          </FooterExplain>
          <FooterLinks>
            <FooterLinksWrapper>
              <FooterLink>
                <FooterLinkTitle>About</FooterLinkTitle>
                <FooterLinkNavs>
                  <FooterLinkNav>Launch with us</FooterLinkNav>
                  <FooterLinkNav
                    onClick={() => {
                      navigate('/audit');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Audit
                  </FooterLinkNav>
                  <FooterLinkNav
                    onClick={() => {
                      navigate('/kyc');
                      window.scrollTo(0, 0);
                    }}
                  >
                    KYC
                  </FooterLinkNav>
                  <ALink link="https://king-finance.gitbook.io/king-whitepaper">
                    <FooterLinkNav>Docs</FooterLinkNav>
                  </ALink>
                </FooterLinkNavs>
              </FooterLink>
              <FooterLink>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLinkNavs>
                  <FooterLinkNav
                    onClick={() => {
                      navigate('/about');
                      window.scrollTo(0, 0);
                    }}
                  >
                    About us
                  </FooterLinkNav>
                  <FooterLinkNav>Contact us</FooterLinkNav>
                </FooterLinkNavs>
              </FooterLink>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLink>
                <FooterLinkTitle>Ecosystem</FooterLinkTitle>
                <FooterLinkNavs>
                  <ALink link="https://kingworld.finance">
                    <FooterLinkNav>King</FooterLinkNav>
                  </ALink>
                  <ALink link="https://kingpass.finance">
                    <FooterLinkNav>Kingpass</FooterLinkNav>
                  </ALink>
                  <ALink link="https://kingfloki.finance">
                    <FooterLinkNav>Kingfloki</FooterLinkNav>
                  </ALink>
                </FooterLinkNavs>
              </FooterLink>
              <FooterLink>
                <FooterLinkTitle>Legal</FooterLinkTitle>
                <FooterLinkNavs>
                  <FooterLinkNav
                    onClick={() => {
                      navigate('/terms');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Terms of Use
                  </FooterLinkNav>
                  <FooterLinkNav
                    onClick={() => {
                      navigate('/privacy');
                      window.scrollTo(0, 0);
                    }}
                  >
                    Privacy Policy
                  </FooterLinkNav>
                </FooterLinkNavs>
              </FooterLink>
            </FooterLinksWrapper>
          </FooterLinks>
        </FooterLinkContainer>
        <FooterSocialContainer>
          <FooterSocialContent>
            Thank you for visiting Kingpad, a scalable launchpad designed to support companies of the future. Our
            mission is to provide innovative solutions for emerging businesses and help them achieve their full
            potential. However, please note that the content on our website is for informational purposes only and
            should not be construed as financial or investment advice. We do not endorse or recommend any specific
            investments or products. Any decision to invest should be based on your own research and consultation with a
            qualified financial advisor. Investing always involves risks, and we encourage you to exercise caution and
            carefully consider your options before making any financial decisions.
          </FooterSocialContent>
          <FooterSocialItems>
            <ALink link="https://twitter.com/kingfinance">
              <FooterSocialItem src={TwitterSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://t.me/KlNGfinance">
              <FooterSocialItem src={TelegramSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://www.youtube.com/@kingfinanceco">
              <FooterSocialItem src={YoutubeSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://medium.com/@kingfinance">
              <FooterSocialItem src={MediumSvg} alt="social-svg" />
            </ALink>
            <ALink link="https://discord.gg/kingfinance">
              <FooterSocialItem src={DiscordSvg} alt="social-svg" />
            </ALink>
          </FooterSocialItems>
        </FooterSocialContainer>
      </FooterContainer>
    </Container>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 40px;
  @media screen and (max-width: 450px) {
    gap: 50px;
  }
`;

const FooterExplain = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 54px;
  @media screen and (max-width: 1120px) {
    gap: 35px;
    align-items: center;
  }
`;
const FooterLogo = styled.img`
  width: auto;
  height: 80px;
  cursor: pointer;
`;

const ExplainContent = styled.div`
  font-size: 13px;
  line-height: 20px;
  width: 250px;
  @media screen and (max-width: 1120px) {
    width: auto;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    width: 260px;
  }
`;

const FooterLinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1120px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 100px;
  @media screen and (max-width: 1120px) {
    gap: 75px;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    gap: 30px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 100px;
  @media screen and (max-width: 1120px) {
    /* justify-content: space-between; */
    gap: 75px;
  }
  @media screen and (max-width: 350px) {
    gap: 30px;
  }
`;

const FooterLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;

const FooterLinkTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  color: #8462f6;
  font-family: 'gotham-bold';
`;

const FooterLinkNavs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterLinkNav = styled.div`
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
  :hover {
    background: linear-gradient(99.95deg, #cd9bf4 8.73%, #432ad9 83.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
`;

const FooterSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1120px) {
    flex-direction: column-reverse;
    gap: 75px;
  }
  @media screen and (max-width: 450px) {
    gap: 30px;
  }
`;

const FooterSocialContent = styled.div`
  font-size: 10px;
  line-height: 20px;
  width: 615px;
  @media screen and (max-width: 1120px) {
    width: auto;
  }
`;

const FooterSocialItems = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const FooterSocialItem = styled.img`
  width: 24px;
  height: auto;
  cursor: pointer;
  transition: all linear 0.2s;
  &:hover {
    filter: brightness(0) invert(1);
    color: #ffffff;
  }
  @media screen and (max-width: 450px) {
    width: 20px;
  }
`;
