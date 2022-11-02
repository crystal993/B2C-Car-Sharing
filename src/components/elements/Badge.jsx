import React from 'react';
import styled from 'styled-components';

function Badge({ content, value }) {
  return <Wrapper>{content && <Btn value={value}>{content}</Btn>}</Wrapper>;
}

const Wrapper = styled.div``;

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.8rem;
  width: 6.2rem;
  height: 2.7rem;
  color: ${props => props.theme.white};
  border-radius: 4.2rem;
  transition: 'all 0.3s';
  background-color: ${props => props.theme.mainColor};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  min-width: 6.2rem;
  width: max-content;
  height: 2.7rem;
  top: 0;
  bottom: 0.3rem;
  left: 10rem;
  right: 0;
`;

export default Badge;
