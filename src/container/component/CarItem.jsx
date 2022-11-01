import React from 'react';
import { getDateDiff } from '../../utils/convertDate';

const CarItem = ({ car }) => {
  // console.log(car);
  // brand
  // name
  // segment
  // fuelType
  // imageUrl
  // amount
  // createdAt 생성일

  const diff_date = getDateDiff(car.createdAt);

  if (diff_date <= 1) {
    // console.log('new');
  }
  // console.log(diff_date);
  // const create_date = convertDate(car.createdAt);
  // console.log(create_date);
  return (
    <article>
      {car.attribute.brand}
      {car.attribute.name}
      {car.attribute.segment}
      {car.attribute.fuelType}
      {car.attribute.imageUrl}
      {car.amount}
      {car.createdAt}
    </article>
  );
};

export default CarItem;
