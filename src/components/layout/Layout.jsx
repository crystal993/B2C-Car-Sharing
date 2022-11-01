import React from 'react';
import Header from './Header';

const Layout = props => {
  // 전체차량
  // 차량상세
  // 뒤로가기 버튼

  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

// component 폴더를 만들어 AppLayout.tsx를 만든 뒤 pages/_app.tsx를 Layout으로 감싼다
// 원하는 전역 스타일링이나 모든 페이지에서 나왔으면 하는 요소를 AppLayout.tsx 에서 제어.
// pages 폴더 내부에서 원하는 페이지 루트를 만들고 필요한 컴포넌트들은 component 폴더 내부에서 만들어서 import한다.

export default Layout;
