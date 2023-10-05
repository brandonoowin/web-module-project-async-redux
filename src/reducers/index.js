import React from "react";
import { FETCH_ACTIVITY_START, FETCH_ACTIVITY_SUCCESS, FETCH_ACTIVITY_FAIL } from "../actions";

const initialState = {
    activity: '' ,
    isFetching: false
}


function reducer(state = initialState, action) {
    console.log('reducer', action)
    switch(action.type) {
        case FETCH_ACTIVITY_START:
            return {
                ...state, 
                isFetching: true,
            }
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                activity: action.payload
            }
        case FETCH_ACTIVITY_FAIL:
            return {
                ...state, 
                isFetching: false
            }

        default: 
        return state;
    }
}

export default reducer; 