import styled from 'styled-components';
import { ALink } from '../ALink';
import { HandCursorPng, TelegramIcon } from 'src/config/images';

export const JoinCommunity = () => {
  return (
    <JoinCommunityContainer>
      <NewlaunchesText>Stay updated on new launches</NewlaunchesText>
      <ALink link="https://t.me/KlNGfinance">
        <JoinTelegram>
          <img src={TelegramIcon} alt="telegram-icon" />
          Join Now
          <HandCursor>
            <HandCursorImg src={HandCursorPng} alt="hand-cursor" />
          </HandCursor>
        </JoinTelegram>
      </ALink>
    </JoinCommunityContainer>
  );
};

const JoinCommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-bottom: 100px;
  overflow: hidden;
`;

const NewlaunchesText = styled.div`
  font-family: 'gotham-bold';
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 25px;
    width: 210px;
  }
`;

const JoinTelegram = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  gap: 10px;
  border-radius: 100px;
  font-family: 'gotham-bold';
  font-size: 17px;
  line-height: 20px;
  border: 1px solid transparent;
  width: fit-content;
  /* cursor: url(${HandCursorPng}), auto; */
  cursor: pointer;
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
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    background: none;
    transform: translateY(-6px);
  }
  &:hover div {
    transform: translateY(-120px);
  }
  transition: all linear 0.2s;
`;

const HandCursor = styled.div`
  width: auto;
  height: 80px;
  transform-origin: 0 100%;
  transition: transform 0.5s ease-out;
  position: absolute;
  bottom: -180px;
  left: 50px;
`;

const HandCursorImg = styled.img`
  width: 100%;
  height: 100%;
`;
