import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import fetchDataGetDataWeather from "../../redux/actions/getWeatherDataAction";

class Home extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.fetchDataGetDataWeather(21.0, 105.79);
  }

  render() {
    if (!this.props.dataR.dataSuccess) {
      console.log("is fetching")
      return (
        <View>
          <Text> is fetching </Text>
        </View>
      );
    } else {
      console.log(this.props.dataR);
      return (
        <View>
          <Text> Home </Text>
          {/* {this.props.dataR} */}
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
