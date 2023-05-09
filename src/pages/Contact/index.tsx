import styled from 'styled-components';
import { ContactBanner } from './ContactBanner';
import { ContactAction } from './ContactAction';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactBanner />
      <ContactAction />
      <JoinCommunity />
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 110px 110px 0 110px;
  @media screen and (max-width: 1120px) {
    padding: 110px 0 0px 0px;
  }

  @media screen and (max-width: 640px) {
    gap: 72px;
  }
`;
