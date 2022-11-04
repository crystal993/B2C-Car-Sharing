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

const Wrapper = styled.div``;

const Main = styled.main``;

export default Layout;
