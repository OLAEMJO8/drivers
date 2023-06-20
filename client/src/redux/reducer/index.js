import { GET_DETAIL, GET_DRIVERS } from "../action";

let initialState = {
  allDrivers: [],
  detail:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload, // [Drivers]
      };
      case GET_DETAIL:
        return {
          ...state,
          detail: action.payload, // [Drivers]
        };
  

    default:
      return state;
  }
}

export default rootReducer;
