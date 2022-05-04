
import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import CategoryListItem from '../Components/CategoryListItem';




const initcategories = [
  {
    id: 1,
    name: 'dụng cụ trượt tuyết',
  },
  {
    id: 2,
    name: 'quần áo trượt   ',
  },
  { 
    id: 3,
    name: 'kính mũ',
  },
];



export default function Categories( {navigation} ) {
  
  const [categories, setcategories] = useState(initcategories);
  
  return (
    <FlatList 
      data={categories}
      renderItem={({ item }) => 
      <CategoryListItem 
         category={item} 
         onPress={() => navigation.navigate('Category',{
           categoryName: 'complete',
         })}
      />}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});
 