import { combineReducers } from 'redux'
import getWeatherReducers from './getWeatherReducers'
import changeTempReducers from './changeTempReducers'

const rootReducer = combineReducers({
    getWeatherReducers, changeTempReducers
});

export default rootReducer;