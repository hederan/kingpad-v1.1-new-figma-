import { useState } from 'react';
import { HandCursorPng } from 'src/config/images';
import styled from 'styled-components';

export const ContactAction = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ContactActionContainer>
      <ContactInfoInputContainer>
        <ContactInput placeholder="Name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
        <ContactInput placeholder="Email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
      </ContactInfoInputContainer>
      <ContactInfoContent placeholder="Message" value={message} onChange={(e) => setMessage(e.currentTarget.value)} />
      <ContactInfoAction>
        <ContactInfoActionContainer>
          <ContactInfoNotification>Congratulations! Your message has been sent</ContactInfoNotification>
          <InfoSendButton>
            <span>Send Now</span>
            <HandCursorImg src={HandCursorPng} alt="hand-cursor" />
          </InfoSendButton>
        </ContactInfoActionContainer>
      </ContactInfoAction>
    </ContactActionContainer>
  );
};

const ContactActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactInfoInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const ContactInput = styled.input`
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 20px 19px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  width: 100%;
  background-color: transparent;
  font-family: 'gotham-book';
`;

const ContactInfoContent = styled.textarea`
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 20px 19px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  outline: none;
  background-color: transparent;
  font-family: 'gotham-book';
  resize: none;
  height: 360px;
`;

const ContactInfoAction = styled.div`
  height: 120px;
  position: relative;
  overflow: hidden;
`;

const ContactInfoActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const ContactInfoNotification = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #52ffac;
`;

const InfoSendButton = styled.button`
  border-radius: 100px;
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
  color: #ffffff;
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
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
