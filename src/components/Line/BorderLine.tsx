import styled from 'styled-components';

export const BorderLine = () => {
  return <BorderLineContainer />;
};

export const MobileBorderLine = () => {
  return <MobileBorderLineContainer />;
};

const BorderLineContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
`;

export const MobileBorderLineContainer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  display: none;
  @media screen and (max-width: 840px) {
    display: block;
  }
`;
