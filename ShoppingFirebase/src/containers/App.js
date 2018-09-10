import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import SplashScreen from './SplashScreen';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

import { primaryColorGreen } from '../styles'

import LoginScreen from './LoginScreen';

import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabHistory from './TabHistory';
import TabInfo from './TabInfo';

const BottomNavigation = createBottomTabNavigator({
    Menu: TabMenu,
    Order: TabOrder,
    History: TabHistory,
    Info: TabInfo
})

const SwitchNavigation = createSwitchNavigator({
  HomeScreen: BottomNavigation,
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  
})


class App extends Component {
  state = {  }
  render() {
    return (
      <SwitchNavigation/>
    );
  }
}

export default App;