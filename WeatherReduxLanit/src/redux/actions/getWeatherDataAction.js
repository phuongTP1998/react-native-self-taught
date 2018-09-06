import Axios from 'axios'

import {
    GET_WEATHER_ING,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL
} from '../constants/actionTypes'

import { URL_WEATHER } from '../constants/URL'

const getDataWeather = () => {
    return {
        type: GET_WEATHER_ING
    };
};

const getDataWeatherSuccess = data => {
    return {
      type: GET_WEATHER_SUCCESS,
      payload: data,
    };
  };
  
  const getDataWeatherFail = () => {
    return {
      type: GET_WEATHER_FAIL,
    };
  };

  const fetchDataGetDataWeather = (lat, lon) => {
    return dispatch => {
      dispatch(getDataWeather());
  
      Axios.get(URL_WEATHER + lat + '/' + lon)
        .then(response => {
          console.log(response);
          dispatch(getDataWeatherSuccess(response.data));
        })
        .catch(error => {
          console.log(error);
          dispatch(getDataWeatherFail(error));
        });
    };
  };
  
  export { fetchDataGetDataWeather as default };