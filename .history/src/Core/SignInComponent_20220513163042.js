import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../../firebase';

export default function SignInComponent({ navigation }) {
  const handleLogin = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with', user.email);
    })
    .catch(error => alert(error.message))
  }

  return (

    <View style={styles.container}>
      <View style={styles.header} >
        <ImageBackground style={styles.background}
          source={require("../Screens/Images/SignIn_background2.jpeg")}>
        </ImageBackground>
      </View>

      <Animatable.View style={styles.footer}
        animation="fadeInUpBig" >
        <Text style={styles.textWelcome}> Welcome back </Text>
        <Text style={styles.text_bottom_welcome}> Login to your account </Text>

        <View style={[styles.action, { marginTop: 40 }]}>
          <Feather
            name="mail"
            color="#FF8C00"
            size={20}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
          />

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
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.button_signIn}
          onPress={() => navigation.navigate('HomeStackScreen')}
          
          >
            <Text style={styles.btnTextSignIn}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastViewInFooter}>
          <Text style={{ color: '#A0A0A0' }}>Don't have an account? </Text>
          <Text style={styles.textSignUp}
            onPress={() => navigation.navigate("SignUpScreen")}>
            Sign up
          </Text>
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
    flex: 1.5,

  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2
  },
  textWelcome: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_bottom_welcome: {
    color: 'gray',
    fontSize: 15,
    marginTop: 5,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#ff8c00',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  button_signIn: {
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: 50,
    width: image_width - 150,
  },
  btnTextSignIn: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  lastViewInFooter: {
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  textSignUp: {
    color: '#ff8c00',
    fontWeight: 'bold',
  }

})