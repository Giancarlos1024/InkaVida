import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { categories } from './data'; // Importamos las categorías desde el archivo data.js

const MealListScreen = ({ route }) => {
  const { categoryId } = route.params;
  const [meals, setMeals] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    // Buscamos las comidas correspondientes al categoryId
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    const mealsForCategory = selectedCategory?.meals || [];
    setMeals(mealsForCategory);
    setCategoryName(selectedCategory?.name || '');
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>
        Platillos de la categoría: {categoryName}
      </Text>
      <FlatList
        data={meals.slice(0, 5)} // Muestra solo los primeros 5 platillos
        renderItem={({ item }) => (
          <View style={styles.mealContainer}>
            <Image source={item.image} style={styles.mealImage} />
            <View style={styles.mealDetails}>
              <Text style={styles.mealName}>{item.name}</Text>
              <Text style={styles.mealIngredients}>Ingredientes: {item.ingredients.join(', ')}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  mealImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  mealDetails: {
    flex: 1,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mealIngredients: {
    fontSize: 16,
  },
});

export default MealListScreen;
