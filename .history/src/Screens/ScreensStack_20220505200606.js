import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import BookDetails from "../Components/BookDetails";
import profile from "./profile";
import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function ScreensStack() {
  return (
    <View>
      <Text>ScreensStack</Text>
    </View>
  )
}

const styles = StyleSheet.create({})