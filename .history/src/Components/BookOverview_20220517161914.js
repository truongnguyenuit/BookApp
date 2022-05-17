import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"
import { db } from '../../firebase'

const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( props) {

  return (
    <View>
      <Text>BookOverview</Text>
    </View>
  )
}

const styles = StyleSheet.create({})