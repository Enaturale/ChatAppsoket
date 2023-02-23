import React from "react";
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import { styles } from "../utils/Styles";

import EditBtn from "@expo/vector-icons/Feather"

import ChatComponents from "../Components/ChatComponents";

export default function Chat() {

    //dummy list of rooms
    const rooms = [
        {
            id: '1',
            name: "Hangout Group",
            messages: [
                {
                    id: "1a",
                    text: "Hello guys, welcome!",
                    time: "07:50",
                    user: "Tomer",
                },
                {
                    id: "1b",
                    text: "Hi Tomer, thank you! 😇",
                    time: "08:50",
                    user: "David",
                },
            ],
        },
        {
            id: "2",
            name: "Hacksquad Team 1",
            messages: [
                {
                    id: "2a",
                    text: "Guys, who's awake? 🙏🏽",
                    time: "12:50",
                    user: "Team Leader",
                },
                {
                    id: "2b",
                    text: "What's up? 🧑🏻‍💻",
                    time: "03:50",
                    user: "Victoria",
                },
            ],
        }

    ]

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Chats</Text>

                    <Pressable onPress={() => console.log("Button Pressed.")}>
                        <EditBtn name="edit" size={24} color="green" />
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponents item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No Rooms Created!</Text>
                        <Text>Click on icon to createa chat room.</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )

}