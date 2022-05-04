
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from './screens/Categories';
import Category from './screens/Category';
import Cart from './screens/Cart';
import Oders from './screens/Oders';
import Settings from './screens/Settings';
import signin from './screens/login/signin';


const Stack = createNativeStackNavigator();

function AppNavigatior() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >  
        <Stack.Screen name="Home" component={signin} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    
      
  );
}

export default AppNavigatior;

