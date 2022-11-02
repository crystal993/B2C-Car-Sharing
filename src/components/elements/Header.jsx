import styled from 'styled-components';
import Link from 'next/link';

const Header = ({ title }) => {
  return (
    <Wrapper>
      <SyledLink href="/">
        <h1>{title}</h1>
      </SyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.subColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SyledLink = styled(Link)`
  width: 100%;
  height: 6rem;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`;

export default Header;
