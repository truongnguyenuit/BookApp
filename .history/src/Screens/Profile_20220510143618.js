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
       <View>
           <Text style={{fontSize: 38,color:"#2d3436"}}>Personal<Text style={{fontWeight}}></Text></Text>
       </View>

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