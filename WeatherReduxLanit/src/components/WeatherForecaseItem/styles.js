import { StyleSheet } from 'react-native'
import { ColorThemes, FontSizes } from '../../themes'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        borderBottomWidth: 0.5,
        borderBottomColor: ColorThemes.gray
    },
    text: {
        fontSize: 16,
        color: ColorThemes.text,
        margin: 15
    },
    icon: {
        margin: 15
    },
    description: {
        margin: 15
    },
    temp: {
        position: 'absolute',
        right: 30
    }
})

export default styles