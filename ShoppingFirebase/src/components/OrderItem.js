import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen, primaryColorBrown } from '../styles';

class OrderItem extends Component {
    state = {}
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 7, alignItems: 'center' }}>
                <TouchableOpacity>
                    <Icon name='trash' size={25} color={primaryColorGreen} />
                </TouchableOpacity>
                <Text style={{
                    fontWeight: 'bold',
                    color: primaryColorBrown,
                    fontSize: 18,
                    marginHorizontal: 16
                }}>1</Text>
                <Text style={{
                    color: primaryColorBrown,
                    marginHorizontal: 16,
                    flex: 1
                }}>Hamburger</Text>
                <Text style={{
                    fontWeight: 'bold',
                    color: primaryColorGreen,
                    fontSize: 18,
                    marginLeft: 8
                }}>50$</Text>
            </View>
        );
    }
}

export default OrderItem;