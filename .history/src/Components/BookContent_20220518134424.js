import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BookContent({ route, navigation }) {
    const { img, name, author, content }= route.params
  return (
    <View style={styles.container}>
      <Text style={styles.}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})