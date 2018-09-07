import { StyleSheet } from 'react-native'
import { ColorThemes } from '../../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerWeatherToday: {
        backgroundColor: ColorThemes.background,
        flex : 1
    }, 
    containerListForecase: {
        backgroundColor: ColorThemes.white,
        flex: 1
    },
    textAddress: {
        color: 'white',
        fontSize: 22
    }
})

export default styles;