import * as types from "../actions";

const initialState = {
  smurfs: [],
  selectedSmurf: null
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SMURFS:
      return { ...state, smurfs: action.payload };
    case types.SELECT_SMURF:
      return { ...state, selectedSmurf: action.payload };
    case types.POST_SMURF:
      return { ...state, smurfs: action.payload };
    case types.DELETE_SMURF:
      return { ...state, smurfs: action.payload };
    case types.PUT_SMURF:
      return { ...state, smurfs: action.payload, selectedSmurf: null };
    default:
        return state;
  }
};
