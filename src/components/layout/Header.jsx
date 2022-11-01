import React from 'react';
import styled from 'styled-components';

const Header = () => {
  // 전체차량
  // 차량상세
  // 뒤로가기 버튼
  const title = '전체차량';
  // const title = "차량상세";
  return (
    <HeaderStyle>
      <h1>{title}</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  text-align: center;
  padding: 19px 163px;
  h1 {
    font-size: 17px;
  }
`;
export default Header;
