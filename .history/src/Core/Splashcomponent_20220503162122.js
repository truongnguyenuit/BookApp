import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashComponent() {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation={"bounceIn"}
          duration={1500}
          resizeMode={"stretch"}
          style={styles.mainScreen_logoStyle}
          source={require("../Screens/Images/Bookstore_logo.png")}
        />

      </View>
      <Animatable.View style={styles.footer}
          animation="fadeInUpBig" >
          <Text style={styles.title}>JOIN BOOKSTORE TODAY!</Text>
          <Text style={styles.text}>Create an account to start reading</Text>
          
        </Animatable.View>
    </View>
  )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;


const styles = StyleSheet.create({
  mainScreen_logoStyle: {
    width: height_logo,
    height: height_logo
  },

})