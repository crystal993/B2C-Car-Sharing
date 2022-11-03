import React from 'react';
import styled from 'styled-components';
import { useCarDispatch } from '../../context/CarListProvider';
import { useCarFilterList } from '../../api/carService';
import { CarActionType } from '../../context/actionTypes';
import SwiperTags from './SwiperTags';

const FilteringBar = () => {
  const dispatch = useCarDispatch();
  const getCarFilterList = useCarFilterList();

  const onSegClickHandler = e => {
    dispatch({ type: CarActionType.SET_SEGMENT, segment: e.target.value });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: '' });
    getCarFilterList({ segment: e.target.value });
  };

  const onFuelClickHandler = e => {
    dispatch({ type: CarActionType.SET_SEGMENT, segment: '' });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: e.target.value });
    getCarFilterList({ fuelType: e.target.value });
  };

  return (
    <Wrapper>
      <SwiperTags onSegClickHandler={onSegClickHandler} onFuelClickHandler={onFuelClickHandler} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.black};
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export default FilteringBar;
