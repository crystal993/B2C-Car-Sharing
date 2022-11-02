import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = props => {
  return (
    <Wrapper>
      <Header title={props.title} />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${props => props.theme.mobile_l};
  margin: 0 auto;
`;

const Main = styled.main`
  @media (max-width: ${props => props.theme.mobile_l}) {
    /* Mobile_L*/
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mobile_s}) {
    /* Mobile_S*/
    width: 100%;
  }
`;

export default Layout;
