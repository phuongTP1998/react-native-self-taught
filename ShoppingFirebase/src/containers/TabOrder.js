import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { commonStyles } from '../styles'

class TabOrder extends Component {
  state = {  }
  render() {
    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.fontTitleScreen}>Order</Text>
        </View>
    );
  }
}

export default TabOrder;