import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignInComponent() {
  return (
    <View>
      <Text>SignInComponent</Text>
      <View style={styles.button}>
            <TouchableOpacity style={styles.button_getStarted}
              onPress={() => navigation.navigate('SignInScreen')}>
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