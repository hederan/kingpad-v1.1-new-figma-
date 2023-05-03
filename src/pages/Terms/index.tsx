import styled from 'styled-components';
import { TermsContext } from './TermsContext';

export const Terms = () => {
  return (
    <TermsContainer>
      <TermsContext />
    </TermsContainer>
  );
};

const TermsContainer = styled.div`
  padding: 60px 0;
  @media screen and (max-width: 1120px) {
    padding: 10px 0;
  }
`;
