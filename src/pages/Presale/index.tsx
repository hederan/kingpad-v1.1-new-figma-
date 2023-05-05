import styled from 'styled-components';
import { PresaleBanner } from './PresaleBanner';
import { PresaleHeader } from './PresaleHeader';
import { PresaleProgress } from './PresaleProgress';
import { BorderLine } from 'src/components/Line/BorderLine';
import { PresaleInfos } from './PresaleInfos';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const PresalePage = () => {
  return (
    <PresalePageContainer>
      <PresaleBanner />
      <PresaleHeader />
      <BorderLine />
      <PresaleProgress />
      <BorderLine />
      <PresaleInfos />
      <BorderLine />
      <GapBox />
      <JoinCommunity />
    </PresalePageContainer>
  );
};

const PresalePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 540px) {
    gap: 25px;
  }
`;

const GapBox = styled.div`
  padding-bottom: 20px;
`;
