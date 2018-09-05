import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'

import Home from '../container/home';

const RootNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        }
    },
    {
        initialRouteKey: 'Home',
        headerMode: 'none'
    })

export default RootNavigator;