import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( route ) {
  const Img, Name, Author, Content= route.params
  return (
    <View>
      <Text>BookDetails  {img}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})