import React from 'react';
import { View, Text } from 'react-native';

const TripDetailsScreen = ({ route }) => {
  const { trip } = route.params;

  return (
    <View>
      <Text>Detalles del Viaje</Text>
      <Text>Destino: {trip.destination}</Text>
      <Text>Inicio: {trip.startDate}</Text>
      <Text>Fin: {trip.endDate}</Text>
      {/* Agrega más detalles según sea necesario */}
    </View>
  );
};

export default TripDetailsScreen;
