import { StyleSheet } from 'react-native'
import { ColorThemes } from '../../themes'
import { FontSizes } from '../../themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerWeatherToday: {
        backgroundColor: ColorThemes.background,
        flex: 1
    },
    containerListForecase: {
        backgroundColor: ColorThemes.white,
        flex: 1
    },
    textAddress: {
        color: 'white',
        fontSize: 22
    }, 
    textHeaderLeft: {
        width: 25,
        height: 25,
        margin: 10
    },
    textHeaderRight: {
        width: 40,
        height: 40,
        margin: 15,
        color: ColorThemes.white,
        fontSize: FontSizes.extraLarge,
        position: 'absolute',
        right: 0
    }, 
    button: {
        // backgroundColor: ColorThemes.background
    }
})

export default styles;