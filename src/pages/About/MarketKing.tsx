import { CurveArrowLongSvg, MarketKingPng, StarightArrowLongSvg, StarightArrowSmallSvg } from 'src/config/images';
import styled from 'styled-components';

export const MarketKing = () => {
  return (
    <MarketKingContainer>
      <BlueFilterBackground />
      <MarketKingImageContainer>
        <MobileMarketKingImg src={MarketKingPng} alt="market-king-png" />
        <ExplainItemWrapper>
          <ArrowImg src={CurveArrowLongSvg} alt="curve-arrow" />
          <ExplainItem
            title="Why Choose Kingpad?"
            text="If you are a de-fi entrepreneur looking to raise capital for your start-up, look no further than Kingpad. We provide a safe and reliable launchpad for start-ups with great business plans."
          />
        </ExplainItemWrapper>
        <DesktopMarketKingImg src={MarketKingPng} alt="market-king-png" />
        <ExplainItemWrapper alignItems="flex-start">
          <RotateArrowImg src={CurveArrowLongSvg} alt="curve-arrow" />
          <ExplainItem
            title="How does Kingpad work?"
            text="Kingpad is simple. Apply, get accepted and receive full guidance from there on."
          />
        </ExplainItemWrapper>
      </MarketKingImageContainer>
      <KingpadExplainContainer>
        <StarightArrowImg src={StarightArrowLongSvg} alt="staright-arrow" />
        <ExplainItem
          title="How does Kingpad work?"
          text="Kingpad is a safe and reliable platform for entrepreneurs to raise capital and grow their businesses. We believe that every great idea deserves a chance to shine, and we are committed to making that happen."
          long={1}
        />
      </KingpadExplainContainer>
    </MarketKingContainer>
  );
};

const MarketKingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  gap: 32px;
  position: relative;
`;

const MarketKingImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

const KingpadExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ExplainItem = (props: { title: string; text: string; long?: number }) => {
  return (
    <ExplainItemContainer>
      <ExplainItemTitle>{props.title}</ExplainItemTitle>
      <ExplainItemText long={props.long}>{props.text}</ExplainItemText>
    </ExplainItemContainer>
  );
};

const ExplainItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ExplainItemTitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  font-family: 'gotham-bold';
  width: 240px;
  text-align: center;
  @media screen and (max-width: 1240px) {
    width: auto;
  }
  @media screen and (max-width: 640px) {
    font-size: 21px;
    line-height: 25px;
  }
`;

const ExplainItemText = styled.div<{ long?: number }>`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  width: ${(props) => (props.long === 1 ? '550px' : '360px')};
  height: 80px;
  @media screen and (max-width: 1240px) {
    width: 550px;
    height: fit-content;
  }
  @media screen and (max-width: 640px) {
    width: 300px;
  }
`;

const ExplainItemWrapper = styled.div<{ alignItems?: string }>`
  display: flex;
  align-items: ${(props) => (props.alignItems !== undefined ? props.alignItems : 'flex-end')};
  flex-direction: column;
  gap: 35px;
  @media screen and (max-width: 1240px) {
    align-items: center;
  }
`;

const ArrowImg = styled.img`
  height: 110px;
  width: auto;
  @media screen and (max-width: 1240px) {
    content: url(${StarightArrowSmallSvg});
    height: 60px;
  }
`;

const BlueFilterBackground = styled.div`
  background-color: #432ad9;
  background: #432ad9;
  filter: blur(220.362px);
  -webkit-filter: blur(220.362px);
  -webkit-backdrop-filter: blur(220.362px);
  backdrop-filter: blur(220.362px);
  position: absolute;
  height: 500px;
  width: 600px;
  z-index: -1;
  @media screen and (max-width: 640px) {
    width: 300px;
    height: 420px;
  }
`;

const DesktopMarketKingImg = styled.img`
  height: 560px;
  width: auto;
  @media screen and (max-width: 1240px) {
    display: none;
  }
`;

const MobileMarketKingImg = styled.img`
  height: 420px;
  width: auto;
  display: none;
  @media screen and (max-width: 1240px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    height: 385px;
    width: auto;
  }
`;

const RotateArrowImg = styled.img`
  height: 110px;
  width: auto;
  transform: rotateY(180deg);
  @media screen and (max-width: 1240px) {
    content: url(${StarightArrowSmallSvg});
    height: 60px;
  }
`;

const StarightArrowImg = styled.img`
  height: 90px;
  width: auto;
  @media screen and (max-width: 1240px) {
    content: url(${StarightArrowSmallSvg});
    height: 60px;
  }
`;
