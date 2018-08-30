import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class ComicListItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.comic.photos[0] }} />
                <Text style={styles.text}
                    numberOfLines={2}>
                    {this.props.comic.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        width: Dimensions.get('window').width / 2,
        padding: 5
    },
    image: {
        height: 200
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default ComicListItem;