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
      </PresaleProgressContent>
      {/* <PresaleProgressCardContainer>

            </PresaleProgressCardContainer> */}
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
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
`;

const TimeUnit = styled.div`
  font-weight: 700;
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
