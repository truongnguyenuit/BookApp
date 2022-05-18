import "react-native-gesture-handler";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import BookDetails from "../Components/BookDetails"
import BookContent from "../Components/BookContent";

import Categories from "./Categories";
import Search from "./Search";
import Profile from "./Profile";

import { AntDesign } from "@expo/vector-icons";
import { ScreenStack } from "react-native-screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function BookStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      
    </Stack.Navigator>
  )
}
function ScreensStack() {
  let iconcolor = '#ff8c00';
  return (
    <Tab.Navigator
      
      initialRouteName="Home"
      screenOptions={
        
        ({ route }) => ({
        tabBarIcon: ({ size }) => {
          let iconame;
          route.name == "Home"
            ? (iconame = "home")
            : route.name == "Categories"
              ? (iconame = "bars")
              : route.name == "Search"
                ? (iconame = "search1")
                : route.name == "Quotes"
                  ? (iconame = 'book')
                  : route.name == "Profile"
                    ? (iconame = "profile")
                    : null;
          return <AntDesign name={iconame} size={size} color={iconcolor} />;
        },
      })
      
      }
      
      tabBarOptions={{
        showLabel: true,
        activeTintColor: iconcolor,
      }}
    >
      <Tab.Screen name="Home" component={BookStack} options={{headerShown: false}}/>
      <Tab.Screen name="Categories" component={Categories} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}
export default ScreensStack;
