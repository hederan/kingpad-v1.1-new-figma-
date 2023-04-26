import { DiamondSvg, KingsalePng, KingstarterPng, StarSvg } from 'src/config/images';
import styled from 'styled-components';

export const PhaseCard = (props: { name: string }) => {
  const { name } = props;
  return (
    <PhaseCardContainer>
      <PhaseCardContent>
        <PhaseCardID>PHASE 1</PhaseCardID>
        <PhaseCardTitle>
          <Img src={name === 'kingstarter' ? StarSvg : DiamondSvg} alt="phasecard-logo" />
          {name}
        </PhaseCardTitle>
        <PhaseCardSentence>
          {name === 'kingstarter' ? (
            <p>
              Early investing guaranteed. The Kingstarter is the very first launching phase at Kingpad, where users that
              hold a Kingpass are able to get a secured allocation before anyone else. <br />
              <br /> Steps are simple. Just get a Kingpass at kingpass.finance.
            </p>
          ) : (
            <p>
              Both for public and whitelisted investors. Work for your whitelist to invest before public users during
              the first two hours. <br />
              <br /> Enjoy competing for your early allocation whether you are whitelisted or not. Enjoy being part of
              the crowd. Enjoy Kingsale.
            </p>
          )}
        </PhaseCardSentence>
      </PhaseCardContent>
      <PhaseCardImage src={name === 'kingstarter' ? KingstarterPng : KingsalePng} alt="phasecard-image" />
    </PhaseCardContainer>
  );
};

const PhaseCardContainer = styled.div`
  background: linear-gradient(180deg, #432ad9 0%, #8462f6 85.42%);
  border-radius: 20px;
  width: 100%;
  height: 410px;
  padding: 47px 12px 47px 56px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  color: #ffffff;
  :hover {
    background: linear-gradient(180deg, #ffffff 0%, #cd9bf4 85.42%);
    color: #060111;
  }
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    width: 335px;
    padding: 43px;
    height: 480px;
    margin-bottom: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 230px;
    padding: 25px;
  }
  @media screen and (max-width: 540px) {
    width: 335px;
  }

  @media screen and (max-width: 420px) {
    width: 280px;
  }
`;

const PhaseCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const PhaseCardID = styled.div`
  font-size: 16px;
  line-height: 25px;
`;

const PhaseCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'gotham-bold';
  font-size: 30px;
  line-height: 36px;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const PhaseCardSentence = styled.div`
  font-size: 13px;
  line-height: 20px;
  padding-top: 14px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

const PhaseCardImage = styled.img`
  @media screen and (max-width: 1240px) {
    position: absolute;
    bottom: -130px;
    height: 278px;
  }
`;

const Img = styled.img`
  height: 34px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 25px;
  }
`;
