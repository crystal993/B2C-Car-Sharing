import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAllCarList } from '../../api/carService';
import { useCarState } from '../../context/CarListProvider';
import MsgBox from '../elements/MsgBox';
import CarItem from './CarItem';

const CarSection = () => {
  const state = useCarState();
  const getAllCarList = useAllCarList();
  const { carList, isLoading } = state;

  useEffect(() => {
    getAllCarList();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <MsgBox txt={'불러오는 중'} />
      </Wrapper>
    );
  } else if (carList.length === 0) {
    return (
      <Wrapper>
        <MsgBox txt={'차량이 없습니다.'} />
      </Wrapper>
    );
  }
  return (
    <>
      {carList &&
        carList.map(car => {
          return (
            <>
              <CarItem car={car} key={car.id} />
            </>
          );
        })}
    </>
  );
};

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default CarSection;
