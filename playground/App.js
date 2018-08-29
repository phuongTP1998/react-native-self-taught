/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import ColorButton from './ColorButton'

class App extends Component {
  state = {
    color: 'white'
  }

setBgColor = (color) => this.setState({color})

  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <ColorButton color = 'yellow' onPressColorButton={this.setBgColor}/>
        <ColorButton color = 'red' onPressColorButton={this.setBgColor}/>
        <ColorButton color = 'green' onPressColorButton={this.setBgColor}/>
        <ColorButton color = 'blue' onPressColorButton={this.setBgColor}/>
      </View>
    );
  }
}

export default App;