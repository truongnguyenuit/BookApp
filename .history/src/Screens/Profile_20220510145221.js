import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Profiler } from 'react/cjs/react.production.min'
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  return (
    <View style= {styles.root}>
       <LinearGradient
          colors={['#ff8c00','orange']}
          style= {{ height: '20%'}}
       >
       <View style={styles.header}>
           <Text style={{fontSize: 38,color:"#2d3436"}}>Personal <Text style={{fontWeight: '300', color:"white"}}>Profile</Text></Text>
       </View>
       </LinearGradient>
       <View style={styles.imagestyle}>
         
       </View>
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
  }

})
export default Profile;