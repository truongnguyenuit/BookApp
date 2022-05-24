import { StyleSheet, Text, View,Dimensions, Image} from 'react-native'
import React, { useEffect,useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler"

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;

export default function BookOverview( { navigation, book } ) {
  const [category,setcategory] =useState()
  const [img, setimg] = useState('')
  const [name, setname] = useState('') 
  const [author, setauthor] = useState('') 
  const [description, setdescription] = useState('')
  const [content, setcontent] = useState('')
  
  const ReadBookFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "books"));
    querySnapshot.forEach((doc) => {
    if (`${doc.id}`== book) {
      const { img, name, author, description, content } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
      setcontent(content)
    }
    });
  }
  
  useEffect(() => {
    ReadBookFromDB()
  },[book]);
  

  return (
    <TouchableOpacity style= {styles.main_view} onPress={() => navigation.navigate('BookDetails',{ Img:img, Name:name, Author: author, Description: description, Content: content})}>
      <Image source ={{url:img}} style={styles.Coverimg}/>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    main_view: {
      height: HEIGHT,
      width: screenWidth/2 -8,
      marginTop: 5,
      marginLeft: 5,

    },
    Coverimg: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        alignSelf: 'center',
    }
})
// ,{ Img:img, Name:name, Author: author, Description: description, Content: content}