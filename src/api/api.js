import { CarActionType } from '../context/actionTypes';
import { instance } from './axiosInstance';

export const api = {
  getAllCarList: () => {
    return instance.get('/api/cars');
  },
  getFilterCarList: async () => {
    const dispatch = useCarDispatchContext();
    return async params => {
      dispatch({ type: CarActionType.SET_SEGMENT, segment: params.segment });
      dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
      console.log(params);
      try {
        const config = {
          segment: params,
        };
        const { data } = await instance.get('/api/cars', config);
        console.log(data);
        dispatch({ type: CarActionType.GET_CAR_LIST_SUCCESS, carList: data.payload });
      } catch {
        dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });
      }
    };
  },
};
