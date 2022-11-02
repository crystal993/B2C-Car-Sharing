import React from 'react';
import styled from 'styled-components';

function Button({ content, onClick, active, value }) {
  return (
    <Wrapper onClick={onClick}>
      {content && (
        <Btn active={active} value={value}>
          {content}
        </Btn>
      )}
    </Wrapper>
  );
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
  color: ${props => (props.active === 'active' ? props.theme.white : props.theme.black)};
  border-radius: 6.2rem;
  transition: 'all 0.3s';
  background-color: ${props => (props.active === 'active' ? props.theme.black : props.theme.gray)};
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

export default Button;
