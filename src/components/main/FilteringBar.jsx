import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import segmentOption from '../../utils/constant/segmentOption';
import { useCarStateContext } from '../../context/CarListProvider';
import { api } from '../../api/api';

const FilteringBar = () => {
  const { segment } = useCarStateContext();
  const onClickHandler = e => {
    api.getFilterCarList({ segment: e.target.value });
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
            onClick={onClickHandler}
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
