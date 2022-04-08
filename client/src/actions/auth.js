import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  // sign up the user

  navigate("/");
  try {
  } catch (error) {
    console.log(error);
  }
};
