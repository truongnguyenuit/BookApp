import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from '../Components/StarRating'

const Categories = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ff8c00', '#ff8c00']}
        style={{ height: "20%" }}
      >
        <View style={styles.titleContainer}>
          <View>
            <Text style={{ fontSize: 38, color: "#2d3436" }}>Book <Text style={{ fontSize: 38, color: "white" }}>Categories</Text></Text>
          </View>
        </View>

      </LinearGradient>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/funny.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Funny Categoy</Text>
            <StarRating rating={4} review={99} />
            <Text style={styles.cardDetails}></Text>
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
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {

  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  }

})