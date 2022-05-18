import React, { useEffect,useState } from 'react';

import { Text,View, StyleSheet,TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
    return (
        <View style={styles.background}>
            <AntDesign name="search1" style={styles.Icon} />
            <TextInput
                style={styles.input}
                placeholder="Search Books..."
            />
            <TouchableOpacity
            style={styles.button}
            >
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        width: '95%',
        alignSelf: 'center',
        height: 60,
        flexDirection: "row",
        borderWidth: 3,
        borderRadius: 10,

    },
    Icon: {
        marginLeft: 10,
        fontSize: 24,
        color: 'black',
        alignSelf: 'center'
    },
    input: {
        width: 267,
        height: '80%',
        alignSelf: 'center',
        paddingLeft: 5,
        marginLeft: 5,

    },
    button: {
        alignSelf:'center',
        backgroundColor:'#FF8C00',
        padding: 13,
        borderRadius: 8,

    },
    buttonText: {

    }

})
export default SearchBar;