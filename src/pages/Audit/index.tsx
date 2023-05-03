import styled from 'styled-components';
import { AuditBanner } from './AuditBanner';
import { AuditContent } from './AuditContent';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const Audit = () => {
  return (
    <AuditContainer>
      <AuditBanner />
      <AuditContent />
      <JoinCommunity />
    </AuditContainer>
  );
};

const AuditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
