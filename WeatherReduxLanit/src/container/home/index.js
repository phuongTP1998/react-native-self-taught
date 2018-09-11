import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { connect } from "react-redux";
import fetchDataGetDataWeather from "../../redux/actions/getWeatherDataAction";
import styles from './style'
import WeatherToday from '../../components/WeatherToday'
import WeatherForecaseItem from '../../components/WeatherForecaseItem'
import { convertTime, convertTimeShort } from "../../utilities/MomentTime";

class Home extends PureComponent {
  state = {

  };

  renderItem = ({ item }) => <WeatherForecaseItem weatherData={item} />

  keyExtractor = (item) => item._id

  componentDidMount() {
    this.props.fetchDataGetDataWeather(21.0, 105.79);
  }

  render() {
    if (!this.props.dataR.dataSuccess) {

      console.log("is fetching")
      return (
        <View style={styles.container}>
          <View style={styles.containerWeatherToday} >
            <TouchableOpacity>
              <Text style={styles.textHeaderRight}>°C</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerListForecase} />
        </View>
      );
    } else {
      console.log(this.props.dataR);
      data = this.props.dataR
      return (
        <View style={styles.container}>
          <View style={styles.containerWeatherToday}>
            <TouchableOpacity style={{height: 50}}>
              <Text style={styles.textHeaderRight}>°C</Text>
            </TouchableOpacity>
            <WeatherToday dataR={this.props.dataR}/>
          </View>
          <View style={styles.containerListForecase}>
            <FlatList
              data={this.props.dataR.data.list}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
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
