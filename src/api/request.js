import instance from './axiosInstance';
import { CarActionType, useCarChange } from '../stores/CarListProvider';

const tmp_data = {
  data: {
    payload: [
      {
        id: 1,
        startDate: '2022-11-01T18:03:51.378Z',
        createdAt: '2022-11-01T18:03:51.378Z',
        attribute: {
          brand: '현대',
          name: '아반떼 CN7',
          segment: 'C',
          fuelType: 'gasoline',
          imageUrl: 'https://interview.platdev.net/avantecn7.png',
        },
        amount: 600000,
        insurance: [
          {
            name: '대인',
            description: '무한',
          },
          {
            name: '대물',
            description: '10억',
          },
        ],
        additionalProducts: [
          {
            name: '하이파킹 주차권',
            amount: 150000,
          },
        ],
      },
      {
        id: 2,
        startDate: '2022-11-01T18:03:51.378Z',
        createdAt: '2022-11-01T18:03:51.378Z',
        attribute: {
          brand: '현대',
          name: '아이오닉 5',
          segment: 'SUV',
          fuelType: 'ev',
          imageUrl: 'https://interview.platdev.net/ioniq5.png',
        },
        amount: 900000,
        insurance: [
          {
            name: '대인',
            description: '무한',
          },
          {
            name: '대물',
            description: '10억',
          },
        ],
        additionalProducts: [
          {
            name: '하이파킹 주차권',
            amount: 150000,
          },
          {
            name: '전기차 충전권',
            amount: 180000,
          },
        ],
      },
      {
        id: 3,
        startDate: '2022-11-01T18:03:51.378Z',
        createdAt: '2022-11-01T18:03:51.378Z',
        attribute: {
          brand: '기아',
          name: 'EV6',
          segment: 'SUV',
          fuelType: 'ev',
          imageUrl: 'https://interview.platdev.net/ev6.png',
        },
        amount: 800000,
        insurance: [
          {
            name: '대인',
            description: '무한',
          },
          {
            name: '대물',
            description: '10억',
          },
        ],
        additionalProducts: [],
      },
      {
        id: 4,
        startDate: '2022-11-01T18:03:51.378Z',
        createdAt: '2022-11-01T18:03:51.378Z',
        attribute: {
          brand: '기아',
          name: 'K5 DL3',
          segment: 'D',
          fuelType: 'gasoline',
          imageUrl: 'https://interview.platdev.net/k5.png',
        },
        amount: 700000,
        insurance: [
          {
            name: '대인',
            description: '무한',
          },
          {
            name: '대물',
            description: '10억',
          },
        ],
        additionalProducts: [
          {
            name: '하이파킹 주차권',
            amount: 150000,
          },
        ],
      },
      {
        id: 5,
        startDate: '2022-11-01T18:03:51.378Z',
        createdAt: '2022-11-01T18:03:51.378Z',
        attribute: {
          brand: 'Tesla',
          name: 'Model 3',
          segment: 'C',
          fuelType: 'ev',
          imageUrl: 'https://interview.platdev.net/model3.png',
        },
        amount: 1000000,
        insurance: [
          {
            name: '대인',
            description: '무한',
          },
          {
            name: '대물',
            description: '10억',
          },
        ],
        additionalProducts: [
          {
            name: '하이파킹 주차권',
            amount: 150000,
          },
        ],
      },
    ],
  },
};
// https://preonboarding.platdev.net/api/cars
// fuelType=ev&segment=C
// fuelType: "gasoline" | "hybrid" | "ev"

// segment: "C" | "D" | "E" | "SUV"
// export const CarService = {
//   getCarList: (params) => {
//     const config = {
//       params: params
//     };
//     console.log(config);
//     return tmp_data;
//     // return instance.get('/api/cars');
//   },
// };

export const CarService = {
  getCarList: () => {
    // return instance.get('/api/cars');
    return tmp_data;
  },
  useCarList: () => {
    const dispatch = useCarChange();
    return async params => {
      dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
      // dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_LOADING });
      try {
        const config = {
          params: params,
        };
        const { data } = await instance.get('/api/cars', config);
        dispatch({ type: CarActionType.GET_CAR_LIST_SUCCESS, carList: data.payload });
      } catch {
        dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });
      }
      //   const { data } = await axiosInstance.get(
      //     `/issues?sort=comments&page=${page}&per_page=10`
      //   );

      //   dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_SUCCESS, data });
      // } catch {
      //   dispatch({ type: IssueActionTypes.GET_ISSUE_LIST_ERROR });
      // }
      // try {
      //   const { data } = await instance.get('/api/cars');
      //   console.log(data);
      //   // setIssueList({ list: response.data, hasMore: response.data.length > 0, isLoading: false, isError: false });
      //   // const { data } = await tmp_data;
      //   // setCarList(data.payload);
      // } catch (e) {
      //   // setIsError(true);
      //   console.log(e);

      //   // dispatch({ type: 'GET_USERS_ERROR', error: e });
      // }
      // setCarList
    };
    // return tmp_data;
    // return instance.get('/api/cars');
  },
};

// export const useCarList = () => {
//   const { setCarList, setIsError } = useCarChange();
//   return (
//     async (params) => {
//       console.log(params);
//       try {
//         const config = {
//           params: params
//         };
//         const { data } = await instance.get('/api/cars', config);

//         // setIssueList({ list: response.data, hasMore: response.data.length > 0, isLoading: false, isError: false });
//         // const { data } = await tmp_data;
//         setCarList(data.payload);
//       } catch (e) {
//         setIsError(true);
//         console.log(e);

//         // dispatch({ type: 'GET_USERS_ERROR', error: e });
//       }
//       // setCarList
//     }
//   )
// }

// export const useGetUser = () => {
//   const { setCarList } = useIssueDispatch();
//   return (
//     async () => {
//       try {
//         const { data } = await instance.get('/api/cars');
//         setCarList(data);
//       } catch (e) {
//         console.log(e);
//         // dispatch({ type: 'GET_USERS_ERROR', error: e });
//       }
//       // setCarList
//     }
//   )
//   // try {
//   //   const { data } = await instance.get('/api/cars');
//   //   // const { data } = await tmp_data;
//   //   console.log(data);
//   //   // dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
//   // } catch (e) {
//   //   // dispatch({ type: 'GET_USERS_ERROR', error: e });
//   // }
// }
