import { GET_ERRORS } from "./types";
import axios from "axios";

// Register User
export const registeruser = (userdata, history) => dispatch => {
  axios
    .post("/api/users/register", userdata)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
