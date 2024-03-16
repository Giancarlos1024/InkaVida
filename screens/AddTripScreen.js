//AddTripScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddTripScreen = ({ navigation, route }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTrip = () => {
    if (!destination || !startDate || !endDate) {
      alert('Completa todos los campos');
      return;
    }

    // Simular la adición de un nuevo viaje
    const newTrip = { id: new Date().getTime(), destination, startDate, endDate };

    // Limpiar los campos después de agregar el viaje
    setDestination('');
    setStartDate('');
    setEndDate('');

    // Obtener la lista actual de viajes desde los parámetros de navegación
    const currentTrips = route.params?.trips || [];

    // Navegar de regreso a la pantalla principal y pasar la lista de viajes actualizada
    navigation.navigate('Home', { trips: [...currentTrips, newTrip] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Nuevo Viaje</Text>
      <TextInput
        style={styles.input}
        placeholder="Destino"
        value={destination}
        onChangeText={(text) => setDestination(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Inicio (YYYY-MM-DD)"
        value={startDate}
        onChangeText={(text) => setStartDate(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Fin (YYYY-MM-DD)"
        value={endDate}
        onChangeText={(text) => setEndDate(text)}
      />
      <Button title="Agregar Viaje" onPress={handleAddTrip} />
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

export default AddTripScreen;
