import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import appStyles from './styles/AppStyle.js';

const anotherStyle = StyleSheet.create({
  dummy : {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={[appStyles.container]}>
        <Text>This is my default application!</Text>
      </View>
    );
  }
}


