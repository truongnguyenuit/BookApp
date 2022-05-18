import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { connect } from 'formik'

export default function BookContent({ route, navigation }) {
    const { img, name, author, content }= route.params
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.author}>by: {author}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding : 30,
        paddingVertical: 50,
    },
    title: {
        
        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        textAlign: 'center'
    },
    author: {
        fontSize:15,
        textAlign: 'center'
    }

})