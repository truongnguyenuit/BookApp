import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SplashComponent({ navigation }) {
  return (
    <View style={styles.container}>
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
        <View style={styles.button}>
          <TouchableOpacity style={styles.button_getStarted}
            onPress={() => navigation.navigate('SignInScreen')}
          >
            <Text style={styles.textSign}>Get started</Text>
            <MaterialIcons
              name="navigate-next"
              color="white"
              size={20}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainScreen_logoStyle: {
    width: height_logo,
    height: height_logo
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    color: 'gray',
    fontSize: 15,
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end'

  }

})