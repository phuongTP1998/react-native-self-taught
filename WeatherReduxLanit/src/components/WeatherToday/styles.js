import { StyleSheet } from 'react-native'
import { ColorThemes, FontSizes } from '../../themes'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerIconAndTemp: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textAddress: {
        fontSize: 20,
        color: ColorThemes.white,
        marginBottom: 20
    },
    textTempC: {
        fontSize: 70,
        color: ColorThemes.white,
        marginLeft: 15
    },
    textWeatherState: {
        fontSize: 18,
        color: ColorThemes.white,
        marginTop: 20
    },
    textTime: {
        fontSize: 18,
        color: ColorThemes.white,
        marginTop: 70
    }
})

export default styles;