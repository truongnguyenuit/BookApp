import React, { useEffect,useState } from 'react';
import { Text, View, Dimensions, StyleSheet, ImageBackground } from "react-native";
import SearchBar from "../Components/SearchBar";
import BookOverview from "../Components/BookOverview";
export default function Search({ navigation }) {
  const [BookName, setBookName] = useState('')
  return (
    <View style={{ marginTop: 20 }}>
      <SearchBar navigation={navigation}/>
      <ImageBackground
        source={require("../Screens/Images/book_icon.png")}
        style={styles.logoStyle}
      >
      <BookOverview book={BookName} setname={setBookName) navigation={navigation}/>
      </ImageBackground>
    </View>
  );
};
const { height } =Dimensions.get('screen');
const height_logo = height *0.3;
const styles = StyleSheet.create({
  logoStyle: {
    width: height_logo,
    height: height_logo,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  }
})