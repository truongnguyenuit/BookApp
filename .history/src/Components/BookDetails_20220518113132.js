import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function BookDetails( props ) {
  const Img= props.params.Img
  const Name=props.params.Name
  const Author=props.params.Author
  const Content=props.params.Content
  return (
    <View>
      <Text>BookDetails</Text>
    </View>
  )
}

const styles = StyleSheet.create({})