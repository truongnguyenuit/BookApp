import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function ScreensStack() {
  return (
    <View>
      <Text>ScreensStack</Text>
    </View>
  )
}

const styles = StyleSheet.create({})