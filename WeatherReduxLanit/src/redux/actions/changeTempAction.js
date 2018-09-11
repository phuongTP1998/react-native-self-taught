import {
    CHANGE_TEMP_C,
    CHANGE_TEMP_F
} from '../constants/actionTypes'

const changeTempToC = () => { 
    return {
        type: CHANGE_TEMP_C
    }
}

const changeTempToF = () => {
    return {
        type: CHANGE_TEMP_F
    }
}

// const changeTemp = (temp) => {
//     if (temp === 'f') {
//         return dispatch(changeTempToF())
//     } else {
//         return dispatch(changeTempToC())
//     }
// }

export { changeTempToC, changeTempToF }