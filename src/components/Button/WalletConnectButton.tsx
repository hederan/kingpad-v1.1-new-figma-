import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components';
import { HandCursorPng } from 'src/config/images';

export const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isReady &&
          account != null &&
          chain != null &&
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <KingButton onClick={openConnectModal} type="button">
                    Connect
                  </KingButton>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <KingButton onClick={openChainModal} type="button">
                    Wrong Network
                  </KingButton>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <AwesomeButtonContainer
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </AwesomeButtonContainer> */}
                  <KingButton onClick={openAccountModal} type="button">
                    {account.displayName}
                    {/* {account.displayBalance != null ? ` (${account.displayBalance})` : ''} */}
                  </KingButton>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const KingButton = styled.button`
  border-radius: 50px;
  width: 132px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-family: 'gotham-bold';
  font-size: 15px;
  color: #ffffff;
  text-transform: none;
  cursor: pointer;
  position: relative;
  background: linear-gradient(283.23deg, #432ad9 25.15%, #cd9bf4 124.03%);
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50px;
    background: linear-gradient(283.23deg, #ffffff 25.15%, #cd9bf4 124.03%);
    z-index: -1;
    transition: opacity 0.3s linear;
    opacity: 0;
  }
  &:hover::before {
    opacity: 1;
  }
  :hover {
    color: #060111;
  }
  @media screen and (max-width: 540px) {
    height: 36px;
    width: 108px;
    font-size: 12px;
    line-height: 15px;
  }
`;
