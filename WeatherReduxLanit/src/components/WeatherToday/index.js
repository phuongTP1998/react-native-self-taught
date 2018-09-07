import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import TempCF from "../../utilities/ConvertTempCF";
import Ionicons from "react-native-vector-icons/Ionicons";
import getIconName from "../../utilities/WeatherIcon";

class WeatherToday extends Component {
  state = {};

  dataWeather = this.props.dataR.data;

  _getIconName = getIconName(this.dataWeather.list[0].weather[0].id);
  _changeTemp = TempCF(this.dataWeather.list[0].main.temp_min, "f");

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textAddress}>
          {`${this.dataWeather.city.name} - ${
            this.props.dataR.data.city.country
          }`}
        </Text>

        <View style={styles.containerIconAndTemp}>
          <Ionicons
            name={`ios-${this._getIconName}`}
            size={70}
            color={"white"}
          />
          <Text style={styles.textTempC}>{`${this._changeTemp}`}</Text>
        </View>

        <Text style={styles.textWeatherState}>
          {`${this.dataWeather.list[0].weather[0].description}`}
        </Text>

        <Text style={styles.textTime}>
          {`${this.dataWeather.list[0].dt_txt}`}
        </Text>
      </View>
    );
  }
}

export default WeatherToday;
