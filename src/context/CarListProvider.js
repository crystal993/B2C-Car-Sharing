import { createContext, useContext, useReducer } from 'react';
import { CarListReducer } from './CarListReducer';

const initialStates = {
  carList: [],
  fuelType: '',
  segment: '',
  isLoading: true,
  isError: false,
};

const CarStateContext = createContext(null);
const CarDispatchContext = createContext(null);

function CarListProvider({ children }) {
  const [state, dispatch] = useReducer(CarListReducer, initialStates);

  return (
    <CarStateContext.Provider value={state}>
      <CarDispatchContext.Provider value={dispatch}>{children}</CarDispatchContext.Provider>
    </CarStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useCarState() {
  const state = useContext(CarStateContext);
  if (!state) {
    throw new Error('Cannot find CarListProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useCarDispatch() {
  const dispatch = useContext(CarDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find CarListProvider');
  }
  return dispatch;
}

export default CarListProvider;
