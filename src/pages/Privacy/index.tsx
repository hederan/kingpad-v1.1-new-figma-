import styled from 'styled-components';
import { PrivacyContext } from './PrivacyContext';

export const Privacy = () => {
  return (
    <PrivacyContainer>
      <PrivacyContext />
    </PrivacyContainer>
  );
};

const PrivacyContainer = styled.div`
  padding: 60px 0;
  @media screen and (max-width: 1120px) {
    padding: 10px 0;
  }
`;
