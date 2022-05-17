import { StyleSheet, Text, View,Dimensions, Image} from 'react-native'
import React, { useEffect,useState } from 'react';
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"

import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( { navigation, book } ) {
  const [img, setimg] = useState('')
  const [name, setname] = useState('') 
  const [author, setauthor] = useState('') 
  const [description, setdescription] = useState('')
  const ReadBookFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));

    querySnapshot.forEach((doc) => {
      console.warn(`${doc.id}`);
    if (`${doc.id}`== book) {
      const { img, name, author, description } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
    }
    });
  }
  
  useEffect(() => {
    ReadBookFromDB()
  },[]);

  return (
    <TouchableOpacity style= {styles.main_view} >
      <Image source ={{url:img}} style={styles.Coverimg}></Image>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    main_view: {
      height: HEIGHT,
      width: screenWidth/2 -8,

    },
    Coverimg: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        alignSelf: 'center'
    }
})
// ,{ Img:img, Name:name, Author: author, Description: description}
// () => navigation.navigate('Book Details',{ Img:img, Name:name, Author: author, Description: description})