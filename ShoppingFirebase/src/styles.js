import { StyleSheet } from 'react-native'

export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

export const commonStyles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1
    },
    button: {
        borderRadius: 30,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
      }
})