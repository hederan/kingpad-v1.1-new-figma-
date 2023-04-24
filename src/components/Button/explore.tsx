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
  cursor: pointer;
  width: fit-content;
`;
