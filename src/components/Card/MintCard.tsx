import { KingpassSvg } from 'src/config/images';
import styled from 'styled-components';

export const MintCard = () => {
  return (
    <MintCardContainer>
      <KingpassImg src={KingpassSvg} alt="kingpass-img" />
      <MintCardSpace />
      <MintCardWrapper>
        <MintCardContent>
          <PrimaryText>Reserve your allocation </PrimaryText>
          <SecondaryText>
            Minting a Kingpass allows you to enjoy reserved allocations in every start-up launched at Kingpad. If you
            enjoy a relaxed and guaranteed way of investing, the Kingpass is what you are looking for.
          </SecondaryText>
        </MintCardContent>
        <MintButton>
          <span>Mint Now</span>
        </MintButton>
      </MintCardWrapper>
    </MintCardContainer>
  );
};

const MintCardContainer = styled.div`
  background: #060111;
  border-radius: 20px;
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1084px) {
    padding: 15px;
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 30px 40px 30px;
  }
`;

const KingpassImg = styled.img`
  position: absolute;
  top: -35px;
  left: 40px;
  @media screen and (max-width: 1084px) {
    position: static;
  }
`;

const MintCardSpace = styled.div`
  width: 330px;
  height: auto;
  @media screen and (max-width: 1084px) {
    display: none;
  }
`;

const MintCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1084px) {
    flex-direction: column;
    gap: 35px;
  }
`;

const MintCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PrimaryText = styled.div`
  font-size: 30px;
  line-height: 36px;
  font-family: 'gotham-bold';
  font-family: 'gotham-bold';
  @media screen and (max-width: 1084px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 380px) {
    font-size: 20px;
  }
  @media screen and (max-width: 340px) {
    font-size: 18px;
  }
`;

const SecondaryText = styled.div`
  font-size: 13px;
  line-height: 20px;
  max-width: 520px;
  @media screen and (max-width: 1084px) {
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const MintButton = styled.div`
  border-radius: 100px;
  cursor: pointer;
  border: 1px solid transparent;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  span {
    font-family: 'gotham-bold';
    line-height: 20px;
  }
`;
