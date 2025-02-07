import * as types from "../actions";

const initialState = {
    isFetching: null,
    errorMessage: ''
};

export const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.IS_FETCHING:
            return {...state, isFetching: true}
        case types.FAILED_FETCH:
            return {...state, errorMessage: action.payload }
        case types.END_FETCH:
            return {...state, isFetching: false}
        default:
            return state;
    }
}