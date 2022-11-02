import styled from 'styled-components';
import Header from './Header';

const Layout = props => {
  return (
    <>
      <Header title={props.title} />
      <Main>{props.children}</Main>
    </>
  );
};

const Main = styled.main``;

export default Layout;
