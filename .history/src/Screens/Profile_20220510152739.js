import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Title, Card, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';
const Profile = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#ff8c00', 'orange']}
        style={{ height: '20%' }}
      >
        <View style={styles.header}>
          <Text style={{ fontSize: 38, color: "#2d3436" }}>Personal <Text style={{ fontWeight: '300', color: "white" }}>Profile</Text></Text>
        </View>
      </LinearGradient>
      <View style={styles.imagestyle}>
        <Image
          style={{ width: 140, height: 140, borderRadius: 70, margin: -50 }}
          source={{ uri: "https://images.unsplash.com/photo-1563235453-a57d94b5a552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 55, margin: 15 }}>
        <Title style={{ fontSize: 25, fontWeight: 'bold'}}>Trường Nguyễn</Title>

      </View>
      <Card style={styles.mycard}>
         <View style={styles.cardcontainer}>
          <MaterialIcons style={{margin:4}} name="email" size={32} color='#ff8c00'/>
          <Text style={{ margintop: 0,fontSize: 55}}>19521066@gm.uit.edu.vn</Text>
         </View> 

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imagestyle: {
    alignItems: 'center',
    marginTop: 30,
  },
  mycard:{
    margin: 3,
    marginTop: 10,
  },
  cardcontainer: {
    flexDirection: 'row',
    padding: 5
  }

})
export default Profile;