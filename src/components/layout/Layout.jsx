import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Layout = props => {
  // 전체차량
  // 차량상세
  // 뒤로가기 버튼

  return (
    <>
      <Header />
      <Main>{props.children}</Main>
    </>
  );
};

const Main = styled.main`
  height: calc(100% - 60px);
`;

export default Layout;
