import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import LikeButton from '../Components/LikeButton';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;


export default function BookDetails({ route, navigation }) {
const { Img, Name, Author, Description, Content }= route.params
  return (
    <View>
      <View style= {styles.top}>
        <Image source={{url:Img}}></Image>
      </View>
      <View style={styles.bot}>
         <View>
           <tEX
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})