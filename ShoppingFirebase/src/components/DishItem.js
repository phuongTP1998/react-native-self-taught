import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, Image, TouchableOpacity
} from 'react-native';

import { commonStyles, primaryColorBrown, primaryColorRed } from '../styles'

class DishItem extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.dish.image }} />
                <Text style={styles.name} numberOfLines={1}>{this.props.dish.name}</Text>
                <Text style={styles.price}>{`${this.props.dish.price}$`}</Text>
                <TouchableOpacity
                    style={[commonStyles.button, { backgroundColor: primaryColorRed, marginTop: 10 }]}>
                    <Text style={{color: 'white'}}>Add to cart</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        marginVertical: 15,
        padding: 5,
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    name: {
        marginTop: 5,
        color: primaryColorBrown,
        fontSize: 16,
        textAlign: 'center'
    },
    price: {
        marginTop: 5,
        color: primaryColorBrown,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default DishItem;