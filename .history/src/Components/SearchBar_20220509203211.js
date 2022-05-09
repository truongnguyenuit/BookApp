import React from "react";
import { View, StyleSheet } from "react-native";
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
    }
    input

})
export default SearchBar;