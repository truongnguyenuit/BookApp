import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React, { useEffect,useState } from 'react';
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"



const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( book,{ navigation } ) {
  const [img, setimg] = useState('')
  const [name, setname] = useState('') 
  const [author, setauthor] = useState('') 
  const [description, setdescription] = useState('')
  const ReadBookFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      //console.warn(`${doc.id} => ${doc.data(UID)}`);
    if (`${doc.id}`== book) {
      const { img, name, author, description } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
    }
    });
  }
//   useEffect(() => {
//     ReadBookFromDB()

//   },[]);

  return (
    <TouchableOpacity style= {styles.main_view} onPress={() => navigation.navigate('Book Details')}>
      <Image source ={{url:img}} style={styles.Coverimg}></Image>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
// ,{ Img:img, Name:name, Author: author, Description: description}