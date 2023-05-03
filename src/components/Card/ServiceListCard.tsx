import { Collapse } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuditIconSvg, KycIconSvg, LockIconSvg, RocketIconSvg } from 'src/config/images';
import styled from 'styled-components';

export const ServiceListCard = () => {
  const navigate = useNavigate();
  return (
    <ServiceListCardContainer>
      <ServiceList icon={RocketIconSvg} name="Launchpad" />
      <ServiceList icon={LockIconSvg} name="King Lock" soon={true} />
      <ServiceList icon={AuditIconSvg} name="Audit" onClick={() => navigate('/audit')} />
      <ServiceList icon={KycIconSvg} name="KYC" onClick={() => navigate('/kyc')} />
    </ServiceListCardContainer>
  );
};

export const MobileServiceList = (props: { serviceopen: number }) => {
  const navigate = useNavigate();
  return (
    <Collapse in={props.serviceopen === 1}>
      <MobileServiceListContainer serviceOpen={props.serviceopen}>
        <ServiceList icon={RocketIconSvg} name="Launchpad" mobile={1} />
        <ServiceList icon={LockIconSvg} name="King Lock" soon={true} mobile={1} />
        <ServiceList icon={AuditIconSvg} name="Audit" mobile={1} onClick={() => navigate('/audit')} />
        <ServiceList icon={KycIconSvg} name="KYC" mobile={1} onClick={() => navigate('/kyc')} />
      </MobileServiceListContainer>
    </Collapse>
  );
};

const ServiceListCardContainer = styled.div`
  background: linear-gradient(166deg, #cd9bf4 -50.95%, #ffffff 103.73%);
  border-radius: 10px;
  padding: 36px 42px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: absolute;
  top: 40px;
  left: -40px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all linear 0.6s;
`;

export const ServiceList = (props: {
  icon: string;
  name: string;
  soon?: boolean;
  mobile?: 1;
  onClick?: () => void;
}) => {
  return (
    <ServiceListContainer onClick={props.onClick}>
      <ServiceListIcon src={props.icon} alt="service-icon" mobile={props.mobile} />
      <ServiceListName>{props.name}</ServiceListName>
      {props.soon === true && <ServiceListSoon>Soon</ServiceListSoon>}
    </ServiceListContainer>
  );
};

const ServiceListName = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #060111;
  white-space: nowrap;
`;

const ServiceListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  :hover ${ServiceListName} {
    color: #432ad9;
  }
`;

const ServiceListIcon = styled.img<{ mobile?: number }>`
  width: 12px;
  height: 12px;
  filter: ${(props) => (props.mobile === 1 ? 'brightness(0) invert(1)' : 'none')};
`;

const ServiceListSoon = styled.div`
  width: 36px;
  height: 16px;
  background: #8462f6;
  border-radius: 30px;
  font-family: 'gotham-bold';
  font-size: 8px;
  line-height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileServiceListContainer = styled.div<{ serviceOpen: number }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 10px;
  cursor: pointer;
  padding-top: 30px;
  /* transition: all linear 0.6s;
  height: ${(props) => (props.serviceOpen === 1 ? '165px' : '0px')};
  opacity: ${(props) => (props.serviceOpen === 1 ? '1' : '0')}; */
  /* visibility: ${(props) => (props.serviceOpen === 1 ? 'visible' : 'hidden')}; */
`;
