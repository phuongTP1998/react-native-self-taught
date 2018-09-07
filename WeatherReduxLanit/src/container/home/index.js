import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import fetchDataGetDataWeather from "../../redux/actions/getWeatherDataAction";
import styles from './style'
import WeatherToday from '../../components/WeatherToday'

class Home extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.fetchDataGetDataWeather(21.0, 105.79);
  }

  render() {
    if (!this.props.dataR.dataSuccess) {
      console.log("is fetching")
      return (
        <View style = {styles.container}>
            <View style = {styles.containerWeatherToday}/>
            <View style = {styles.containerListForecase}/>
        </View>
      );
    } else {
      console.log(this.props.dataR);
      return (
        <View style = {styles.container}>
            <View style = {styles.containerWeatherToday}>
                <WeatherToday dataR={this.props.dataR}/>
            </View>
            <View style = {styles.containerListForecase}/>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  dataR: state.getWeatherReducers
});

const mapDispatchToProps = dispatch => ({
  fetchDataGetDataWeather: (lat, lon) =>
    dispatch(fetchDataGetDataWeather(lat, lon))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
