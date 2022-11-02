import { CarActionType } from '../context/actionTypes';
import { useCarDispatch } from '../context/CarListProvider';
import { apis } from './apis';

export function useAllCarList() {
  const dispatch = useCarDispatch();

  return async () => {
    dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
    try {
      const {
        data: { payload },
      } = await apis.getAllCarList();
      dispatch({ type: CarActionType.GET_CAR_LIST_SUCCESS, carList: payload });
    } catch (e) {
      dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });
    }
  };
}

export function useCarFilterList() {
  const dispatch = useCarDispatch();
  return async params => {
    console.log(params);
    dispatch({ type: CarActionType.SET_SEGMENT, segment: params.segment });
    dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: params.fuelType });
    dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
    try {
      const config = {
        params: params,
      };
      const {
        data: { payload },
      } = await apis.getFilterCarList(config);
      dispatch({ type: CarActionType.GET_CAR_LIST_SUCCESS, carList: payload });
    } catch {
      dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });
    }
  };
}
