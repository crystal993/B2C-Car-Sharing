import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import segmentOption from '../../utils/constant/segmentOption';
import { useCarDispatch, useCarState } from '../../context/CarListProvider';
import { useCarFilterList } from '../../api/carService';
import fuelTypeOption from '../../utils/constant/fuelTypeOption';
import { CarActionType } from '../../context/actionTypes';

const FilteringBar = () => {
  const dispatch = useCarDispatch();
  const getCarFilterList = useCarFilterList();
  const { segment, fuelType } = useCarState();
  const onSegClickHandler = e => {
    console.log(segment, fuelType);
    dispatch({ type: CarActionType.SET_SEGMENT, segment: e.target.value });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: '' });
    getCarFilterList({ segment: e.target.value });
  };

  const onFuelClickHandler = e => {
    console.log(segment, fuelType);
    dispatch({ type: CarActionType.SET_SEGMENT, segment: '' });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: e.target.value });
    getCarFilterList({ fuelType: e.target.value });
  };
  return (
    <Wrapper>
      {segmentOption &&
        segmentOption.map((option, idx) => (
          <Button
            key={idx}
            value={option.value}
            content={option.name}
            active={option.value === segment ? 'active' : ''}
            onClick={onSegClickHandler}
          />
        ))}
      {fuelTypeOption &&
        fuelTypeOption.map((option, idx) => (
          <Button
            key={idx}
            value={option.value}
            content={option.name}
            active={option.value === fuelType ? 'active' : ''}
            onClick={onFuelClickHandler}
          />
        ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.black};
  padding: 0.7rem;
  display: flex;
  flex-direction: row;
  column-gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

export default FilteringBar;
