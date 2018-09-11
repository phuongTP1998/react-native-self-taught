import {
    CHANGE_TEMP_C,
    CHANGE_TEMP_F
} from '../constants/actionTypes'

const INIT_STATE = {
    temp: 'f'
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHANGE_TEMP_C:
            return {
                ...state,
                temp: 'c'
            }
        case CHANGE_TEMP_F:
            return {
                ...state,
                temp: 'f'
            }
        default:
            return state
    }
}