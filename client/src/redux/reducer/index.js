import {
  GET_DETAIL,
  GET_DRIVERS,
  CLEAN_DETAIL,
  GET_DRIVERS_BY_NAME,
} from "../action";

let initialState = {
  allDrivers: [],
  backUp: [],
  detail: [],
  clear: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload, // [Drivers]
        backUp: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload, // [Drivers]
      };
    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        allDrivers: action.payload, // search
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        clean: action.payload, // Limpiar el detalle
      };

    default:
      return state;
  }
}

export default rootReducer;
