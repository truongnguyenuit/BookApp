import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler"

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const HEIGHT = 300, WIDTH = 200;
const screenWidth = Dimensions.get('window').width;

export default function BookOverview({ navigation }) {


  const [arr, setarr] = useState([]);

  const [categoryy, setcategory] = useState('')
  const [Img, setimg] = useState('')
  const [Name, setname] = useState('')
  const [Author, setauthor] = useState('')
  const [Description, setdescription] = useState('')
  const [Content, setcontent] = useState('')

  const ReadBookFromDB = async () => {
    var userUID;
    var user = firebase.auth().currentUser;
    if (user)
      userUID = user.uid
    const q = query(collection(db, "likes"), where("UID", "==", userUID))
    const querySnapshot = await getDocs(q);
    setarr([])

    querySnapshot.forEach((doc) => {

      const { img, name, author, description, content } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
      setcontent(content)

      setarr(oldArray => [...oldArray, { IMG: img, NAME: name, AUTHOR: author, DESCRIPTION: description, CONTENT: content }])
      //console.warn();

      //setarr([...arr,{NAME: doc.id}])
      //setarr(oldArray => [...oldArray,{NAME: doc.id}])

    });
  }
  useEffect(() => {
    ReadBookFromDB()
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {arr.map((book) => (

          <TouchableOpacity
            TouchableOpacity style={styles.main_view}
            onPress={() => navigation.navigate('BookDetails', { Img: book.IMG, Name: book.NAME, Author: book.AUTHOR, Description: book.DESCRIPTION, Content: book.CONTENT })}
          >
            <Image source={{ url: book.IMG }} style={styles.Coverimg} />

          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',

  },
  main_view: {
    height: HEIGHT,
    width: screenWidth / 2 - 8,
    marginTop: 5,
    marginLeft: 5,

  },
  Coverimg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: 'center',
  },

})
// ,{ Img:img, Name:name, Author: author, Description: description, Content: content}