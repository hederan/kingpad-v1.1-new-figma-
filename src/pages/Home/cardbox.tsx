import { MintCard } from 'src/components/Card/MintCard';
import { SaleCard } from 'src/components/Card/SaleCard';
import styled from 'styled-components';
import { LaunchCard } from 'src/components/Card/LaunchCard';
import { DiscoverCard } from 'src/components/Card/DiscoverCard';
import { PhaseCard } from 'src/components/Card/PhaseCard';

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
      </ParticipiateContainer>
    </CardBoxContainer>
  );
};

const CardBoxBackground = styled.div`
  background-color: #432ad9;
  background: #432ad9;
  filter: blur(220.362px);
  -webkit-filter: blur(220.362px);
  -webkit-backdrop-filter: blur(220.362px);
  backdrop-filter: blur(220.362px);
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
  padding-bottom: 100px;
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

  @media screen and (max-width: 1240px) {
    width: 100%;
  }

  @media screen and (max-width: 860px) {
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
  @media screen and (max-width: 540px) {
    font-size: 25px;
  }
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
