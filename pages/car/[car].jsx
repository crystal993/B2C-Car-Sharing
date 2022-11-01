import Link from 'next/link';
import { useRouter } from 'next/router'; // query parameter 을 사용하기 위해 next의 router 패키지의 useRouter를 가져온다.
// import { CarsService } from "../../src/apis/request";

const CarDetail = () => {
  const router = useRouter();

  // router의 url 쿼리에 존재하는 user 의 값을 가져온다. 이는 [user].jsx의 user와 대응된다.
  const { car } = router.query;

  return (
    <>
      <h3>사용자 이름: {car}</h3>

      <Link href="/">메인 이동하기</Link>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log(context)

//   const {
//     data: { payload },
//   } = await CarsService.getCarList();
//   const paths = payload.map((payload) => ({
//     params: { id: payload.id },
//   }))

//   return { paths, fallback: false }

//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()

//   // // data 없을 땐 리턴값을 달리함
//   //  if (!data) {
//   //   return {
//   //     redirect: {
//   //       destination: '/',
//   //       permanent: false,
//   //     },
//   //   }
//   // }

//   // //pageProps로 넘길 데이터
//   // return { props: { data, } }
// }
// Car.getStaticPaths
export default CarDetail;
