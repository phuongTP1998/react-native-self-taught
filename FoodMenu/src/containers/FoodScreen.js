import React, { PureComponent } from 'react';
import {
    Text,
    View,
    Platform,
    FlatList,
    StyleSheet
} from 'react-native';

import FoodItem from '../components/FoodItem'

class FoodScreen extends PureComponent {
    state = {}

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };

    _renderItem = (item) => {
        <FoodItem navigation={this.props.navigation} data={item.item} />
    }

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.introTextContainer}>
                    <Text style={styles.introText}>We serve the best food in the world.</Text>
                </View>
                <View>
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={this.props.navigation.getParam('data')}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    introTextContainer: {
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FoodScreen;