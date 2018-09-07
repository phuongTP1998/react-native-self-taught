import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import firebase from "react-native-firebase";
import { backgroundColor } from "../styles";

class App extends Component {
  componentDidMount() {
    console.log(firebase);
  }

  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/logo_app.jpg")} style={{ width: 500, height: 300 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: "center",
    padding: 30
  }
});

export default App;
