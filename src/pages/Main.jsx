import React from 'react';
import CarList from '../components/main/CarList';
import FilteringBar from '../components/main/FilteringBar';

const Main = () => {
  return (
    <>
      <FilteringBar />
      <CarList />
    </>
  );
};

export default Main;
