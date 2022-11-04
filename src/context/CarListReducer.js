import { CarActionType } from './actionTypes';

export const CarListReducer = (state, action) => {
  switch (action.type) {
    case CarActionType.GET_CAR_LIST: {
      return {
        ...state,
        carList: action.carList,
        isLoading: false,
        isError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_SUCCESS: {
      return {
        ...state,
        carList: action.carList,
        isLoading: false,
        isError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CarActionType.SET_SEGMENT: {
      return {
        ...state,
        segment: action.segment,
      };
    }
    case CarActionType.SET_FUEL_TYPE: {
      return {
        ...state,
        fuelType: action.fuelType,
      };
    }
    default:
      throw Error('Unknown Action: ' + action.type);
  }
};
