import axios from "axios";
import { toast } from "react-toastify";
import api from "../api";

import { setLoader, setPhones, setEmptyCart } from "./actions";

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
  dispatch(setLoader(true));
  try {
    axios.post(`${api}/orders`, data).then(({ data, status }) => {
      if (status === 201) {
        dispatch(setEmptyCart());
        dispatch(setLoader(false));
        toast.success('received', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
