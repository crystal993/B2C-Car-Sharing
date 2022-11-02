import React from 'react';
import styled from 'styled-components';

function DetailInfoBar({ name = '', value }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Value>{value}</Value>
    </Wrapper>
  );
}

export default DetailInfoBar;

const Wrapper = styled.p`
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.29rem 2.2rem 1.4rem 1.9rem;
`;

const Name = styled.div`
  font-weight: 700;
`;

const Value = styled.div``;
