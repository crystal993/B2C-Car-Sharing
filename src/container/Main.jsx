import { useCar } from '../stores/CarListProvider';
import FilterBar from './component/FilterBar';
import CarItem from './component/CarItem';
// import { getCarList } from "../api/request";

const MainContainer = () => {
  const { carList } = useCar();

  console.log(carList);
  // console.log(isError);

  return (
    <>
      <FilterBar />
      {carList?.map((car, index) => (
        <CarItem key={index} car={car} />
      ))}
    </>
  );
};

export default MainContainer;
