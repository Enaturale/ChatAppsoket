import React, { useState, useLayoutEffect, useEffect} from "react";
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessagingComp from "../Components/MessagingComponent";

import { styles } from "../utils/Styles";
import socket from "../utils/Socket";

import Back from "@expo/vector-icons/Ionicons";

export default function Messaging({ route, navigation }) {
   
    //state to store dummy messages
    const [chatMessages, setChatMessages] = useState([
        {
            id: "1",
            text: "Hello guys, welcome!",
            time: "07:50",
            user: "Tomer",
        },
        {
            id: "2",
            text: "Hi Tomer, thank you! 😇",
            time: "08:50",
            user: "David",
        },

    ])

    const [message, setMessage] = useState("");
    const [user, setUser] = useState("");

    //accessin  gthe chatroom's name and id
    const { name, id } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({title: name})

        //sends the id to the server to fetch all its messaes
        socket.emit("findRoom", id);
        socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
    }, [])

    //when the messages of each chat room is updated. This code will run
    useEffect(() => {
      socket.on("foundRoom", (roomChats) => setChatMessages(roomChats))
    }, [socket])

    //function to fetech the username saves on Asyncstorage
    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem("username");
            if (value !== null) {
                setUser(value)
            }
        } catch (e) {
            console.error("Error while loading username!");
        }
    };

    //function to set the header title to the chatromm's name
    useLayoutEffect(() => {
        navigation.setOptions({ title: name });
        getUserName()
    }, [])

    //this function fetches the time a user sends a message, logs the 
    //username, message, and te timestamp to the console
    const handleMessage = () => {
        //fetching the hour
        const hour = new Date().getHours() < 10
            ? `0${new Date().getHours}`
            : `${new Date().getHours()}`;

        //fetching the minutes
        const mins = new Date().getMinutes() < 10
            ? `0${new Date().getMinutes}`
            : `${new Date().getMinutes()}`;

        // console.log({
        //     message,
        //     user,
        //     timestamp: { hour, mins },
        // });

        socket.emit("newMessage", {
            message,
            room_id: id,
            user,
            timestamp: {hour, mins}
        })
    }

    const gotoChatPage = () =>{
        return navigation.navigate("Chat")
    }


    return (
        <View style={styles.messagingscreen}>

            <Pressable style={{marginLeft: 25, marginBottom:-45}} onPress={gotoChatPage}>
                <Back name="arrow-back-outline" color="green" size={45}  />
            </Pressable>

            <View style={[styles.messagingscreen, { paddingVertical: 15, paddingHorizontal: 10 }]}>
                {chatMessages[0] ? (
                    <FlatList
                        data={chatMessages}
                        renderItem={({ item }) => (
                            <MessagingComp item={item} user={user} />
                        )}
                        keyExtractor={(item) => item.id}
                    />

                ) : ("")}
            </View>

            <View style={styles.messaginginputContainer}>
                <TextInput
                    style={styles.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable style={styles.messagingbuttonContainer} onPress={handleMessage}>
                    <Text style={{fontSize: 20, color:'white'}}>Send</Text>
                </Pressable>
            </View>

        </View>
    );

}