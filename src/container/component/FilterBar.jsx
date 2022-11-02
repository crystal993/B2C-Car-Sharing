import styled from 'styled-components';
import { CarService } from '../../api/request';
import Button from '../../components/common/Button';
import { useCar } from '../../stores/CarListProvider';
import { segmentType } from '../../utils/FilterType';

const FilterBar = () => {
  const getCar = CarService.useCarList();
  const { segment } = useCar();
  const onSegmentClick = e => {
    getCar({ segment: e.target.value });
  };
  return (
    <FilterSection>
      {segmentType &&
        segmentType.map((type, index) => (
          <Button
            key={index}
            value={type.value}
            text={type.name}
            isActive={type.value === segment && true}
            onClick={onSegmentClick}
          />
        ))}
    </FilterSection>
  );
};

const FilterSection = styled.section`
  height: 40px;
  padding: 6px 4px;

  border-bottom: 1px solid #000;
`;

export default FilterBar;
