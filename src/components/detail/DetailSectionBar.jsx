import React from 'react';
import styled from 'styled-components';

function DetailSectionBar({ txt }) {
  return (
    <Wrapper>
      <Text>{txt}</Text>
    </Wrapper>
  );
}

export default DetailSectionBar;

const Wrapper = styled.div`
  width: 100%;
  height: 4.81rem;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 1.7rem;
  line-height: 2.05rem;
  font-weight: 700;
  padding: 1.3rem 2rem;
`;
