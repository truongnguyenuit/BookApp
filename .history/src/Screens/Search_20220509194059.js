import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";
import SearchBar from "../Components/SearchBar";
export default function Search() {
  return (
    <View style={{ marginTop: 20 }}>
      <Image
        source={require("../Screens/Images/book_icon.png")}
        style={styles.logoStyle}
      />
    </View>
  );
};
const { height } =
const styles = StyleSheet.create({
  logoStyle: {

  }
})