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
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  width: fit-content;
  cursor: url(${HandCursorPng}), auto;
  :hover {
    background: linear-gradient(101.12deg, #8462f6 12.74%, #432ad9 74.63%);
    background-origin: border-box;
  }
`;
