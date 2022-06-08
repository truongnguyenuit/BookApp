import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import SearchBar from "../Components/SearchBar";
import BookOverview from "../Components/BookOverview";
export default function Search({ navigation }) {
  // const [BookName, setBookName] = useState('')
  return (
    <View style={{ marginTop: 20 }}>
    <SearchBar/>
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
  logoStyle: {
    width: height_logo,
    height: height_logo,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  imgcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    
  },
  
})