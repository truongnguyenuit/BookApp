import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BookContent({ router, navigation }) {
    const { img, name, author, content }= router.params
  return (
    <View>
      <Text>BookContasdent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})