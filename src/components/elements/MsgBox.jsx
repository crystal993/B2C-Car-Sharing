import React from 'react';
import styled from 'styled-components';

const MsgBox = ({ txt }) => {
  return <Wrapper>{txt}</Wrapper>;
};

const Wrapper = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MsgBox;
