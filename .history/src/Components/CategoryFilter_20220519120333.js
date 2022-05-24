import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function CategoryFilter({ categoryy }) {
    const [Category, setcategory] = useState('')
    const [img, setimg] = useState('')
    const [name, setname] = useState('')
    const [author, setauthor] = useState('')
    const [description, setdescription] = useState('')
    const [content, setcontent] = useState('')

    const ReadBookFromDB = async () => {
        const querySnapshot = await getDocs(collection(db, "books"));
        querySnapshot.forEach((doc) => {

            const { category } = doc.data();
            setcategory(category)
            if (Category == categoryy) {
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
    }, [category]);

    return (
        <TouchableOpacity style= {styles.main_view} onPress={() => navigation.navigate('BookDetails',{ Img:img, Name:name, Author: author, Description: description, Content: content})}>
      <Image source ={{url:img}} style={styles.Coverimg}/>
      
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})