import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( route ) {
  const Img, Name, Author,description, Content= route.params
  return (
    <View>
      <Text>BookDetails  </Text>
    </View>
  )
}

const styles = StyleSheet.create({})