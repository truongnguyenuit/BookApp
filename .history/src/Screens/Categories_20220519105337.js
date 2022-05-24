import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from '../Components/StarRating'

const Categories = ({ navigation }) => {
  //const [category1,setcategory1] = useState['Funny Category']
  
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


      <ScrollView>
        <TouchableOpacity 
        style={styles.card}
        onPress={()=> navigation.navi}
        >
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/funny.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Funny Category</Text>
            <StarRating ratings={4} reviews={99} />
            <Text style={styles.cardDetails}>
              Amazing description for this category
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/drama.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Drama Category</Text>
            <StarRating ratings={5} reviews={150} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/romantic.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Romantic Category</Text>
            <StarRating ratings={3} reviews={50} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/action.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Action Category</Text>
            <StarRating ratings={2} reviews={20} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/horror.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Horror Category</Text>
            <StarRating ratings={4} reviews={110} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/scienceFiction.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Science Fiction Category</Text>
            <StarRating ratings={2} reviews={20} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../Screens/Images/scienceFiction.jpg')}
              resizeMode="stretch"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Science Fiction Category</Text>
            <StarRating ratings={2} reviews={20} />
            <Text style={styles.cardDetails}>
              Amazing description for this Category
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Categories
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    fontWeight: '800',
    color: '#2d3436',
    paddingHorizontal: 30,
  },
  card: {
    height: 150,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: 'center',
    borderRadius: 8

  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor:'#FFF'
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  }

})