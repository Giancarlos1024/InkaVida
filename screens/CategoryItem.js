// CategoryItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
  },
});

export default CategoryItem;
