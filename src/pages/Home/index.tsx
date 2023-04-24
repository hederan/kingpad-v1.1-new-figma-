import styled from 'styled-components';
import { LaunchPad } from './launchpad';
import { BlockchainIcons } from './blockchainIcons';
import { CardBox } from './cardbox';

export const Home = () => {
  return (
    <HomeContainer>
      <LaunchPad />
      <BlockchainIcons />
      <CardBox />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;
