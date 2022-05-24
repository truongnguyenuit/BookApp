import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler"

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const HEIGHT = 300, WIDTH = 200;
const screenWidth = Dimensions.get('window').width;

export default function BookOverview({ navigation, book, booksarray, setbook }) {
    const array1 = [
        { id: null, value: "Alabama" },
        { id: 2, value: "Georgia" },
        { id: 3, value: "Tennessee" }
    ];
    const [array, setarray] = useState(array1)

    const bookarray = [
        { NAME: "TRUONG", AUTHOR: "Alab"  },
        
    ];
    const [ar,setar] = useState(bookarray);
    
    const [categoryy, setcategory] = useState('')
    const [Img, setimg] = useState('')
    const [Name, setname] = useState('')
    const [Author, setauthor] = useState('')
    const [Description, setdescription] = useState('')
    const [Content, setcontent] = useState('')

    const ReadBookFromDB = async () => {
        const q = query(collection(db, "books"), where("category", "==", book))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            const { category, img, name, author, description, content } = doc.data();
            setimg(img)
            setname(name)
            setauthor(author)
            setdescription(description)
            setcontent(content)
            //bookarray.push({NAME: "VIP",AUTHOR: "NGUYEN"})

        });
        
    }
    // {IMG: img, NAME : name, AUTHOR: author,DESCRIPTION: description, CONTENT: content}
    useEffect(() => {
        ReadBookFromDB()
    }, [book]);
    


    return (
        <View>
            <Text>
                {ar.map((book) => (
                    <Text>{book.NAME} {book.AUTHOR}</Text>
                ))}
                <TouchableOpacity
                style={{backgroundColor: 'orange'}}
                onPress={{()=>bookarray.push({ NAME: "pro1", AUTHOR: "1truong"  })}>
                    <Text>asdasd</Text>
                </TouchableOpacity>
          
            </Text>
            <TouchableOpacity style={styles.main_view} onPress={() => navigation.navigate('BookDetails', { Img: Img, Name: Name, Author: Author, Description: Description, Content: Content })}>
                <Image source={{ url: Img }} style={styles.Coverimg} />
                <Text>{book}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})
// ,{ Img:img, Name:name, Author: author, Description: description, Content: content}