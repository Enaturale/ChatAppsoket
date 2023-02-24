import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from "../utils/Styles";
import socket from "../utils/Socket";

export default function EditModal({ setVisible }) {
    const [groupName, setGroupName] = useState("");

    
    //function that closes the Modal component
    const closeModal = () => setVisible(false);

    const createRoom = () => {
        console.log({ groupName });
        socket.emit("Create Room", groupName)
        closeModal();
    }

    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalsubheading}>
                Enter Your Group Name:
            </Text>

            <TextInput
                placeholder="Group Name: "
                onChangeText={(value) => setGroupName(value)}
                style={styles.modalinput}
            />

            <View style={styles.modalbuttonContainer} >
                <Pressable style={styles.modalbutton} onPress={createRoom}>
                    <Text style={styles.modaltext}>Create</Text>
                </Pressable>

                <Pressable onPress={closeModal} style={[styles.modalbutton, {backgroundColor:'red'}]}>
                    <Text style={styles.modaltext}>Cancel</Text>
                </Pressable>
            </View>

        </View>
    )
}
