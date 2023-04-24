import { MintCard } from 'src/components/Card/MintCard';
import { SaleCard } from 'src/components/Card/SaleCard';
import styled from 'styled-components';
import { LaunchCard } from 'src/components/Card/LaunchCard';
import { DiscoverCard } from 'src/components/Card/DiscoverCard';
import { PhaseCard } from 'src/components/Card/PhaseCard';
import { TelegramIcon } from 'src/config/images';
import { ALink } from 'src/components/ALink';

export const CardBox = () => {
  return (
    <CardBoxContainer>
      <CardBoxBackground />
      <SaleCard />
      <MintCard />
      <LaunchCardContainer>
        <LaunchCardWrapper>
          <LaunchCard />
          <LaunchCard />
        </LaunchCardWrapper>
        <DiscoverCard />
      </LaunchCardContainer>
      <ParticipiateContainer>
        <ParticipiateTitle>How to participate</ParticipiateTitle>
        <PhaseCardContainer>
          <PhaseCard name="kingstarter" />
          <PhaseCard name="kingsale" />
        </PhaseCardContainer>
        <ParticipiateTitle>Stay updated on new launches</ParticipiateTitle>
        <ALink link="https://t.me/KlNGfinance">
          <JoinTelegram>
            <img src={TelegramIcon} alt="telegram-icon" />
            Join Now
          </JoinTelegram>
        </ALink>
      </ParticipiateContainer>
    </CardBoxContainer>
  );
};

const CardBoxBackground = styled.div`
  background: #432ad9;
  filter: blur(220.362px);
  opacity: 0.6;
  position: absolute;
  height: 1200px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    height: 1500px;
  }
  @media screen and (max-width: 768px) {
    height: 1800px;
  }
  @media screen and (max-width: 640px) {
    height: 2603px;
  }
`;

const CardBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  position: relative;
  padding-bottom: 150px;
`;

const LaunchCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
  }
`;

const LaunchCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ParticipiateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
`;

const ParticipiateTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
`;

const PhaseCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

const JoinTelegram = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  gap: 10px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  border: 1.5px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  cursor: pointer;
  width: fit-content;
`;
