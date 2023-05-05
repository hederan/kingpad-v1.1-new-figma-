import { HandCursorPng, KingpassPng } from 'src/config/images';
import styled from 'styled-components';

export const MintCard = () => {
  return (
    <MintCardContainer>
      <KingpassImg src={KingpassPng} alt="kingpass-img" />
      <MintCardContentContainer>
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
            <HandCursorImg src={HandCursorPng} alt="hand-cursor" />
          </MintButton>
        </MintCardWrapper>
      </MintCardContentContainer>
    </MintCardContainer>
  );
};

const MintCardContainer = styled.div`
  background: #060111;
  border-radius: 20px;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  @media screen and (max-width: 1084px) {
    gap: 10px;
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 0 0 0;
  }
`;

const MintCardContentContainer = styled.div`
  background: #060111;
  border-radius: 20px;
  width: 100%;
  padding: 40px;
  position: relative;
  overflow: hidden;
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
  z-index: 1;
  height: 245px;
  width: auto;
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
  /* cursor: url(${HandCursorPng}), auto; */
  cursor: pointer;
  border: 1px solid transparent;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: relative;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 100px;
    background: linear-gradient(101.12deg, #8462f6 12.74%, #432ad9 74.63%);
    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
    transform: scale(0.99);
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    background: none;
    transition: all linear 0.6s;
  }
  &:hover img {
    transform: translateY(-100px);
    visibility: visible;
  }
  span {
    font-family: 'gotham-bold';
    line-height: 20px;
  }
`;

const HandCursorImg = styled.img`
  width: auto;
  height: 80px;
  transform-origin: 0 100%;
  transition: transform 0.5s ease-out;
  position: absolute;
  bottom: -170px;
`;
