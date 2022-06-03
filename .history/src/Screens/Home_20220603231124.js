import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from "react-native";
import BookOverview from "../Components/BookOverview";

import Swiper from "react-native-swiper";
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const BooksList = {
  firstbook: 'Alice and Greta: A Tale of Two Witches',
  secondbook: "Mocktails: The Complete Bartender's Guide",
  thirdbook: "A"
}
const HEIGHT = 300, WIDTH = 200;
const screenWidth = Dimensions.get('window').width;
const Home = ({ navigation }) => {
  const [arr, setarr] = useState([]);

  const [categoryy, setcategory] = useState('')
  const [Img, setimg] = useState('')
  const [Name, setname] = useState('')
  const [Author, setauthor] = useState('')
  const [Description, setdescription] = useState('')
  const [Content, setcontent] = useState('')

  const ReadBookFromDB = async () => {
    const q = query(collection(db, "books"))
    const querySnapshot = await getDocs(q);

    setarr([])

    querySnapshot.forEach((doc) => {

      const { category, img, name, author, description, content } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
      setcontent(content)

      setarr(oldArray => [...oldArray, { IMG: img, NAME: name, AUTHOR: author, DESCRIPTION: description, CONTENT: content }])

      //alert(doc.id)
      //console.warn();

      //setarr([...arr,{NAME: doc.id}])
      //setarr(oldArray => [...oldArray,{NAME: doc.id}])

    });
  }
  useEffect(() => {
    ReadBookFromDB()
  }, []);


  return (
    <View style={styles.mainview}>
      <LinearGradient
        colors={['#ff8c00', '#ff8c00']}
        style={{ height: "7%", marginBottom: 10 }}
      >
      </LinearGradient>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={true}
            height={200}
            activeDotColor='#ff8c00'>
            <View style={styles.slide}>
              <Image
                source={{
                  url: 'https://www.scholastic.com/content/dam/scholastic/educators/book-lists/Harry-Potter-Book-List_BL_16-9.jpg.corpimagerendition.xxl.1400.788.png',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://cdn.coolofthewild.com/wp-content/uploads/2016/12/adventure-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/27/11/pile-of-books.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://blog.efpsa.org/wp-content/uploads/2016/06/programming-psychologist-python-elixir-rstats-640x497.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.categoryContainer}>

          <TouchableOpacity style={styles.categoryBtn} >
            <View style={styles.categoryIcon}>
              <FontAwesome name="bookmark" size={35} color='#ff8c00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Saved</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <View style={styles.categoryIcon}>
              <FontAwesome5 name="readme" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryBtn}
            onPress={() => navigation.navigate('Like', { navigation: navigation })}
          >
            <View style={styles.categoryIcon}>
              <Entypo name="star" size={35} color='#FF8C00' />
            </View>
            <Text style={styles.categoryBtnTxt}>Favourite</Text>
          </TouchableOpacity>

        </View>
        <Text style={{ fontSize: 28, fontWeight: "bold", alignSelf: 'center', marginBottom: 20, color: 'black', marginTop: 10 }}>Popular Books</Text>

        <View style={styles.containerr}>
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
    </View>

  );
};
export default Home;
const styles = StyleSheet.create({
  shelf: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  mainview: {

  },
  sliderContainer: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    marginHorizontal: 0,
    alignSelf: 'center',
    marginLeft: 15
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 30
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#ff8c00',
    marginRight: 25,
  },
  containerr: {
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
  }

})