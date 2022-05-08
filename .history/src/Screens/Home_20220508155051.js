import React from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import BookOverview from "../Components/BookOverview";

import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";


const Home = () => {
  return (
    <View style={styles.mainview}>
      <LinearGradient
        colors={['#ff8c00','#ff8c00']}
        style= {{ height: "25%", marginBottom: 10}}
      >
      </LinearGradient>
      <ScrollView style={styles.container}>
        <View style={}> 
        </View>
      </ScrollView>

    </View>

  );
};
export default Home;
const styles = StyleSheet.create({})