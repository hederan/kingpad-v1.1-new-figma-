import styled from 'styled-components';
import { tokenData } from './tokenData';

export const TokenChartInfo = () => {
  return (
    <InfoContainer>
      {tokenData.map((item, index) => (
        <TokenInfo color={item.color} label={item.label} key={index} />
      ))}
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: absolute;
  bottom: -20px;
  @media screen and (max-width: 540px) {
    bottom: 0px;
  }
`;

const TokenInfo = (props: { color: string; label: string }) => {
  return (
    <TokenInfoContainer>
      <TokenInfoBadge color={props.color} />
      <TokenInfoLabel>{props.label}</TokenInfoLabel>
    </TokenInfoContainer>
  );
};

const TokenInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
const TokenInfoBadge = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;
const TokenInfoLabel = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;
