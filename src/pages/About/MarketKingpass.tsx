import styled from 'styled-components';
import {
  PancakeswapLogoSvg,
  CoinmarketcaplogoSvg,
  CoingeckoLogoSvg,
  DextoolLogoSvg,
  AssureLogoSvg,
  CertikLogoSvg,
  CurveArrowSmallSvg,
  StarightArrowLongSvg,
  KingTokenPng,
  StarightArrowSmallSvg,
  HandCursorPng,
  KingpassPng
} from 'src/config/images';
import { ALink } from 'src/components/ALink';

export const MarketKingpass = () => {
  return (
    <MarketKingpassContainer>
      <MarketKingTokenContainer>
        <KingCurrecyContainer>
          <KingCurrncyPrimaryText>$KING</KingCurrncyPrimaryText>
          <KingCurrencySecondaryText>Our Currency as a propellant</KingCurrencySecondaryText>
          <KingCurrencyLogos>
            <ALink link="https://pancakeswap.finance/swap?outputCurrency=0x74f08aF7528Ffb751e3A435ddD779b5C4565e684">
              <KingCurrencyLogo src={PancakeswapLogoSvg} alt="currency-logo" />
            </ALink>
            <ALink link="https://coinmarketcap.com/currencies/king-finance/">
              <KingCurrencyLogo src={CoinmarketcaplogoSvg} alt="currency-logo" />
            </ALink>
            <ALink link="https://www.coingecko.com/en/coins/king-finance">
              <KingCurrencyLogo src={CoingeckoLogoSvg} alt="currency-logo" />
            </ALink>
            <ALink link="https://www.dextools.io/app/en/bnb/pair-explorer/0x236bb106fe084f11bce2c327cbaeafa5e104c783">
              <KingCurrencyLogo src={DextoolLogoSvg} alt="currency-logo" />
            </ALink>
            <ALink link="https://www.certik.com/projects/king">
              <KingCurrencyLogo src={CertikLogoSvg} alt="currency-logo" />
            </ALink>
            <ALink link="https://assuredefi.com/projects/king-finance/">
              <KingCurrencyLogo src={AssureLogoSvg} alt="currency-logo" />
            </ALink>
          </KingCurrencyLogos>
        </KingCurrecyContainer>
        <KingTokenContainer>
          <KingTokenImage src={KingTokenPng} alt="kingtoken-image" />
          <KingTokenExplainContainer>
            <StakeExplainContainer alignItems="flex-end">
              <ArrowImage src={CurveArrowSmallSvg} alt="arrow-image" />
              <TokenExplain title="Stake" content="Stake $KING in order to earn APY passives." />
            </StakeExplainContainer>
            <StakeExplainContainer alignItems="center">
              <ArrowImage src={StarightArrowLongSvg} alt="arrow-image" />
              <TokenExplain title="Disburse" content="Exchange $KING soon to purchase other currencies." />
            </StakeExplainContainer>
            <StakeExplainContainer alignItems="flex-start">
              <ReverseArrowImage src={CurveArrowSmallSvg} alt="arrow-image" />
              <TokenExplain
                title="Grow"
                content="After successful raises, 1% is allocated and burnt by the start-up in $KING."
              />
            </StakeExplainContainer>
          </KingTokenExplainContainer>
        </KingTokenContainer>
      </MarketKingTokenContainer>
      <ReserveContainer>
        <ReserveWrapper>
          <ReserveAction>
            <ReserveTitle>Reserve your allocation with Kingpass</ReserveTitle>
            <ReserveContent>
              Minting a Kingpass allows you to enjoy reserved allocations in every start-up launched at Kingpad. If you
              enjoy a relaxed and guaranteed way of investing, the Kingpass is what you are looking for.
            </ReserveContent>
            <MintButton>
              <span>Mint Now</span>
              {/* <HandCursorImg src={HandCursorPng} alt="hand-cursor" /> */}
            </MintButton>
          </ReserveAction>
          <ReserveImg src={KingpassPng} alt="Kingpass-img" />
        </ReserveWrapper>
        <ReserveText>
          <ReserveTextItem
            name="Guaranteed Allocation"
            content="Always have your automatic whitelist spot on KingPad sales"
          />
          <ReserveTextItem
            name="Reserved NFT drops"
            content="Own unique and exclusive wearables and land plots in the form of NFTs"
          />
          <ReserveTextItem name="-60% taxes on $KING" content="Trade $KING with 60% less taxes when you buy and sell" />
        </ReserveText>
      </ReserveContainer>
    </MarketKingpassContainer>
  );
};

const MarketKingpassContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  padding-top: 150px;
  @media screen and (max-width: 1240px) {
    padding-top: 64px;
  }
`;

const MarketKingTokenContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 145px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    gap: 60px;
  }
`;

const KingCurrecyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: -100px;
  @media screen and (max-width: 1120px) {
    align-items: center;
  }
`;

const KingCurrncyPrimaryText = styled.div`
  font-size: 55px;
  font-family: 'gotham-bold';
  line-height: 66px;
  text-align: center;
`;

const KingCurrencySecondaryText = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
  text-align: center;
`;

const KingCurrencyLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  row-gap: 20px;
  column-gap: 25px;
  padding-top: 50px;
  @media screen and (max-width: 1240px) {
    padding-top: 20px;
    display: flex;
  }
`;

const KingCurrencyLogo = styled.img`
  width: 24px;
  height: auto;
`;

const KingTokenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StakeExplainContainer = styled.div<{ alignItems: string }>`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: ${(props) => props.alignItems};
  margin-top: ${(props) => (props.alignItems === 'center' ? '60px' : 0)};
  @media screen and (max-width: 1240px) {
    align-items: center;
    margin-top: 0;
  }
`;

const ArrowImage = styled.img`
  height: 110px;
  width: auto;
  @media screen and (max-width: 1240px) {
    content: url(${StarightArrowSmallSvg});
    height: 60px;
  }
`;

const ReverseArrowImage = styled.img`
  height: 110px;
  width: auto;
  transform: rotateY(180deg);
  @media screen and (max-width: 1240px) {
    content: url(${StarightArrowSmallSvg});
    height: 60px;
  }
`;

const TokenExplain = (props: { title: string; content: string }) => {
  return (
    <TokenExplainContainer>
      <TokenExplainTitle>{props.title}</TokenExplainTitle>
      <TokenExplainContent>{props.content}</TokenExplainContent>
    </TokenExplainContainer>
  );
};

const TokenExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const TokenExplainTitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  font-family: 'gotham-bold';
  text-align: center;
`;

const TokenExplainContent = styled.div`
  font-size: 13px;
  line-height: 20px;
  width: 210px;
  padding: 0 15px;
  text-align: center;
  @media screen and (max-width: 1240px) {
    width: auto;
  }
`;

const KingTokenImage = styled.img`
  width: 350px;
  height: auto;
  position: absolute;
  top: -12rem;
  @media screen and (max-width: 1240px) {
    position: static;
  }
  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;

const KingTokenExplainContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 75px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    gap: 28px;
    padding-top: 20px;
  }
`;

const MintButton = styled.div`
  border-radius: 100px;
  /* cursor: url(${HandCursorPng}), auto; */
  cursor: pointer;
  border: 1px solid transparent;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  position: relative;
  background: linear-gradient(#060111, #060111) padding-box,
    linear-gradient(109.5deg, #cd9bf4 0%, #432ad9 99.79%) border-box;
  z-index: 1;
  width: fit-content;
  margin-top: 25px;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 100px;
    background: linear-gradient(101.12deg, #8462f6 12.74%, #432ad9 74.63%);
    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
    transform: scale(0.99);
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    background: none;
    transition: all linear 0.6s;
  }
  &:hover img {
    transform: translateY(-100px);
    visibility: visible;
  }
  span {
    font-family: 'gotham-bold';
    line-height: 20px;
  }
`;

const HandCursorImg = styled.img`
  width: auto;
  height: 80px;
  transform-origin: 0 100%;
  transition: transform 0.5s ease-out;
  position: absolute;
  bottom: -170px;
`;

const ReserveTitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  width: 220px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 768px) {
    width: 300px;
    text-align: center;
    font-size: 21px;
  }
`;

const ReserveWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 43px;
  @media screen and (max-width: 1240px) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
`;

const ReserveContent = styled.div`
  font-size: 13px;
  line-height: 20px;
  width: 290px;
  padding-top: 12px;
  @media screen and (max-width: 768px) {
    width: 350px;
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

const ReserveAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const ReserveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 43px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    gap: 54px;
  }
`;

const ReserveImg = styled.img`
  width: 290px;
  height: auto;
`;

const ReserveText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  @media screen and (max-width: 1240px) {
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 45px;
  }
`;

const ReserveTextItem = (props: { name: string; content: string }) => {
  return (
    <ReserveTextItemContainer>
      <ReserveTextItemName>{props.name}</ReserveTextItemName>
      <ReserveTextItemContent>{props.content}</ReserveTextItemContent>
    </ReserveTextItemContainer>
  );
};

const ReserveTextItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (max-width: 1240px) {
    align-items: center;
  }
`;

const ReserveTextItemName = styled.div`
  font-size: 21px;
  font-family: 'gotham-bold';
  line-height: 25px;
  @media screen and (max-width: 1240px) {
    width: 140px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ReserveTextItemContent = styled.div`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  @media screen and (max-width: 1240px) {
    width: 170px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 265px;
  }
`;
