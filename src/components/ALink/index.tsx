import styled from 'styled-components';

interface ALinkProps {
  link: string;
  children: React.ReactNode;
}

export const ALink = (props: ALinkProps) => {
  const { link, children } = props;
  return (
    <ALinkContainer href={link} rel="noopenner noreferrer">
      {children}
    </ALinkContainer>
  );
};

const ALinkContainer = styled.a`
  outline: none;
  text-decoration: none;
  cursor: pointer;
  color: #ffffff;
`;
