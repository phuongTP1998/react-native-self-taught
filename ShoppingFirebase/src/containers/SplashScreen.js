import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, Image, Dimensions
} from 'react-native';

import { backgroundColor } from '../styles'

import firebase from 'react-native-firebase'


class SplashScreen extends Component {
    state = {}

    componentDidMount() {
        // firebase.auth().signOut()
        firebase.auth().onAuthStateChanged(res => res !== null
            ? setTimeout(() => this.props.navigation.navigate('HomeScreen'), 1000)
            : setTimeout(() => this.props.navigation.navigate('LoginScreen'), 1000))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require("../../assets/logo_app.jpg")}
                    style={{ width: '100%', height: Dimensions.get('window').width - 60 }}
                    resizeMode='contain' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1,
        justifyContent: "center",
        padding: 30
    }
})

export default SplashScreen;