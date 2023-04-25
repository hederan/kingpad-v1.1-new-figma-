import { MarioImage } from 'src/config/images';
import styled from 'styled-components';

export const PresaleBanner = () => {
  return (
    <PresaleBannerContainer>
      <Img backgroundImg={MarioImage} />
    </PresaleBannerContainer>
  );
};

const PresaleBannerContainer = styled.div`
  width: 100%;
  padding-top: 50px;
`;

const Img = styled.div<{ backgroundImg: string }>`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-image: url(${(props) => props.backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
