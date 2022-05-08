import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { AntDesign } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function BookStack() {
  return (
    <Stack.Navigator headerMode= {false}></Stack.Navigator>
  )
}

export default function ScreensStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Home" component={BookStack} />
          <Tab.Screen name="Categories" component={Categories} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Quotes" component={Bookmarks} />
          <Tab.Screen name="Profile" component={profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

