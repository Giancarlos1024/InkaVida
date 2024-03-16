import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Icon } from 'react-native-elements';

import CategoryItem from './CategoryItem';

const HomeScreen = ({ route }) => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Pollo', meals: [] },
    { id: 2, name: 'Carne', meals: [] },
    { id: 3, name: 'Desayuno', meals: [] },
    { id: 4, name: 'Almuerzo', meals: [] },
    { id: 5, name: 'Vegetales', meals: [] },
    { id: 6, name: 'Recetas bajas en carbohidratos', meals: [] },
    { id: 7, name: 'Snacks saludables', meals: [] },
    { id: 8, name: 'Platillos con granos integrales', meals: [] },
    { id: 9, name: 'Bebidas saludables', meals: [] },
    { id: 10, name: 'Cena', meals: [] },
  ]);
  const navigation = useNavigation();

  useEffect(() => {
    // Actualiza las categorías solo si hay nuevas categorías en route.params
    if (route.params?.newCategoryName) {
      const newCategory = { id: categories.length + 1, name: route.params.newCategoryName, meals: [] };
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    }
  }, [route.params?.newCategoryName]);

  return (
    <ImageBackground source={require('../img/Fondo.jpg')} style={styles.background}>
      <Header
        centerComponent={{ text: 'Categorías', style: { color: '#fff', fontSize: 40, fontWeight: 'bold' } }}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
            <Icon name="user" type="font-awesome" color="#fff" />
          </TouchableOpacity>
        }
        containerStyle={{
          backgroundColor: 'transparent',
          justifyContent: 'space-between',
          borderBottomWidth: 0,
        }}
      />

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MealList', { categoryId: item.id })}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddCategory')}>
        <Text style={styles.addButtonText}>+ Agregar Categoría</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default HomeScreen;
