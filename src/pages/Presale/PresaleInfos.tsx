import styled from 'styled-components';
import { FiCopy } from 'react-icons/fi';
import CopyToClipboard from 'src/components/CopyToClipBoard';

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
      </SalesInfoContainer>
    </PresaleInfosContainer>
  );
};

const PresaleInfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SalesInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 42px;
  flex-direction: column;
`;

const SalesInfoTitle = styled.div`
  font-size: 21px;
  line-height: 25px;
  font-family: 'gotham-bold';
`;

const TokenDetailsContainer = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
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
