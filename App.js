// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { io } from 'socket.io-client';

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: "",
//       chatMessages: []
//     };
//   }

//   componentDidMount() {
//     this.socket = io("http://192.168.100.27:3000"); //local IP for the socket connection
//     this.socket.on("Chat Message", msg => {
//       this.setState({ chatMessages: [...this.state.chatMessages, msg] })
//     })

//   }

//   submitChatMessage() {
//     this.socket.emit("Chat Message", this.state.chatMessage);
//     this.setState({ chatMessage: "" })
//   }

//   render() {
//     const chatMessages = this.state.chatMessages.map(
//       chatMessage =>
//         <Text key={chatMessage.id}>{chatMessage}</Text>
//     )

//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={{ height: 40, borderWidth: 2, }}
//           autoCorrect={false}
//           value={this.state.chatMessage}
//           onSubmitEditing={() => this.submitChatMessage()}
//           onChangeText={chatMessage => {
//             this.setState({ chatMessage: chatMessage })
//           }}
//         />
//         {chatMessages}
//       </View>
//     );

//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: 100,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Screens/Login";
import Chat from "./Screens/Chat";
import Messaging from "./Screens/Messaging";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} />
        <Stack.Screen name="Messaging" component={Messaging} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
