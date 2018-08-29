import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class ColorButton extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
            style={{
                width: 150,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: this.props.color
            }}
            onPress={() => this.props.onPressColorButton(this.props.color)}
            >
                <Text>{this.props.color}</Text>
            </TouchableOpacity>
        );
    }
}

export default ColorButton;