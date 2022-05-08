import React from "react";
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import BookOverview from "../Components/BookOverview";

import Swiper from "react-native-swiper";
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";


const Home = () => {
  return (
    <View style={styles.mainview}>
      <LinearGradient
        colors={['#ff8c00','#ff8c00']}
        style= {{ height: "7%", marginBottom: 10}}
      >
      </LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}> 
          <Swiper
            autoplay>
            <View style={styles.slide}>
            <Image 
              source={{
                url: 'https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png',
              }}
              resizeMode="cover"
              style={styles.sliderImage}
            />


            </View>
          </Swiper>
        </View>
      </ScrollView>

    </View>

  );
};
export default Home;
const styles = StyleSheet.create({
  sliderContainer: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  }

})