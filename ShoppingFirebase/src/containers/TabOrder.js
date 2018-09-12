import React, { Component } from 'react';
import {
  Text,
  View, TouchableOpacity, FlatList
} from 'react-native';
import { connect } from 'react-redux'

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'
import OrderItem from '../components/OrderItem';

class TabOrder extends Component {

  renderItem = ({ item }) => <OrderItem item={item} />

  render() {
    const totalPrice = (this.props.orders.length === 0)
      ? 0
      : this.props.orders.reduce(
        (accumulator, currentValue) => accumulator + currentValue.unitPrice * currentValue.amount, 0
      )

    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.fontTitleScreen}>Order</Text>
        <FlatList
          style={{ flexGrow: 0 }}
          data={this.props.orders}
          keyExtractor={(item) => item.key.toString()}
          renderItem={this.renderItem}
        />
        <View style={{
          marginHorizontal: 7,
          borderColor: primaryColorBrown,
          borderBottomWidth: 1,
          marginVertical: 16
        }} />
        <View style={{
          flexDirection: 'row',
          marginHorizontal: 7
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: primaryColorRed,
            flex: 1
          }}>Total</Text>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: primaryColorRed
          }}>{`${totalPrice}$`}</Text>
        </View>
        <TouchableOpacity style={[commonStyles.button, {
          backgroundColor: primaryColorRed,
          position: 'absolute',
          bottom: 16,
          alignSelf: 'center'
        }]}>
          <Text style={{
            color: 'white',
            fontWeight: 'bold'
          }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ orders }) => ({ orders })

export default connect(mapStateToProps)(TabOrder);