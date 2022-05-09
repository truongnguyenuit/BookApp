import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from '../Components/StarRating'

const Categories = () => {
  return (
    <View style= {styles.container}>
      <LinearGradient
      colors={['#ff8c00','#ff8c00']}
      style={{ height: "20%" }}
      >
        <View style={{ flexDirection: 'row'}}>

        </View>

      </LinearGradient>
    </View>
  )
}

export default Categories
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }

})