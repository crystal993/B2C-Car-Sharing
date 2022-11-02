import CarList from '../src/components/main/CarList';
import Layout from '../src/components/elements/Layout';

export default function Home() {
  return (
    <>
      <Layout title={'전체차량'}>
        <CarList />
      </Layout>
    </>
  );
}
