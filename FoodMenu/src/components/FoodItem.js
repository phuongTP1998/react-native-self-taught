import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native';

class FoodItem extends PureComponent {
    state = {
        size: (Dimensions.get('window').width - 40) / 2
    }
    render() {
        return (
            <View style={[styles.container, { width: this.state.size }]}>
                <TouchableOpacity>
                    <View>
                        <Image style={styles.image} source={this.props.data.image}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    rating: {
        paddingTop: 5,
        color: '#ff9800',
        fontSize: 16
    },
    textContainer: {
        padding: 15,
        backgroundColor: 'white'
    },
    foodName: {
        fontWeight: 'bold',
        fontSize: 22
    },
    foodSubName: {
        fontSize: 16,
        color: '#888',
        paddingTop: 5
    }
})

export default FoodItem;