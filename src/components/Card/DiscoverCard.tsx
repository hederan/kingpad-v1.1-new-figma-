import styled from 'styled-components';
import { RocketUpSvg } from 'src/config/images';
import { ExploreButton } from '../Button/explore';

export const DiscoverCard = () => {
  return (
    <DiscoverCardContainer>
      <DiscoverCardBackground />
      <RocketImg src={RocketUpSvg} alt="rocket-image" />
      <DiscoverCardAction>
        <DiscoverCardTitle>Discover all launches on Kingpad</DiscoverCardTitle>
        <ExploreButton>Explore all</ExploreButton>
      </DiscoverCardAction>
    </DiscoverCardContainer>
  );
};

const DiscoverCardContainer = styled.div`
  background: #060111;
  border-radius: 20px;
  width: 360px;
  height: 536px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  gap: 8px;
  padding: 28px;
  @media screen and (max-width: 1240px) {
    height: 200px;
    flex-direction: row;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const DiscoverCardBackground = styled.div`
  background-color: #cd9bf4;
  background: #cd9bf4;
  filter: blur(75px);
  -webkit-filter: blur(75px);
  position: absolute;
  top: 80px;
  width: 98px;
  height: 153px;
  @media screen and (max-width: 1240px) {
    width: 184px;
    height: 53px;
    filter: blur(40px);
    -webkit-filter: blur(40px);
    top: 70px;
    left: 100px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RocketImg = styled.img`
  margin-top: -60px;
  @media screen and (max-width: 1240px) {
    margin-top: 0px;
    transform: rotate(90deg);
    margin-left: 100px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DiscoverCardTitle = styled.div`
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  width: 128px;
  text-align: center;
  @media screen and (max-width: 1240px) {
    width: 100%;
  }

  @media screen and (max-width: 840px) {
    width: 245px;
  }
`;

const DiscoverCardAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  @media screen and (max-width: 1240px) {
    gap: 15px;
  }
`;
