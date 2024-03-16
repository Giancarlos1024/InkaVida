// AddCategoryScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddCategoryScreen = () => {
  const [categoryName, setCategoryName] = useState('');
  const navigation = useNavigation();

  const handleAddCategory = () => {
    // Lógica para agregar la nueva categoría
    navigation.navigate('Home', { newCategoryName: categoryName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Nueva Categoría</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la categoría"
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <Button title="Agregar Categoría" onPress={handleAddCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddCategoryScreen;
