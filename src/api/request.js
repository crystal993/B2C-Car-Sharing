import instance from './axiosInstance';
import { CarActionType, useCarChange } from '../stores/CarListProvider';

// https://preonboarding.platdev.net/api/cars
// fuelType=ev&segment=C
// fuelType: "gasoline" | "hybrid" | "ev"
// segment: "C" | "D" | "E" | "SUV"

export const CarService = {
  getCarList: () => {
    return instance.get('/api/cars');
  },
  useCarList: () => {
    const dispatch = useCarChange();
    return async params => {
      dispatch({ type: CarActionType.SET_SEGMENT, segment: params.segment });
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
    };
  },
};
