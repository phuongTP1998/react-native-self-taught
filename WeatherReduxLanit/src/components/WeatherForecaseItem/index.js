import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import styles from './styles'
import Ionicons from "react-native-vector-icons/Ionicons";
import getIconName from "../../utilities/WeatherIcon";
import TempCF from "../../utilities/ConvertTempCF";


import { connect } from "react-redux";
import { changeTempToC, changeTempToF } from "../../redux/actions/changeTempAction";


import { getTimeFromNow, convertTime, convertTimeShort } from '../../utilities/MomentTime'

class WeatherForecaseItem extends Component {

    componentDidMount() {
        console.log(this.props.tempType)
    }

    _getIconName = getIconName(this.props.weatherData.weather[0].id);

    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{convertTimeShort(this.props.weatherData.dt_txt)}</Text>
                <Ionicons
                    style = {styles.icon}
                    name={`ios-${this._getIconName}`}
                    size={45}
                    color={"black"}
                />
                <Text style = {styles.description}>{this.props.weatherData.weather[0].description}</Text>
                <Text style = {styles.temp}>{TempCF(this.props.weatherData.main.temp_min,this.props.tempType.temp)}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    tempType: state.changeTempReducers
});

const mapDispatchToProps = dispatch => ({
    changeTempToC: () => dispatch(changeTempToC()),
    changeTempToF: () => dispatch(changeTempToF())
})
  

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecaseItem);