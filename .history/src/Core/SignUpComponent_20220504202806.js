import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'




export default function SignUpComponent ({ navigation }) {
  
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
              onChangeText={(text_userName) => this.checkNameValidation(text_userName)}
            />
            {this.state.isValidUserName ?
              <Animatable.View
                animation="bounceIn" >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
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
              onChangeText={(text_phoneNumber) => this.checkPhoneValidation(text_phoneNumber)}
            />
            {this.state.isValidPhoneNumber ?
              <Animatable.View
                animation="bounceIn" >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
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
              onChangeText={(text) => this.checkEmailValidation(text)}
            />
            {this.state.isValidEmail ?
              <Animatable.View
                animation="bounceIn"
              >
                <Feather
                  name="check-circle"
                  color="green"
                  size={18}
                />
              </Animatable.View>
              : null
            }
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
                
                
              
            <Animatable.View>
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
            <TouchableOpacity style={styles.button_signUp}>
              <Text style={styles.btnTextSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </Animatable.View>
      </View>
    );
  
}



const image_width = Dimensions.get('window').width;
const image_height = Dimensions.get('window').height;