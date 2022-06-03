import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen';
import LikeButton from '../Components/LikeButton';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth, db } from '../../firebase';




export default function BookDetails({ route, navigation }) {
  const { Img, Name, Author, Description, Content } = route.params
  const [test, setTest] = useState('truong')
  const handleLike = async () => {
    const citiesRef = collection(db, "likes");

    await setDoc(doc(citiesRef), {
      key: Name,
      UID: userUID,
    });
  }


  var userUID;
  var user = firebase.auth().currentUser;
  if (user)
    userUID = user.uid
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={{ url: Img }} style={styles.coverImg}></Image>
        <TouchableOpacity
         style={styles.btn}
         onPress={handleLike}>
          <LikeButton />   
        </TouchableOpacity>
      </View>
      <View style={styles.bot}>
        <View style={styles.textview}>
          <Text style={styles.header}>{Name}</Text>
          <Text style={styles.author}>By: {Author}</Text>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>{Description}</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttontext}>
              Go Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BookContent',{img: Img,name :Name,author: Author, content: Content})}
          >
            <Text style={styles.buttontext}>
              Start Read
            </Text>
          </TouchableOpacity>
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
    width: "100%",
    height: "100%",
    resizeMode: "stretch"
  },
  textview: {
    margin: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  author: {
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginVertical: 10,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 30
    
  },
  buttontext: {
    fontWeight:'bold',
    color:'white'
  },
  btn: {
    position: 'absolute',
    marginTop: screen_height-430,
    marginLeft: screen_width-80,
  }


})