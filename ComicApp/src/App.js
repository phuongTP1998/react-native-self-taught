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

class App extends Component {
  state = {  }
  render() {
    return (
      <ComicListScreen/>
    );
  }
}

export default App;
