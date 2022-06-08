import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import BookOverview from "../Components/BookOverview";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const HEIGHT = 300, WIDTH = 200;
const screenWidth = Dimensions.get('window').width;
export default function Search({ navigation }) {
  // const [BookName, setBookName] = useState('')
  const [bookname, setbookname] = useState('')
  const [bookauthor, setbookauthor] = useState('')
  const [bookcategory, setbookcategory] = useState('')
  const [arr, setarr] = useState([]);

  const [categoryy, setcategory] = useState('')
  const [Img, setimg] = useState('')
  const [Name, setname] = useState('')
  const [Author, setauthor] = useState('')
  const [Description, setdescription] = useState('')
  const [Content, setcontent] = useState('')
  const ReadBookFromDB = async (item, value) => {
    const q = query(collection(db, "books"), where(item, "==", value))
    const querySnapshot = await getDocs(q);
    console.log('qqqqqqqqqqq')
    setarr([])

    querySnapshot.forEach((doc) => {

      const { category, img, name, author, description, content } = doc.data();
      setimg(img)
      setname(name)
      setauthor(author)
      setdescription(description)
      setcontent(content)

      setarr(oldArray => [...oldArray, { IMG: img, NAME: name, AUTHOR: author, DESCRIPTION: description, CONTENT: content }])
    });
  }
  return (
    <View style={{ marginTop: 20 }}>

      <View style={styles.background1}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Books Name ..."
          value={bookname}
          onChangeText={text => setbookname(text)}
        />
        <TouchableOpacity
          style={styles.button}
          // onPress={() => ReadBookFromDB("name", bookname)}
          onPress
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Author..."
          value={bookauthor}
          onChangeText={text => setbookauthor(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => ReadBookFromDB("author",bookauthor)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Books Category..."
          value={bookcategory}
          onChangeText={text => setbookcategory(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => ReadBookFromDB("category",bookcategory)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {arr.map((book, key) => (

            <TouchableOpacity
              key={key}
              TouchableOpacity style={styles.main_view}
              onPress={() => navigation.navigate('BookDetails', { Img: book.IMG, Name: book.NAME, Author: book.AUTHOR, Description: book.DESCRIPTION, Content: book.CONTENT })}
            >
              <Image source={{ url: book.IMG }} style={styles.Coverimg} />

            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* <SearchBar book={BookName} setname={setBookName} navigation={navigation} />  */}


      {/* <ImageBackground
        source={require("../Screens/Images/book_icon.png")}
        style={styles.logoStyle}
      >
      <View style={styles.imgcontainer}>
        <BookOverview book={BookName} navigation={navigation} />
      </View>
      </ImageBackground> */}
    </View>
  );


};
const { height } = Dimensions.get('screen');
const height_logo = height * 0.3;
const styles = StyleSheet.create({
  // logoStyle: {
  //   width: height_logo,
  //   height: height_logo,
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: 150
  // },
  imgcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',

  },
  background1: {
    width: '95%',
    alignSelf: 'center',
    height: 60,
    flexDirection: "row",
    borderTopWidth: 2,
    // borderRadius: 10,
    borderBottomWidth: 2,

  },
  background: {
    width: '95%',
    alignSelf: 'center',
    height: 60,
    flexDirection: "row",
    borderBottomWidth: 2,
    // borderRadius: 10,

  },
  Icon: {
    marginLeft: 10,
    fontSize: 24,
    color: 'black',
    alignSelf: 'center'
  },
  input: {
    width: 261,
    height: '80%',
    alignSelf: 'center',
    paddingLeft: 5,
    marginLeft: 5,

  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#FF8C00',
    padding: 14,
    borderRadius: 8,

  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'

  },
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
  }
})