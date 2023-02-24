import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native'
import { styles } from "../utils/Styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const storeUser = async () => {
        try {
            await AsyncStorage.setItem("Username", username);
            Alert.alert("Username found. Please Proceed!")
            navigation.navigate("Chat")
        } catch (e) {
            Alert.alert("Error! While Saving Usermane" + e)
        }
    }

    const login = () => {
        if (username.trim()) {
            console.log({ username })
            //call async storage
            storeUser();
        } else {
            Alert.alert("Username is required.")
        }
    }

    return (
        <SafeAreaView style={styles.loginscreen}>
            <View style={styles.loginscreen}>
                <Text style={styles.loginheading}>Login</Text>
                <View style={styles.logininputContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Enter Username"
                        style={styles.logininput}
                        onChangeText={(value) => setUsername(value)}
                    />
                    <TextInput
                        autoCorrect={false}
                        placeholder="Enter Password"
                        style={styles.logininput}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                    />
                </View>

                <Pressable onPress={login} style={styles.loginbutton}>

                    <Text style={styles.loginbuttonText}>Submit</Text>

                </Pressable>
            </View>
        </SafeAreaView>
    )

}