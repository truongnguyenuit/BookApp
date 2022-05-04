
import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SignInComponent() {
  return (
    <View>
      <Text>SignInComponent</Text>
      <View style={styles.button}>
            <TouchableOpacity style={styles.button_getStarted}
              onPress={() => navigation.navigate('SScreen')}>
              <Text style={styles.textSign}>Get started</Text>
              <MaterialIcons
                name="navigate-next"
                color="white"
                size={20} />
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})