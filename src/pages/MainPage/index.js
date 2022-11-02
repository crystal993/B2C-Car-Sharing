import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/Headers/PageHeader';
import AttributeHeader from '../../components/Headers/AttributeHeader';
import { getCarsData } from '../../api/fetchData';
import Loading from '../../components/Loading';
import NoData from '../../components/NoData';
import { vehicleSize, fuelType } from '../../constant/RequestQuery';
import CarListItem from '../../components/CarListItem';

const MainPage = () => {
  const [carListItems, setcarListItems] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoData, setHasNoData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCarsData(vehicleSize.C, fuelType.ev).then(payLoad => {
      if (payLoad.length === 0) {
        setHasNoData(true);
        setcarListItems(payLoad);
      } else {
        setHasNoData(false);
        setcarListItems(payLoad);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <PageHeader>전체차량</PageHeader>
      <AttributeHeader />
      {JSON.stringify(carListItems)}
      {hasNoData && <NoData />}
      {isLoading ? <Loading /> : <CarListItem />}
    </>
  );
};

export default MainPage;
