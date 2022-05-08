import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import BookDetails from "../Components/BookDetails"
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { ScreenStack } from "react-native-screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function BookStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book Details" component={BookDetails} />
    </Stack.Navigator>
  )
}

function ScreensStack() {
  let iconcolor = '#ff8c00';
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }) => {
          let iconame;
          route.name == "Home"
            ? (iconame = "home")
            : route.name == "Categories"
          return <
             
        }
      })}
    >
      <Tab.Screen name="Home" component={BookStack} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Quotes" component={Bookmarks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
export default ScreensStack;
