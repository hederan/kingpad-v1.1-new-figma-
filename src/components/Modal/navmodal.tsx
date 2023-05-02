import styled from 'styled-components';
import { KingpadGrey, KingpadLogoGreySvg } from 'src/config/images';
import { MdClose } from 'react-icons/md';
import { TbChevronDown } from 'react-icons/tb';
import { useState } from 'react';
import { MobileServiceList } from '../Card/ServiceListCard';
import { useNavigate } from 'react-router-dom';

interface NavModalProps {
  isState: boolean;
  handleState: (value: boolean) => void;
}

interface CloseButtonProps {
  setState: any;
}

export const NavModal = (props: NavModalProps) => {
  const { isState, handleState } = props;
  const [isServiceOpen, setServiceOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <NavModalContainer style={{ visibility: isState ? 'visible' : 'hidden', opacity: isState ? 1 : 0 }}>
      <NavModalWrapper>
        <NavModalHeader>
          <KingpadLogo
            src={KingpadLogoGreySvg}
            alt="kingpad-logo"
            onClick={() => {
              handleState(false);
              navigate('/');
            }}
          />
          <KingpadMobileLogo
            src={KingpadGrey}
            alt="kingpad-mobile-logo"
            onClick={() => {
              handleState(false);
              navigate('/');
            }}
          />
          <CloseButton setState={handleState} />
        </NavModalHeader>
        <NavModalLinks>
          <NavModalLinkContainer>
            <NavModalLink onClick={() => setServiceOpen(!isServiceOpen)}>
              Service <NavDownIcon serviceopen={isServiceOpen ? 1 : 0} />
            </NavModalLink>
            <MobileServiceList serviceopen={isServiceOpen ? 1 : 0} />
          </NavModalLinkContainer>
          <NavModalLink onClick={() => navigate('/about')}>About</NavModalLink>
          <NavModalLink onClick={() => window.open('https://kingpass.finance')}>Kingpass</NavModalLink>
          <NavModalLink onClick={() => window.open('https://kingworld.finance')}>$KING</NavModalLink>
        </NavModalLinks>
      </NavModalWrapper>
    </NavModalContainer>
  );
};

const CloseButton = ({ setState }: CloseButtonProps) => {
  return (
    <CloseButtonContainer onClick={() => setState(false)}>
      <MdClose style={{ width: '24px', height: '24px' }} />
    </CloseButtonContainer>
  );
};

const CloseButtonContainer = styled.div`
  cursor: pointer;
  width: 27px;
  height: 27px;
  font-family: 'gotham-bold';
  font-size: 8px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavModalContainer = styled.div`
  z-index: 99999999999999999999999999999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(163.94deg, #8462f6 -8.68%, #432ad9 66.76%);
  transition: all linear 0.6s;
`;

const NavModalWrapper = styled.div`
  padding: 41px 32px;
  @media screen and (max-width: 540px) {
    padding: 37px 32px;
  }
  @media screen and (max-width: 450px) {
    padding: 26px 21px;
  }

  @media screen and (max-width: 420px) {
    padding: 24px 21px;
  }
`;

const NavModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const KingpadLogo = styled.img`
  width: auto;
  height: 27px;
  cursor: pointer;
  display: block;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;

const KingpadMobileLogo = styled.img`
  display: none;
  height: 27px;
  width: auto;
  @media screen and (max-width: 420px) {
    display: block;
    cursor: pointer;
  }
`;

const NavModalLinks = styled.div`
  padding-top: 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 62px;
`;

const NavModalLink = styled.div`
  font-size: 25px;
  color: #ffffff;
  line-height: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all linear 0.6s;
  width: 130px;
  cursor: pointer;
`;

const NavModalLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all linear 0.6s;
`;

const NavDownIcon = styled(TbChevronDown)<{ serviceopen: number }>`
  transform: ${(props) => (props.serviceopen === 1 ? 'rotate(180deg)' : 'rotate(0)')};
  transition: all linear 0.2s;
`;
