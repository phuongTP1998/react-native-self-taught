import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import ScaledImage from './ScaledImage';

class ComicDetail extends Component {
  state = {}

  render() {
    return (
      <FlatList
        data={this.props.navigation.state.params.comic.photos}
        renderItem={({ item }) =>
          <ScaledImage
            uri={item} 
            width={Dimensions.get('window').width}/>}
        keyExtractor={(item) => item}
      />
    );
  }
}

export default ComicDetail;