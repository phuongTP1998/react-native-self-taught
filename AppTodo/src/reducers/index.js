import { combineReducers } from 'redux'
import chooseCategoryReducer from './chooseCategoryReducer';

export default combineReducers({
    category: chooseCategoryReducer
})