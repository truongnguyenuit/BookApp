import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-gesture-handler';


export default function SignInComponent( {navigation} ) {
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
              secureTextEntry={true}
              style={styles.textInput}
            />
            
            <TextInput
              placeholder="Password (must be > 5 characters)"
              style={styles.textInput}
              
            />

          
        </View>

        <View style={styles.button}>
          <Text style={styles.btnTextSignIn}>Login</Text>
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
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems
  },
  background: {
    flex: 1,
    width: image_width,
    height: image_height / 2
  },
})