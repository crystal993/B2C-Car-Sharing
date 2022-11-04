import React from 'react';
import styled from 'styled-components';
import CarList from '../components/main/CarList';
import FilteringBar from '../components/main/FilteringBar';

const Main = () => {
  return (
    <Wrapper>
      <FilteringBar />
      <CarList />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
