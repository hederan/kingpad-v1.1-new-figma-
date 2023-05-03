import styled from 'styled-components';

export const KycContent = () => {
  return (
    <KycContentContainer>
      <p>
        The primary objective of King is to create a safe and secure investment space for all users. Assure Defi has an
        excellent track record in providing top-notch auditing and KYC services for various blockchain projects. <br />
        <br /> Our partnership with Assure Defi will enable us to verify the identity of our users and ensure that our
        platform complies with all relevant regulations. This will give our users peace of mind and enable them to
        invest with confidence, knowing that they are using a secure and trustworthy platform.
        <br />
        <br /> In addition, we are proud to say that our partnership with Assure Defi goes beyond just KYC and auditing
        services. In the unfortunate event that any fraudulent activities or scams occur on our platform.
      </p>
      <p>
        Assure Defi will handle all the legal reports against the potential scammers. This additional measure
        demonstrates our commitment to providing a safer and more secure investment environment for our users.
        <br />
        <br /> Overall, we believe that our partnership with Assure Defi is a significant step in making KingPad the
        first choice for investors who prioritize security and transparency.
      </p>
    </KycContentContainer>
  );
};

const KycContentContainer = styled.div`
  display: flex;
  gap: 25px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  padding: 120px 80px;
  @media screen and (max-width: 1120px) {
    padding: 120px 0;
    gap: 65px;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 0;
    padding: 65px 0;
  }
  p {
    width: 100%;
  }
`;
