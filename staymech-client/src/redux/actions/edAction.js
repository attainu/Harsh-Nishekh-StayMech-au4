import axios from "axios";

import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";
import {
  ADD_EDUCATION,
  EDUCATION_ERROR,
  FETCH_ED_DETAILS_BEGIN,
  FETCH_ED_DETAILS_SUCCESS,
  FETCH_ED_DETAILS_FAILURE,
} from "./types";

//adding education details
export const education = ({ college, program, degree }) => (
  dispatch,
  getState
) => {
  const body = JSON.stringify({ college, program, degree });

  axios
    .post("/api/profile/education", body, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_EDUCATION,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "EDUCATION_ERROR")
      );
      dispatch({
        type: EDUCATION_ERROR,
      });
    });
};

//getting user details
export const fetchEdBegin = () => ({
  type: FETCH_ED_DETAILS_BEGIN,
});
export const fetchEdSuccess = (details) => ({
  type: FETCH_ED_DETAILS_SUCCESS,
  payload: { details },
});
export const fetchEdFailure = (error) => ({
  type: FETCH_ED_DETAILS_FAILURE,
  payload: { error },
});

export function loadEdDetails() {
  return (dispatch) => {
    dispatch(fetchEdBegin);
    return fetch("/api/profile/education")
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchEdSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchEdFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
// export const loadEdDetails = () => (dispatch) => {
//   axios.get("/api/profile/education").then((res) =>
//     dispatch({
//       type: GET_EDUCATION,
//       payload: res,
//     })
//   );
// };
