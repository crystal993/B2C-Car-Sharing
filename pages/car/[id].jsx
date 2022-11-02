import { useEffect } from 'react';
import { CarService } from '../../src/api/request';
import Layout from '../../src/components/layout/Layout';
import DetailContainer from '../../src/container/Detail/Detail';
import { CarActionType } from '../../src/stores/ActionTypes';
import { useCarDetailChange } from '../../src/stores/CarDetailProvider';

const CarDetail = ({ data }) => {
  const dispatch = useCarDetailChange();
  useEffect(() => {
    if (data.length) {
      dispatch({ type: CarActionType.GET_CAR_DETAIL, detail: data[0] });
    }
  }, [data, dispatch]);

  return <Layout content={<DetailContainer />} isDetail />;
};

export const getStaticPaths = async () => {
  const {
    data: { payload },
  } = await CarService.getCarList();
  const paths = payload.map(({ id }) => ({ params: { id: String(id) } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async context => {
  try {
    const { id } = context.params;
    const {
      data: { payload },
    } = await CarService.getCarList();
    const data = payload.filter(car => car.id === Number(id));

    return {
      props: { data },
      revalidate: 5,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default CarDetail;
