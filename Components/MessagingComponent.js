import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../utils/Styles';

import PersonIcon from "@expo/vector-icons/Ionicons"

export default function MessagingComp({ item, user }) {

    const status = item.user !== user;

   return(
    <View>
        <View style={status ? styles.mmessageWrapper : [styles.mmessageWrapper, {alignItems:'flex-end'}]}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <PersonIcon name='person-circle-outline' size={30} color='black' style={styles.mvatar} />
                
                <View style={status ? styles.mmessage : [styles.mmessage, {backgroundColor: "rgb(194, 243, 194)"}]}>
                    <Text>{item.text}</Text>
                </View>
            </View>

            <Text style={{marginLeft: 40}}>{item.time}</Text>
        </View>

    </View>
   )
}
