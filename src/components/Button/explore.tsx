import { HandCursorPng } from 'src/config/images';
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
  background: linear-gradient(283.23deg, #432ad9 25.15%, #cd9bf4 124.03%);
  border-radius: 30px;
  padding: 10px 20px;
  cursor: url(${HandCursorPng}), auto;
  width: fit-content;
  font-family: 'gotham-bold';
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  :hover {
    background: linear-gradient(283.23deg, #ffffff 25.15%, #cd9bf4 124.03%);
    color: #060111;
  }
`;
