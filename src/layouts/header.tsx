import styled from 'styled-components';
import { KingpadIconSvg, KingpadLogoSvg } from 'src/config/images';
import { BsList } from 'react-icons/bs';
import { useState } from 'react';
import { NavModal } from 'src/components/Modal/navmodal';
import { Container } from 'src/components/container/container';
import { ALink } from 'src/components/ALink';
import { WalletConnectButton } from 'src/components/Button/WalletConnectButton';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderContainer>
        <HeaderNavbar>
          <KingpadLogo src={KingpadLogoSvg} alt="kingpad-logo" onClick={() => navigate('/')} />
          <KingpadMobileLogo src={KingpadIconSvg} alt="kingpad-mobile-logo" />
          <NavLinkContainer>
            <NavLink>Service</NavLink>
            <NavLink>About</NavLink>
            <ALink link="https://kingpass.finance">
              <NavLink>Kingpass</NavLink>
            </ALink>
            <ALink link="https://kingworld.finance">
              <NavLink>$King</NavLink>
            </ALink>
          </NavLinkContainer>
          <MobileNavbar onClick={() => setModalOpen(true)}>
            <BsList style={{ width: '27px', height: '27px' }} />
          </MobileNavbar>
        </HeaderNavbar>
        <WalletConnectButton />
        <NavModal isState={isModalOpen} handleState={setModalOpen} />
      </HeaderContainer>
    </Container>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  font-size: 16px;
  @media screen and (max-width: 1250px) {
    gap: 65px;
  }
  @media screen and (max-width: 960px) {
    gap: 24px;
  }
  @media screen and (max-width: 420px) {
    gap: 12px;
    align-items: flex-start;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  font-size: 16px;
  @media screen and (max-width: 1250px) {
    gap: 65px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const KingpadLogo = styled.img`
  height: 27px;
  width: auto;
  cursor: pointer;
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
  }
`;

const NavLink = styled.div`
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  :hover {
    background: linear-gradient(99.95deg, #cd9bf4 8.73%, #432ad9 83.74%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }
`;

const MobileNavbar = styled.div`
  display: none;
  color: #ffffff;
  cursor: pointer;
  font-family: 'gotham-bold';
  @media screen and (max-width: 960px) {
    display: block;
  }
`;
