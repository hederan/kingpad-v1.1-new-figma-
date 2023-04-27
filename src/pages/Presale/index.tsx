import styled from 'styled-components';
import { PresaleBanner } from './PresaleBanner';
import { PresaleHeader } from './PresaleHeader';
import { PresaleProgress } from './PresaleProgress';
import { BorderLine } from 'src/components/Line/BorderLine';
import { PresaleInfos } from './PresaleInfos';

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
