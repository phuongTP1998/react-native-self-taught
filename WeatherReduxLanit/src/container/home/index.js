import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'redux'
import * as FetchData from '../../redux/actions/getWeatherDataAction'
import { fetchDataGetDataWeather } from '../../redux/actions/getWeatherDataAction'

class Home extends Component {
  state = {

  }

  // componentDidMount() {
  //   this.props.fetchDataGetDataWeather(21.00, 105.79)
  // }

  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataGetDataWeather: (lat, lon) => dispatch.FetchData.fetchDataGetDataWeather(lat, lon)
  }
}

export default connect(null, { mapDispatchToProps })(Home);