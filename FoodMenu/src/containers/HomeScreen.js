import React, { PureComponent } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    ScrollView,
    Platform
} from 'react-native';

import CategoryItem from '../components/CategoryItem';

import menu from '../data/data.js'

class HomeScreen extends PureComponent {
    state = {}

    _keyExtractor = (item, index) => item.id.toString();

    _renderItem = (item) => (
        <CategoryItem data={item.item} navigation={this.props.navigation} />
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={menu}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    }
})

export default HomeScreen;