import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( route ) {
const { Img, Name, Author, Description, Content }= route.params
  return (
    <View>
      <Text>BookDetails  {Name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})