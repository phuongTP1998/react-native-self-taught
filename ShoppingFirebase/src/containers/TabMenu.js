import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import DishItem from '../components/DishItem'
import { commonStyles } from '../styles'

class TabMenu extends Component {
  state = {  }
  render() {
    return (
        <View style={commonStyles.container}>
            <FlatList
              data={['Hamburget','Pizza','Spaghetti','Salad','Drink','Snack']}
              keyExtractor={(item) => item.key }
              renderItem ={this.renderCategory}
            />
        </View>
    );
  }
}

export default TabMenu;