import { createContext, useContext, useReducer } from 'react';

const initialStates = {
  carList: [],
  fuelType: '',
  segment: '',
  isLoading: true,
  hasError: false,
};

// fuelType: "gasoline" | "hybrid" | "ev"
// segment: "C" | "D" | "E" | "SUV"
export const CarActionType = {
  GET_CAR_LIST: 'GET_CAR_LIST',
  GET_CAR_LIST_LOADING: 'GET_CAR_LIST_LOADING',
  GET_CAR_LIST_SUCCESS: 'GET_CAR_LIST_SUCCESS',
  GET_CAR_LIST_ERROR: 'GET_CAR_LIST_ERROR',

  SET_FUEL_TYPE: 'SET_FUEL_TYPE',
  SET_SEGMENT: 'SET_SEGMENT',
  SET_IS_ERROR: 'SET_IS_ERROR',
};

const carReducer = (state, action) => {
  switch (action.type) {
    case CarActionType.GET_CAR_LIST: {
      return {
        ...state,
        carList: action.carList,
        isLoading: false,
        hasError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
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
    // case CarActionType.SET_FUEL_TYPE: {
    //   return {
    //     ...state,
    //     fuelType: action.fuelType,
    //   };
    // }
    // case CarActionType.SET_SEGMENT: {
    //   return {
    //     ...state,
    //     segment: action.segment,
    //   };
    // }
    // case CarActionType.SET_IS_ERROR: {
    //   return {
    //     ...state,
    //     isError: action.data,
    //   };
    // }
    // case CarActionType.GET_CAR_LIST:
    //   return {
    //     ...state,
    //     issueList: [...state.issueList, ...action.list],
    //     hasMore: action.hasMore,
    //     isLoading: action.isLoading,
    //     isError: action.isError,
    //   };
    default:
      throw Error('Unknown Action: ' + action.type);
  }
};

const CarContext = createContext(null);
const CarChangeContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useCarChange = () => useContext(CarChangeContext);

function CarProvider({ children }) {
  // CarActionType
  const [state, dispatch] = useReducer(carReducer, initialStates);

  // const carList = state.carList;

  // const setCarInitList = data => dispatch({ type: CarActionType.GET_CAR_LIST, data });
  // const setIsLoading = () => dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
  // const setHasError = () => dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });

  // const setFuelType = fuelType => {
  //   dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType });
  // };
  // const setSegment = segment => {
  //   dispatch({ type: CarActionType.SET_SEGMENT, segment });
  // };
  // const setIsError = isError => {
  //   dispatch({ type: CarActionType.SET_IS_ERROR, isError });
  // };
  // const setIssueList = ({ list, hasMore, isLoading, isError }) => {
  //   dispatch({ type: 'SET_ISSUE_LIST', list, hasMore, isLoading, isError });
  // };
  // const setPage = page => {
  //   dispatch({ type: 'SET_PAGE', page });
  // };
  // const setIsLoading = isLoading => {
  //   dispatch({ type: 'SET_LOADING', isLoading });
  // };
  // const setIssueDetail = issue => {
  //   dispatch({ type: 'SET_ISSUE_DETAIL', issue });
  // };
  // const setIsError = isError => {
  //   dispatch({ type: 'SET_ISSUE_LIST_ERROR', isError });
  // };
  // const dispatchProps = {
  //   setCarInitList,
  //   setIsLoading,
  //   setHasError
  // };

  return (
    <CarContext.Provider value={state}>
      <CarChangeContext.Provider value={dispatch}>{children}</CarChangeContext.Provider>
    </CarContext.Provider>
  );
}

// const ThemeContext = createContext(null);
// const ThemeChangeContext = createContext(null);

// export const useTheme = () => useContext(ThemeContext);
// export const useThemeChange = () => useContext(ThemeChangeContext);

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const isDarkMode = useCallback(() => theme === "dark", [theme]);
//   const isLightMode = useCallback(() => theme === "light", [theme]);

//   const toggleTheme = useCallback(
//     () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")),
//     [setTheme]
//   );

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, isLightMode }}>
//       <ThemeChangeContext.Provider value={toggleTheme}>
//         {children}
//       </ThemeChangeContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

export default CarProvider;
