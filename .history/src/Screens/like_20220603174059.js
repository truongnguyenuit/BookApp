import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryFilter from '../Components/CategoryFilter';
import BookOverview from '../Components/BookOverview';


const Like = ({ navigation }) => {
  const [booksArray, setBooksArray] = useState('')


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff8c00', '#ff8c00']}
        style={{ height: "20%" }}
      >
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={{ fontSize: 38, color: "#2d3436" }}>Book <Text style={{ fontSize: 38, color: "white" }}>Categories</Text></Text>
          </View>
        </View>  
      </LinearGradient>
      {/* quét database, chèn vào array, for array rồi đẩy vào text */}
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Your Favourite</Text>
      </View>

      <View style={styles.imgcontainer}>
        {/* <CategoryFilter book={categoryy} booksarray={booksArray} setbook={setBooksArray} navigation={navigation} /> */}
      </View>
      
    </View>
  )
}

export default Like;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imgcontainer: {
    flex: 1,

  },
  titleView: {
    margin: 10,
    alignSelf: 'center',


  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FF8C00'
  }
})