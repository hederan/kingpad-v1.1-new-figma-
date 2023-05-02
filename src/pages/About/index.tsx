import styled from 'styled-components';
import { MarketKing } from './MarketKing';
import { AboutCards } from './AboutCards';
import { MarketKingpass } from './MarketKingpass';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const AboutPage = () => {
  return (
    <AboutPageContainer>
      <MarketKing />
      <AboutCards />
      <MarketKingpass />
      <JoinCommunity />
    </AboutPageContainer>
  );
};

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  position: relative;
  z-index: 2;
`;
