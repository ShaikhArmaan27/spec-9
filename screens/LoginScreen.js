import {Component} from 'react'
import {Text,View} from 'react-native'


import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity,Text,SafeAreaView,StatusBar,Image,Platform,Dimensions,TextInput} from "react-native";
import AppLoading from "expo-app-loading"

import * as Google from "expo-google-app-auth";
import {RFValue} from "react-native-responsive-fontsize"
import firebase from "firebase";

import {BottomTabNavigator} from "../navigations/BottomTabNavigator"


export default class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
          text: '',
        };
      }
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <View style={styles.appTitle}>
                <Image style={styles.appIcon} source={require("../assets/logo.png")}/>
                <Text style={styles.appTitleText}>
                Story Telling App
                </Text>
            </View>
            <View>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={text => {
                      this.setState({ text: text });
                    }}
                    value={this.state.text}
                    placeholder={'username'}
                />
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={text => {
                      this.setState({ text: text });
                    }}
                    value={this.state.text}
                    placeholder={'password'}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navgation.navigate(BottomTabNavigator)}>
                <Text style={styles.googleText}>Sign in</Text>
            
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: RFValue(130),
    height: RFValue(130),
    resizeMode: "contain"
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans"
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white"
  },
  googleIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain"
  },
  googleText: {
    color: "black",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans"
  },
  cloudContainer: {
    flex: 0.3
  },
  cloudImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
    bottom: RFValue(-5)
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  }
});