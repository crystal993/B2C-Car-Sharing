import Image from 'next/legacy/image';
import React from 'react';
import styled from 'styled-components';
import NewTag from '../../components/common/NewTag';
import { convertCurrency } from '../../utils/convertCurrency';
import { getDateDiff } from '../../utils/convertDate';
import { fuelType } from '../../utils/FilterType';

const CarItem = ({ car }) => {
  // console.log(car);
  // brand
  // name
  // segment
  // fuelType
  // imageUrl
  // amount
  // createdAt 생성일

  // console.log(diff_date);
  // const create_date = convertDate(car.createdAt);
  // console.log(create_date);
  //   {brand}
  // {name}
  // {segment} / {fuelType}
  // 월 {amount} 원 부터
  // const a = fuelType.filter(({name}) => name === car.attribute.fuelType);
  // console.log(a);
  const fuel = fuelType.find(({ name }) => name === car.attribute.fuelType)?.value;
  const currency = convertCurrency(car.amount);
  const diff_date = getDateDiff(car.createdAt);

  // @media (min-width: 450px) {
  //   html {
  //     max-width: 450px;
  //     margin: 0 auto;
  //   }
  // }
  return (
    <Article>
      <DescDiv>
        <TitleSpan>
          <p>{car.attribute.brand}</p>
          <p>{car.attribute.name}</p>
        </TitleSpan>
        <ContentSpan>
          <p>
            {car.attribute.segment} / {fuel}
          </p>
          <p>월 {currency} 원 부터</p>
        </ContentSpan>
      </DescDiv>
      <BGDiv>
        <div>
          <Image layout="fill" objectFit="contain" src={car.attribute.imageUrl} alt="car" />
        </div>
        {diff_date <= 1 && <NewTag />}
      </BGDiv>
    </Article>
  );
};

const Article = styled.article`
  display: flex;

  width: 100%;
  height: 120px;
  border-bottom: 1px solid #000;
`;
const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
  padding: 24px 20px;
`;
const TitleSpan = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
const ContentSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

const BGDiv = styled.div`
  position: relative;
  width: 50%;
  padding: 20px;

  background-color: #d9d9d9;
  background-clip: content-box;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

// const ImageDiv = styled.div`
//   background-color: #d9d9d9;
//   width: 100%;
//   height: 100%;
//   background-image: url(${({ url }) => url});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
// `;

export default CarItem;
