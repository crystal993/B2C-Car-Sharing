import { useEffect } from 'react';
import Layout from '../src/components/layout/Layout';
import MainContainer from '../src/container/Main';
import { CarService } from '../src/api/request';
import { CarActionType, useCarChange } from '../src/stores/CarListProvider';

const Home = ({ payload }) => {
  const dispatch = useCarChange();
  useEffect(() => {
    dispatch({ type: CarActionType.GET_CAR_LIST, carList: payload });
  }, [payload]);

  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  try {
    const {
      data: { payload },
    } = await CarService.getCarList();
    return {
      props: { payload },
      revalidate: 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

export default Home;
