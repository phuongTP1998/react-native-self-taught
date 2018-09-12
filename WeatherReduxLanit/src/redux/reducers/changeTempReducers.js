import {
    CHANGE_TEMP_C,
    CHANGE_TEMP_F
} from '../constants/actionTypes'

const INIT_STATE = {
    temp: '°F'
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_TEMP_C:
            return {
                ...state,
                temp: '°C'
            }
        case CHANGE_TEMP_F:
            return {
                ...state,
                temp: '°F'
            }
        default:
            return state
    }
}