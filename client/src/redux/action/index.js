import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const POST_DRIVERS = "POST_DRIVERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/drivers");
      // console.log("aca", response);
      return dispatch({
        type: GET_DRIVERS,
        payload: response.data,
      });
    } catch (error) {
      error;
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      let driverId = await axios(`http://localhost:3001/drivers/${id}`);
    
      return dispatch({
        type: GET_DETAIL,
        payload: driverId.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const postDrivers = (info) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/drivers", info);
      alert("Corredor creado");
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: "CLEAN_DETAIL",
    payload: {},
  };
};