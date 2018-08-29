import React, { PureComponent } from 'react';
import {
    ImageBackground,
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const LOGIN_INFO = {
  username: "techkids",
  password: "techkids@123"
}

const MESSAGE = {
  error : "Wrong username or password!",
  success : "Successfully logged in!"
}
class LoginScreen extends PureComponent {
    state = {
      username: "",
      password: "",
      isLogin: false,
      message: ""
    }

    _handleSubmit = () => {
      (this.state.username === LOGIN_INFO.username && this.state.password === LOGIN_INFO.password) ? 
        this.setState({
          isLogin: true,
          message: MESSAGE.success
        }) : this.setState({
          isLogin: false,
          message: MESSAGE.error
        });
    }

    render() {
        return (
          <ImageBackground source={require("../assets/background.jpg")} style={styles.backgroundImage}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} resizeMode="contain" source={require("../assets/logo.png")}></Image>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input} placeholder="Username" placeholderTextColor="#333" autoCapitalize="none"
                    value={this.state.username} onChangeText={(username) => this.setState({username, message: ""})}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#333" secureTextEntry={true}
                    autoCapitalize="none" onChangeText={(password) => this.setState({password, message: ""})}
                  />
                </View>
                <View style={styles.messageContainer}>
                  <Text style={this.state.message === MESSAGE.error ? styles.errorText : styles.successText}>{this.state.message}</Text>
                </View>
                <TouchableOpacity style={styles.submitButtonContainer} onPress={this._handleSubmit}>
                  <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 2
  },
  inputContainer: {
    width: "70%",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#006ca3"
  },
  input: {
    height: 35,
    color: 'black',
  },
  inputWrapper: {
    width: "100%",
    alignItems: "center",
  },
  backgroundImage: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  logo: {
    width: "70%"
  },
  submitButtonContainer: {
    width: "70%",
    height: 35,
    marginTop: 10
  },
  submitButton: {
    backgroundColor: 'rgba(0,108,163, 0.8)',
    padding: 10,
    borderRadius: 25,
    alignItems: "center"
  },
  submitText: {
    color: "white"
  },
  errorText: {
    color: "red",
  },
  successText: {
    color: "green"
  },
  messageContainer: {
    marginTop: 10,
    height: 20
  }
});

export default LoginScreen;