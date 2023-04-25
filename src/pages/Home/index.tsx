import styled from 'styled-components';
import { LaunchPad } from './launchpad';
import { BlockchainIcons } from './blockchainIcons';
import { CardBox } from './cardbox';
import { JoinCommunity } from 'src/components/JoinCommunity';

export const Home = () => {
  return (
    <HomeContainer>
      <LaunchPad />
      <BlockchainIcons />
      <CardBox />
      <JoinCommunity />
    </HomeContainer>
  );
};

const HomeContainer = styled.div``;
