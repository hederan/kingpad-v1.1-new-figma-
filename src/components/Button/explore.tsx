import styled from 'styled-components';

interface ExploreButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const ExploreButton = (props: ExploreButtonProps) => {
  const { onClick, children } = props;
  return <ExploreButtonContainer onClick={onClick}>{children}</ExploreButtonContainer>;
};

const ExploreButtonContainer = styled.div`
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  width: fit-content;
  font-family: 'gotham-bold';
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  transition: all linear 0.6s;
  position: relative;
  cursor: pointer;
  background: linear-gradient(283.23deg, #432ad9 25.15%, #cd9bf4 124.03%);
  z-index: 1;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 20px;
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
`;
