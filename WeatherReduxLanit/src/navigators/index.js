import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import styles from './styles'
import { createStackNavigator } from "react-navigation";

import Home from "../container/home";
import {ColorThemes, Images} from "../themes"

const RootNavigator = createStackNavigator({
 Home: {
   screen: Home
 } 
}, {
  initialRouteName : "Home",
  headerMode: 'none'
});

export default RootNavigator;

// navigationOptions: ({ navigation }) => ({
    //   title: '',
    //   headerLeft: 
    //     <TouchableOpacity>
    //       <Image 
    //       style = {styles.textHeaderLeft}
    //       source = {Images.back}/>
    //     </TouchableOpacity>
    //   ,
    //   headerRight: 
    //     <TouchableOpacity>
    //       <Text style = {styles.textHeaderRight}>°C</Text>
    //     </TouchableOpacity>,
    //     headerStyle: {
    //       backgroundColor: ColorThemes.background
    //     }
    // })