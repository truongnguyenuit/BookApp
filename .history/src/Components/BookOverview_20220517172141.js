import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"
import { db } from '../../firebase'
import { useState } from 'react/cjs/react.production.min'

const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( props) {
  const [Img, setimg] = useState('')
  const [Name, setname] = useState('') 
  const [aauthor, setauthor] = useState('') 
  const [escription, setdescription] = useState('')
  const ReadBookFromDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      //console.warn(`${doc.id} => ${doc.data(UID)}`);
    if (`${doc.id}`== userUID) {
      const { Address, Email, Name, Phonenumber } = doc.data();
      setname(Name)
      
    }
    });
  }
  useEffect(() => {
    ReadBookFromDB()

  },[]);

  return (
    <TouchableOpacity style= {styles.main_view} onPress={}>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})