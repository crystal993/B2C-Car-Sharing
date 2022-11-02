import styled from 'styled-components';
import Empty from '../../components/Empty';
import { useCar } from '../../stores/CarListProvider';
import CarItem from './CarItem';

const CarSection = () => {
  const { carList } = useCar();
  if (!carList.length) return <Empty />;

  return (
    <Section>{carList && carList.map((car, index) => <CarItem key={index} car={car} />)}</Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: calc(100% - 40px);

  overflow: auto;
`;

export default CarSection;
