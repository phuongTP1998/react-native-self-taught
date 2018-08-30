/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import ComicListItem from './ComicListItem'
import ComicListScreen from './ComicListScreen';
import { createStackNavigator } from 'react-navigation'
import ComicDetail from './ComicDetail'

const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({navigation}) => (
      {title: 'Comics'}
    )
  },
  ComicDetail: {
    screen: ComicDetail
  }
})

class App extends Component {
  state = {  }
  render() {
    return (
      <Navigation/>
    );
  }
}

export default App;
