import React, {useState,useLayoutEffect } from "react";
import { View, Text, Pressable } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { styles } from "../utils/Styles";

import PersonIcon from "@expo/vector-icons/Ionicons"

export default function ChatComponents({item}){
    const navigation = useNavigation();
    const [messages, setMessages] = useState({});

    //using a hoo to retrive the last message in the array from the item prop
    useLayoutEffect(() =>{
        setMessages(item.messages[item.messages.length - 1]);
    }, []);

    //navigating to the messaging screen
    const gotoMessaging =() =>{
        navigation.navigate("Messaging", {
            id: item.id,
            name: item.name,
        })

    }

    return(
       <Pressable onPress={gotoMessaging} style={styles.cchat}>
        <PersonIcon size={50}  name="person-circle-outline" color='green' style={styles.cavatar} />

        <View style={styles.crightContainer}>
            <View>
                <Text style={styles.cusername}>{item.name}</Text>
                <Text style={styles.cmessage}>
                    {messages ?.text ? messages.text : "Tap to start chatting"}
                </Text>
            </View>

            <View>
                <Text style={styles.ctime}>
                    {messages?.time ? messages.time : "now"}
                </Text>
            </View>
        </View>

       </Pressable>
    )
}