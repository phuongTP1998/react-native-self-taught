import React, { PureComponent } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

class CategoryItem extends PureComponent {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("FoodScreen", {
                    title: this.props.data.category,
                    data: this.props.data.data
                })}>
                    <Image style={styles.image} source={this.props.data.data[0].image} resizeMode="cover" />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <Text style={styles.foodName}>{this.props.data.category}</Text>
                    <Text style={styles.foodSubName}>{this.props.data.subText}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 3
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

export default CategoryItem;