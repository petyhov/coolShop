import axios from "axios";
import api from "../api";

import { setLoader, setPhones } from "./actions";

export const fetchPhones = () => (dispatch) => {
  dispatch(setLoader(true));
  try {
    axios.get(`${api}/phones`).then(({ data }) => {
      dispatch(setPhones(data));
      dispatch(setLoader(false));
    });
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = (data) => (dispatch) => {
  // dispatch(setLoader(true));
  try {
    axios.post(`${api}/orders`, data).then(({ data, status }) => {
      if (status === 201) {
        alert("order received");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
