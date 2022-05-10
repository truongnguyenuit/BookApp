import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Profiler } from 'react/cjs/react.production.min'
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  return (
    <View style= {styles.root}>
       <LinearGradient
          colors={['#ff8c00','#ff8c00']}
       >

       </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({

})
export default Profile;