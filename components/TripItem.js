import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripItem = ({ trip }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.destination}>{trip.destination}</Text>
      <Text style={styles.dates}>{`${trip.startDate} - ${trip.endDate}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  destination: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dates: {
    fontSize: 14,
    color: '#666',
  },
});

export default TripItem;
