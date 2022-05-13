import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { create } from 'json-server';
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import * as firebase from 

const firebaseConfig = {
  apiKey: "AIzaSyDXgmxgcTDznq9Du4FyoteHy3N5JDy4s0U",
  authDomain: "fire-reactnative.firebaseapp.com",
  projectId: "fire-reactnative",
  storageBucket: "fire-reactnative.appspot.com",
  messagingSenderId: "152431470740",
  appId: "1:152431470740:web:e5ef023deec6fe3322ac81",
  measurementId: "G-STKYPQELQV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function SignUpComponent({ navigation }) {
  return (
    
    <View style={styles.container}> 
      <View style={styles.header}>
        <ImageBackground style={styles.background}
          source={require("../Screens/Images/SignUp_background.jpg")}>
        </ImageBackground>
      </View> 

      <Animatable.View style={styles.footer}
        animation="fadeInUpBig">
        <Text style={styles.titleText}> Sign Up </Text>

        <View style={[styles.action, { marginTop: 40 }]}>
          <FontAwesome
            name="user-o"
            color="#FF8C00"
            size={20}
          />
          <TextInput
            placeholder="User Name"
            style={styles.textInput}

          />

          <Animatable.View
            animation="bounceIn" >
            <Feather
              name="check-circle"
              color="green"
              size={18}
            />
          </Animatable.View>


        </View>

        <View style={[styles.action, { marginTop: 20 }]}>
          <AntDesign
            name="phone"
            color="#FF8C00"
            size={20}
          />
          <TextInput
            keyboardType='numeric'
            placeholder="Phone Number"
            style={styles.textInput}

          />

          <Animatable.View
            animation="bounceIn" >
            <Feather
              name="check-circle"
              color="green"
              size={18}
            />
          </Animatable.View>

        </View>

        <View style={[styles.action, { marginTop: 20 }]}>
          <Feather
            name="mail"
            color="#FF8C00"
            size={20}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}

          />
          <Animatable.View
            animation="bounceIn"
          >
            <Feather
              name="check-circle"
              color="green"
              size={18}
            />
          </Animatable.View>


        </View>

        <View style={[styles.action, { marginTop: 20 }]}>
          <FontAwesome
            name="lock"
            color="#FF8C00"
            size={20}
          />

          <TextInput
            placeholder="Password (must be > 5 characters)"
            style={styles.textInput}

          />
          <Animatable.View
            animation="bounceIn" >
            <TouchableOpacity>

              <Feather
                name="eye"
                color="gray"
                size={18}
              />

            </TouchableOpacity>
          </Animatable.View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.button_signUp}
           >
            <Text style={styles.btnTextSignUp}>Sign Up</Text>
          </TouchableOpacity>  
        </View>

      </Animatable.View>
    </View>
  );

}

 const image_width = Dimensions.get('window').width;
 const image_height = Dimensions.get('window').height;

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',

  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2.8
  },
  titleText: {
    alignContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,

  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor:'#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#ff8c00'
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  button_signUp: {
    backgroundColor: '#ff8c00',
    borderRadius: 50,
    height: 50,
    width: image_width -150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextSignUp: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  }

}) 