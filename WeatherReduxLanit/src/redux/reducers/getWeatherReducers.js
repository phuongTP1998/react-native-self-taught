import {
    GET_WEATHER_ING,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL
} from '../constants/actionTypes';

const INIT_STATE = {
    isFetching: false,
    error: false,
    data: [],
    dataSuccess: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_WEATHER_ING:
            return {
                ...state,
                isFetching: true,
            };
        case GET_WEATHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataSuccess: true,
                data: action.payload
            };
        case GET_WEATHER_FAIL:
            return {
                ...state,
                isFetching: false,
                dataSuccess: false,
                error: true
            };
        default:
            return state;
    }
};