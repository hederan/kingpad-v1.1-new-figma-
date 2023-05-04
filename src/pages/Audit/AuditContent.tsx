import styled from 'styled-components';

export const AuditContent = () => {
  return (
    <AuditContentContainer>
      <p>
        Kingpad and Certik are two prominent names in the blockchain and cryptocurrency industry, known for our
        commitment to quality and security. Our partnership offers startups launching on the King platform the best
        auditing quality and reputation, ensuring the best turnout for customers. <br />
        <br /> Kingpad is a platform that connects blockchain startups with investors, providing an opportunity for
        startups to launch their projects to a global audience. The platform offers various features such as
        fundraising, token distribution, and community building, making it an attractive option for entrepreneurs
        looking to launch their blockchain projects.
        <br />
        <br /> On the other hand, Certik is a leading blockchain security firm that specializes in smart contract audits
        and cybersecurity. Certik has an impressive track record of auditing and securing blockchain projects. Their
        unique approach to security has earned them a reputation as one of the most trusted names in the industry.
      </p>
      <p>
        Through this partnership, Kingpad and Certik work together to provide startups launching on our platform with
        the best auditing quality and reputation. Certik’s team of experienced auditors will conduct a thorough audit of
        each project, ensuring that it meets the highest standards of security and quality.
        <br />
        <br /> This audit process provides startups with the assurance that their project is secure and reliable, giving
        customers the confidence to invest comfortably.
        <br />
        <br /> The cooperation between Kingpad and Certik is a significant development in the blockchain industry, as it
        guarantees startups launching on Kingpad a fast, accurate and affordable way to be framed by the auditing leader
        in the space.
      </p>
    </AuditContentContainer>
  );
};

const AuditContentContainer = styled.div`
  display: flex;
  gap: 25px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  padding: 80px 40px;
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
