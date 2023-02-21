import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { io } from 'socket.io-client';

export default class App extends Component {
  
  componentDidMount(){
    const socket = io("http://192.168.79.90:3000"); //local IP for the socket connection

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
