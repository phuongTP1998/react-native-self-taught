import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {commonStyles} from '../styles'
import InfoItem from '../components/InfoItem';

class TabInfo extends Component {
  state = {  }
  render() {
    return (
        <View style={commonStyles.container}>
          <Text style={commonStyles.fontTitleScreen}>Information</Text>
          <InfoItem iconName='location-arrow' content='' type='address'/>
          <InfoItem iconName='user' content='' type='displayName'/>
          <InfoItem iconName='phone' content='' type='phoneNumber'/>
        </View>
    );
  }
}

export default TabInfo;