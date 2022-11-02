import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <Wrapper>
      {title === '차량상세' && <></>}
      <SyledLink to="/">
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
  justify-content: flex-start;
  align-items: center;
`;

const SyledLink = styled(Link)`
  width: 100%;
  height: 6rem;
  color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.black};
`;

export default Header;
