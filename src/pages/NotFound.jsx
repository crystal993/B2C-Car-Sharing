import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return <Wrapper>ERROR || 잘못된 경로 입니다.</Wrapper>;
};

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFound;
