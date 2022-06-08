import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import SearchBar from "../Components/SearchBar";
import BookOverview from "../Components/BookOverview";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
export default function Search({ navigation }) {
  // const [BookName, setBookName] = useState('')
  const [bookk, setbookk] = useState('')
  return (
    <View style={{ marginTop: 20 }}>

      <View style={styles.background1}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Books Name ..."
          value={bookk}
          onChangeText={text => setbookk(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setname(bookk)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Author..."
          value={bookk}
          onChangeText={text => setbookk(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setname(bookk)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.background}>
        <AntDesign name="search1" style={styles.Icon} />
        <TextInput
          style={styles.input}
          placeholder="Search Books..."
          value={bookk}
          onChangeText={text => setbookk(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setname(bookk)}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

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

  }
})