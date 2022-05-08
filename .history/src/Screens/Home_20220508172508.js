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
        colors={['#ff8c00', '#ff8c00']}
        style={{ height: "7%", marginBottom: 10 }}
      >
      </LinearGradient>
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={true}
            height={200}
            activeDotColor='#ff8c00'>
            <View style={styles.slide}>
              <Image
                source={{
                  url: 'https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/12/adventure-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://blog.efpsa.org/wp-content/uploads/2016/06/programming-psychologist-python-elixir-rstats-640x497.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <TouchableOpacity style={styles.categoryBtn}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="bookmark" size={35} color='#ff8c00' />
          </View>
          <Text style={styles.categoryBtnTxt}>Saved</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn}>
          <View style={styles.categoryIcon}>
            <FontAwesome5 name="readme" size={35} color='#FF8C00' />
          </View>
          <Text style={styles.categoryBtnTxt}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn}>
          <View style={styles.categoryIcon}>
            <Entypo name="star" size={35} color='#FF8C00' />
          </View>
          <Text style={styles.categoryBtnTxt}>Favourite</Text>
        </TouchableOpacity>

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
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  }

})