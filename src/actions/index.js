import axios from "axios";

export const FETCH_ACTIVITY_START = 'FETCH_ACTIVITY_START';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_FAIL = 'FETCH_ACTIVITY_FAIL';

export const getActivity = () => dispatch => {
    dispatch({ type: FETCH_ACTIVITY_START }); 
    axios.get('https://www.boredapi.com/api/activity/')
    .then(res => {
        console.log(res)
        dispatch({ type: FETCH_ACTIVITY_SUCCESS, payload: res.data.activity})
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_ACTIVITY_FAIL})
    })
}