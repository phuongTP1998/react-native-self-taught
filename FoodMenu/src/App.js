import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './containers/HomeScreen'
import FoodScreen from './containers/FoodScreen'
import ImageScreen from './containers/ImageScreen'

const Navigation = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Menu",
      headerTitleStyle: {
        fontSize: 22,
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#ff8331',
        borderBottomColor: '#fff'
      }
    })
  },
  FoodScreen: {
    screen: FoodScreen,
    navigationoptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image style={{ width: 23, heigth: 23, marginStart: 10 }} soruce={require("./assets/back.png")} />
        </TouchableOpacity>,
      headerTitleStyle: {
        fontSize: 22,
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#ff8331',
        borderBottomColor: '##e67429'
      }
    })
  },
  ImageScreen: {
    screen: ImageScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft:
        <TouchableOpacity
          onPress={() => navigation.navigate('FoodScreen')}>
          <Image
            style={{ width: 23, height: 23, marginStart: 10 }}
            source={require("./assets/back.png")} />
        </TouchableOpacity>,
        headerTitleStyle: {
          fontSize: 22,
          color: 'white'
        },
        headerStyle: {
          backgroundcolor: '#ff8331',
          borderBottomColor: '##e67429'
        }
    })
  }
})

export default class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}