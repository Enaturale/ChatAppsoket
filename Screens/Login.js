import React, {useState} from "react";
import {View, Text, SafeAreaView, TextInput, Pressable, Alert} from 'react-native'
import { styles } from "../utils/Styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}){
    const [username, setUsername] = useState("");

    const storeUser = async () =>{
        try{
            await AsyncStorage.setItem("Username", username);
            navigation.navigate("Chat")
        } catch(e){
            Alert.alert("Error! While Saving Usermane" + e)
        }
    }

    const login = () => {
       if(username.trim()){
        console.log({username})
        //call async storage
        storeUser();
       }else{
        Alert.alert("Username is required.")
       }
    }

    return(
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
                </View>

                <Pressable onPress={login} style={styles.loginbutton}>
                    <View>
                        <Text style={styles.loginbuttonText}>Submit</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )

}