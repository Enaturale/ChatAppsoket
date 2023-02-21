import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { io } from 'socket.io-client';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    }
  }

  componentDidMount() {
    this.socket = io("http://192.168.79.90:3000"); //local IP for the socket connection
    this.socket.on("Chat Message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] })
    })

  }

  submitChatMessage() {
    this.socket.emit("Chat Message", this.state.chatMessage)
    this.setState({ chatMessage: "" })
  }

  render() {
    const chatMessages = this.state.chatMessages.map(
      chatMessage =>
        <Text key={chatMessage}>{chatMessage}</Text>
    )

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderWidth: 2, }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage })
          }}
        />
        {chatMessages}
      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
