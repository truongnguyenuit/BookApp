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
        source={require("../Screens/Images/Bookstore_logo.png")}
      />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})