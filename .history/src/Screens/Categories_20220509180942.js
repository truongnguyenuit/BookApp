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
        <View style={styles.titleContainer}>
          <View>
            <Text style={{ fontSize: 38, color: "#2d3436"}}>Book <Text style={{fontSize: 38, color: "white"}}>Categories</Text></Text>
          </View>
        </View>

      </LinearGradient>
      <ScrollView>
        <View style={styles.card}>
          <Image
            source={require('../Screens/Images/funny.jpg')}
            resizeMode="stretch"
            style={styles.cardImg}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Funny Categoy</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this category
            </Text>

          </View>

          

        </View>
      </ScrollView>
    </View>
  )
}

export default Categories
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',

  

  }

})