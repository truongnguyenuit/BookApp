import React from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import BookOverview from "../Components/BookOverview";

import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const BookCovers = {
  firstbook:"9783453435773",
  secondbook:"9780099458326",
  thirdbook:"9780609810903",
  fourthtbook:"9780385516488",
}; 

const Home = () => {
  return (
    <View style={styles.mainview}>
      <LinearGradient
        colors={['#ff8c00','#ff8c00']}
        style= {{ height: "20%", marginBottom: 10}}
      >

      </LinearGradient>

    </View>

  );
};
export default Home;
const styles = StyleSheet.create({})