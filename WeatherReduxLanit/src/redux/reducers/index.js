import { combineReducers } from 'redux'
import getWeatherReducers from './getWeatherReducers'

const rootReducer = combineReducers({
    getWeatherReducers,
});

export default rootReducer;