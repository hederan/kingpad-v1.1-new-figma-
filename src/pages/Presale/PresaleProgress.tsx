import { ContributionCard, EndedCard, NoKingpassCard, NoWalletCard } from 'src/components/Card/PresaleStatusCard';
import { BorderLine } from 'src/components/Line/BorderLine';
import { BinanceLogo, StarSvg } from 'src/config/images';
import styled from 'styled-components';

export const PresaleProgress = () => {
  return (
    <PresaleProgressContainer>
      <PresaleProgressContent>
        <PresaleProgressInfos1>
          <BlockchainName>
            <BiananceImg src={BinanceLogo} alt="binance-logo" />
            <InfoName>Blockchain</InfoName>
          </BlockchainName>
          <PhaseName>
            <PresaleLogo />
            <InfoName>Phase</InfoName>
          </PhaseName>
          <PresaleDuration>
            <PresaleTime>
              <Timer>
                <TimeValue>12</TimeValue>
                <TimeUnit>H</TimeUnit>
              </Timer>
              <TimeLine />
              <Timer>
                <TimeValue>30</TimeValue>
                <TimeUnit>H</TimeUnit>
              </Timer>
            </PresaleTime>
            <InfoName>Kingstarter duration</InfoName>
          </PresaleDuration>
          <PresaleStatus>
            <Status name="upcoming" />
            <InfoName>Status</InfoName>
          </PresaleStatus>
        </PresaleProgressInfos1>
        <BorderLine />
        <PresaleProgressInfos2>
          <PresaleValueContainer>
            <PresaleValue value={900} currency={'BNB'} name="Soft cap" />
            <PresaleValue value={1800} currency={'BNB'} name="Soft cap" />
            <PresaleValue value={0.1} currency={'BNB'} name="Soft cap" />
            <PresaleValue value={4} currency={'BNB'} name="Soft cap" />
          </PresaleValueContainer>
          <PresaleDuration>
            <PresaleTime>
              <Timer>
                <TimeValue>01</TimeValue>
                <TimeUnit>D</TimeUnit>
              </Timer>
              <TimeLine />
              <Timer>
                <TimeValue>12</TimeValue>
                <TimeUnit>H</TimeUnit>
              </Timer>
              <TimeLine />
              <Timer>
                <TimeValue>22</TimeValue>
                <TimeUnit>M</TimeUnit>
              </Timer>
              <TimeLine />
              <Timer>
                <TimeValue>35</TimeValue>
                <TimeUnit>S</TimeUnit>
              </Timer>
            </PresaleTime>
            <InfoName>Starts In</InfoName>
          </PresaleDuration>
        </PresaleProgressInfos2>
        <BorderLine />
        <PresaleProgressInfos3>
          <ProgressBar value={50} />
          <PresaleValue value={900} currency={'BNB'} name="Raised" />
        </PresaleProgressInfos3>
      </PresaleProgressContent>
      <EndedCard />
    </PresaleProgressContainer>
  );
};

const PresaleProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`;

const PresaleProgressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
`;

const PresaleProgressInfos1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BlockchainName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: center;
`;

const PhaseName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const InfoName = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #cd9bf4;
`;

const BiananceImg = styled.img`
  width: 42px;
  height: 42px;
`;

const PresaleLogo = () => {
  return (
    <PresaleLogoContainer>
      <StarImg src={StarSvg} alt="star-logo" />
      Kingstarter
    </PresaleLogoContainer>
  );
};

const PresaleLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
`;

const StarImg = styled.img`
  width: 24px;
  height: 24px;
`;

const PresaleDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const PresaleTime = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Timer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TimeValue = styled.div`
  font-family: 'gotham-bold';
  font-size: 21px;
  line-height: 25px;
`;

const TimeUnit = styled.div`
  font-family: 'gotham-bold';
  font-size: 14px;
  line-height: 17px;
`;

const TimeLine = styled.div`
  width: 1px;
  height: 37px;
  background-color: #cd9bf4;
`;

const PresaleStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
const Status = (props: { name: string }) => {
  const { name } = props;
  return (
    <StatusContainer>
      <StatusBadge name={name} />
      {name}
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  gap: 3px;
`;

const StatusBadge = styled.div<{ name: string }>`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.name === 'upcoming' ? '#FF9B52' : props.name === 'ended' ? '#ff4056' : '#00fe9a'};
`;

const PresaleProgressInfos2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PresaleValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

interface PresaleValueProps {
  value: number;
  currency: string;
  name: string;
}

const PresaleValue = (props: PresaleValueProps) => {
  const { value, currency, name } = props;
  return (
    <PresaleValueWrapper>
      <PresaleNumberValue>{value}</PresaleNumberValue>
      <PresaleCurrency>{currency}</PresaleCurrency>
      <PresaleValueName>{name}</PresaleValueName>
    </PresaleValueWrapper>
  );
};

const PresaleValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const PresaleNumberValue = styled.div`
  font-family: 'gotham-bold';
  font-size: 21px;
  line-height: 25px;
`;

const PresaleCurrency = styled.div`
  font-family: 'gotham-bold';
  font-size: 14px;
  line-height: 17px;
`;

const PresaleValueName = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #cd9bf4;
`;

const PresaleProgressInfos3 = styled.div`
  display: flex;
  align-items: center;
  gap: 148px;
`;

const ProgressBar = (props: { value: number }) => {
  const { value } = props;
  return (
    <ProgressBarContainer>
      <ProgressValueBar value={value} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 15px 13px;
  width: 375px;
`;

const ProgressValueBar = styled.div<{ value: number }>`
  border: 5px solid #52ffac;
  border-radius: 10px;
  width: ${(props) => props.value}%;
`;
