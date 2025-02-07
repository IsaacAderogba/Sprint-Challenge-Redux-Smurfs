import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const IS_FETCHING = "IS_FETCHING";
export const FAILED_FETCH = "FAILED_FETCH";
export const END_FETCH = "END_FETCH";
export const GET_SMURFS = "GET_SMURFS";
export const POST_SMURF = "POST_SMURF";
export const PUT_SMURF = "PUT_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const SELECT_SMURF = "SELECT_SMURF";

const endpoint = "http://localhost:3333/smurfs";

// Get Smurfs action creators
export const getSmurfs = () => dispatch => {
  dispatch({ type: IS_FETCHING });
  axios
    .get(endpoint)
    .then(res => {
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILED_FETCH, payload: err.message });
    })
    .finally(() => {
      dispatch({ type: END_FETCH });
    });
};

// Post Smurf action creator
export const postSmurf = (name, age, height) => dispatch => {
  const newSmurf = { name, age: parseInt(age, 10), height };
  axios
    .post(endpoint, newSmurf)
    .then(res => {
      dispatch({ type: POST_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// Put Smurf action creator
export const putSmurf = (id, name, age, height) => dispatch => {
  const updatedSmurf = { name, age: parseInt(age, 10), height };
  axios
    .put(`${endpoint}/${id}`, updatedSmurf)
    .then(res => {
      dispatch({ type: PUT_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// Delete Smurf action creator
export const deleteSmurf = id => dispatch => {
  axios
    .delete(`${endpoint}/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// Select Smurf action creator
export const selectSmurf = id => {
  return {
    type: SELECT_SMURF,
    payload: `${id}`
  };
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
