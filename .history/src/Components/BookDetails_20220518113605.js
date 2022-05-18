import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( route ) {
  const img,Name,Author, Content= route.pa
  return (
    <View>
      <Text>BookDetails  {img}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})