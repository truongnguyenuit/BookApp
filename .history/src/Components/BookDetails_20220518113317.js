import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( props ) {
  const img= props.Img
  const Name=props.Name
  const Author=props.Author
  const Content=props.Content
  return (
    <View>
      <Text>BookDetails  {Img}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})