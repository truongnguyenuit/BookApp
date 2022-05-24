import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function CategoryFilter() {
  const [category, setimg] = useState('')
  
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
    <View>
      <Text>CategoryFilter</Text>
    </View>
  )
}

const styles = StyleSheet.create({})