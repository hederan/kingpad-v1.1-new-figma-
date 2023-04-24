import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 54px;

  @media screen and (max-width: 960px) {
    padding: 32px;
  }

  @media screen and (max-width: 450px) {
    padding: 21px;
  }

  background-color: ${(props) => props.theme.black};

  margin: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
`;
