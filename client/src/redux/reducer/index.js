import { GET_DETAIL, GET_DRIVERS ,CLEAN_DETAIL} from "../action";

let initialState = {
  allDrivers: [],
  detail:[],
  clear:{},
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
