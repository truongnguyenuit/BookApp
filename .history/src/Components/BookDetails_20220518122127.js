import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen';
import LikeButton from '../Components/LikeButton';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;


export default function BookDetails({ route, navigation }) {
const { Img, Name, Author, Description, Content }= route.params
  return (
    <View style={styles.container}>
      <View style= {styles.top}>
        <Image source={{url:Img}} style={styles.coverImg}></Image>
      </View>
      <View style={styles.bot}>
         <View style={styles.textview}>
           <Text style={styles.header}>{Name}</Text>
           <Text style={styles.author}>Author: {Author}</Text>
           <Text style={styles.title}>Description</Text>
           <Text style={styles.escription}>{Description}</Text>
         </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  top: {
    height: "50%",
    width: "100%"
  },
  bot: {
    height: "50%",
    width: "100%"
  },
  coverImg: {
    width:"100%",
    height: "100%",
    resizeMode: "stretch"
  },
  textview: {
    margin: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15
  }

})