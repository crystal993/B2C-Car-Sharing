import React from 'react';
import styled from 'styled-components';

const Header = () => {
  // 전체차량
  // 차량상세
  // 뒤로가기 버튼
  const title = '전체차량';
  // const title = "차량상세";
  return <HeaderStyle>{title}</HeaderStyle>;
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  text-align: center;
  padding: 19px 0;

  font-size: 17px;
  font-weight: 700;
  line-height: 21px;

  border-bottom: 1px solid #000;
`;
export default Header;
