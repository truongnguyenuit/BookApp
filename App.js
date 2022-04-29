import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigatior from './AppNavigation';



function App() {
  return (
    <NavigationContainer>
        <AppNavigatior />
    </NavigationContainer>
  );
}

export default App;