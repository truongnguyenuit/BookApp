import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default function CategoryFilter() {
  return (
    <View>
      <Text>CategoryFilter</Text>
    </View>
  )
}

const styles = StyleSheet.create({})