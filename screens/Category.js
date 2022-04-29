import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import ProductListItem from '../Components/ProductListItem';

export default function Category({ route, navigation }) {
  
  const { categoryName } = route.params;
  const products = [
    {
      id: 1,
      images: [{
        url: 'https://images.unsplash.com/photo-1650813748095-6854566c243f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        }],
      name: 'Snowboard',
      price: '200'
    },
    {
      id: 2,
      images: [{
        url: 'https://images.unsplash.com/photo-1650813748095-6854566c243f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'

      }],
      name:'Snowboard',
      price: '200'
    }
  ]
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) =>
         <View style= {styles.wrapper}>
         <ProductListItem product={item} />
         </View>
      }
      keyExtractor={(item) => `${item.id}`} 
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 8,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 4,
  }
});