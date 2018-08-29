/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import LoginScreen from "./containers/LoginScreen";


class App extends PureComponent {
  state = {  }
  render() {
    return (
      <LoginScreen/>
    );
  }
}

export default App;