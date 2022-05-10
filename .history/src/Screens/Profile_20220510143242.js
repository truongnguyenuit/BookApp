import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Profiler } from 'react/cjs/react.production.min'
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  return (
    <View style= {styles.root}>
       <LinearGradient
          colors={['#ff8c00','blue']}
          style= {{ height: '20%'}}
       >

       </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }

})
export default Profile;