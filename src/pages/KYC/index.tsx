import styled from 'styled-components';
import { KycBanner } from './KycBanner';
import { KycContent } from './KycContent';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const KYC = () => {
  return (
    <KycContainer>
      <KycBanner />
      <KycContent />
      <JoinCommunity />
    </KycContainer>
  );
};

const KycContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
