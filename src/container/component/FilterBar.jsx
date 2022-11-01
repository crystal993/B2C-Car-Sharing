// import { CarService, useGetCarList } from '../../api/request';
import { CarService } from '../../api/request';
import Button from '../../components/common/Button';
import NewTag from '../../components/common/NewTag';
// import { useCarList } from '../../api/request';
// import { useCarChange } from '../../stores/CarListProvider';

const FilterBar = () => {
  // const getCar = useCarList();
  const getCar = CarService.useCarList();

  // const { setFuelType } = useCarChange();
  // if(diff_date <= 1) {
  //   console.log('new');
  // }
  // console.log(diff_date);
  // // const create_date = convertDate(car.createdAt);
  // // console.log(create_date);
  // return (
  //   <article>
  //     {car.attribute.brand}
  //     {car.attribute.name}
  //     {car.attribute.segment}
  //     {car.attribute.fuelType}
  //     {car.attribute.imageUrl}
  //     {car.amount}
  //     {car.createdAt}
  //   </article>
  // );
  const onButtonClick = () => {
    console.log('onClick');
    // fuelType: "gasoline" | "hybrid" | "ev"
    // segment: "C" | "D" | "E" | "SUV"
    getCar({ fuelType: 'gasoline' });
    // getCar({fuelType: "gasine"});
    // useGetCarList({fuelType: "gas"});
    //  CarService.useGetCarList({fuelType:"gas"});
    // setFuelType('gas');
    // setFuelType
  };
  return (
    <>
      <Button text="전체" isActive />
      <Button text="대형" onClick={onButtonClick} />
      <Button text="중형" />
      <Button text="소형" />
      <NewTag />
    </>
  );
};

export default FilterBar;
