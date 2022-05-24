import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function CategoryFilter({ category }) {
    const [Category, setcategory] = useState('')

    const ReadBookFromDB = async () => {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {

            const { category } = doc.data();
            setcategory(category)
            if( Category == category ) {
                const [img, setimg] = useState('')
  const [name, setname] = useState('') 
  const [author, setauthor] = useState('') 
  const [description, setdescription] = useState('')
  const [content, setcontent] = useState('')
            }
        });
    }

    useEffect(() => {
        ReadBookFromDB()
    }, [category]);

    return (
        <View>
            <Text>CategoryFilter</Text>
        </View>
    )
}

const styles = StyleSheet.create({})