// SettingsScreen.js
import React from 'react';
import EditProfileScreen from './EditProfileScreen';
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    const goToEditProfile = () => {
        console.log('Navegar a EditProfile');
        navigation.navigate('EditProfile');
      };

  const exitApp = () => {
    // Utilizar BackHandler para salir de la aplicación
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={goToEditProfile}>
        <Text style={styles.optionText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={exitApp}>
        <Text style={styles.optionText}>Cerrar Aplicación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  option: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
});

export default SettingsScreen;
