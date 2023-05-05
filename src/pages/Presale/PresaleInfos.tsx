import styled from 'styled-components';
import { FiCopy } from 'react-icons/fi';
import CopyToClipboard from 'src/components/CopyToClipBoard';
import { DistributionChart } from 'src/components/Chart';
import { TokenChartInfo } from 'src/components/Chart/chart-info';

export const PresaleInfos = () => {
  return (
    <PresaleInfosContainer>
      <SalesInfoContainer>
        <SalesInfoTitle>Sale infos</SalesInfoTitle>
        <TokenDetailsContainer>
          <SalesInfo name="Token name" value="Cradle Of Sins" />
          <SalesInfo name="Symbol" value="COS" />
          <SalesInfo name="Decimal" value={18} />
        </TokenDetailsContainer>
        <SalesInfo
          name="Token Address"
          value={<TokenAddressCopy value="0x4d9f39f7Cb7c7444335077223cEeF33dbB58096F" />}
        />
        <LiquidityContainer>
          <SalesInfo name="Launch On" value="Pancake Swap" />
          <SalesInfo name="Total Supply" value="1,000,000" />
          <SalesInfo name="Liquidity Percent" value="85%" />
          <SalesInfo name="Liquidity Lock time" value="365 Days" />
        </LiquidityContainer>
      </SalesInfoContainer>
      <SalesInfoLine transform="tablet" />
      <SalesInfoGroup>
        <VestingContainer>
          <SalesInfoTitle>Vesting</SalesInfoTitle>
          <VestingGroupContainer>
            {/* <VestingItemGroup> */}
            <VestingItem value={30} unit="%" text="First release Amount" />
            <VestingItem value={0} unit="Days" text="Vesting period each cycle" />
            {/* </VestingItemGroup> */}
            <VestingItem value={10} unit="%" text="Token release each cycle" />
          </VestingGroupContainer>
        </VestingContainer>
        <SalesInfoLine transform="mobile" />
        <DistributionInfoContainer>
          <Distributiontitle>Distribution</Distributiontitle>
          <DistributionContainer>
            <DistributionChartContainer>
              <DistributionChart />
            </DistributionChartContainer>
            <TokenChartInfo />
          </DistributionContainer>
        </DistributionInfoContainer>
      </SalesInfoGroup>
    </PresaleInfosContainer>
  );
};

const PresaleInfosContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const SalesInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 42px;
  flex-direction: column;
  @media screen and (max-width: 1240px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`;

const VestingGroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 42px;
  flex-direction: column;
  @media screen and (max-width: 1240px) {
    width: 250px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
  }
`;

const DistributionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1240px) {
    width: 100%;
  }
`;

const SalesInfoTitle = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
`;

const Distributiontitle = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const TokenDetailsContainer = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const SalesInfo = (props: { name: string; value: string | number | React.ReactNode }) => {
  const { name, value } = props;
  return (
    <SalesInfoWrapper>
      <SalesInfoName>{name}</SalesInfoName>
      <SalesInfoValue>{value}</SalesInfoValue>
    </SalesInfoWrapper>
  );
};

const SalesInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SalesInfoName = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #cd9bf4;
`;

const SalesInfoValue = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const TokenAddressCopy = (props: { value: string }) => {
  const { value } = props;
  return (
    <TokenAddressCopyContainer>
      <SalesInfoValue>{value}</SalesInfoValue>
      <CopyToClipboard>
        {({ copy }) => (
          <TokenAddressCopyButton onClick={() => copy(value)}>
            <FiCopy style={{ width: '100%', height: '100%' }} />
          </TokenAddressCopyButton>
        )}
      </CopyToClipboard>
    </TokenAddressCopyContainer>
  );
};

const TokenAddressCopyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TokenAddressCopyButton = styled.div`
  cursor: pointer;
  width: 18px;
  height: 18px;
  color: #777777;
`;

const LiquidityContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  row-gap: 50px;
  column-gap: 75px;
  @media screen and (max-width: 1240px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const SalesInfoLine = styled.div<{ transform: 'tablet' | 'mobile' }>`
  width: 1px;
  height: 391px;
  background-color: #ffffff;
  @media screen and (max-width: 1240px) {
    width: ${(props) => props.transform === 'tablet' && '100%'};
    height: ${(props) => (props.transform === 'tablet' ? '1px' : '351px')};
  }

  @media screen and (max-width: 768px) {
    width: ${(props) => props.transform === 'mobile' && '100%'};
    height: ${(props) => props.transform === 'mobile' && '1px'};
  }
`;

const VestingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 1240px) {
    justify-content: space-between;
    gap: 60px;
  }
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    gap: 35px;
  }
`;

const VestingItem = (props: { value: number; unit: string; text: string }) => {
  return (
    <VestingItemContainer>
      <VestingItemValue>{props.value}</VestingItemValue>
      <VestingItemUnit>{props.unit}</VestingItemUnit>
      <VestingItemText>{props.text}</VestingItemText>
    </VestingItemContainer>
  );
};

const VestingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const VestingItemValue = styled.div`
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
`;

const VestingItemUnit = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`;

const VestingItemText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #cd98f4;
  width: 100px;
  text-align: center;
  @media screen and (max-width: 450px) {
    width: 100%;
    font-size: 11px;
  }
`;

const DistributionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DistributionChartContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const SalesInfoGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 85px;
  @media screen and (max-width: 1240px) {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

// const VestingItemGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   @media screen and (max-width: 1240px) {
//     flex-direction: row;
//     align-items: flex-start;
//     gap: 56px;
//   }
//   @media screen and (max-width: 768px) {
//     justify-content: space-between;
//     width: 57%;
//   }
// `;
