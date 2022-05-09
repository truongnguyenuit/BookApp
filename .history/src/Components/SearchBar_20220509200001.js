import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
    return (
        <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
        </View>
    )
}
const styles= StyleSheet.create({
    background: {

    }

})