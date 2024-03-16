// ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('luisquispe@gmail.com');
  const [userPassword, setUserPassword] = useState('123456789');
  const [userAvatar, setUserAvatar] = useState(require('../img/user.png'));

  const editProfile = () => {
    // Navegar a la pantalla de edición de perfil con todos los datos del perfil
    navigation.navigate('EditProfile', { userEmail, userPassword, userAvatar });
  };

  const goToSettings = () => {
    // Navegar a la pantalla de configuración
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Image source={userAvatar} style={styles.avatar} />
      <Text style={styles.userEmail}>Email: {userEmail}</Text>
      <Text style={styles.userPassword}>Contraseña: {userPassword}</Text>
      {/* Nuevo botón para ir a la pantalla de configuración */}
      <TouchableOpacity style={styles.settingsButton} onPress={goToSettings}>
        <Text style={styles.settingsButtonText}>Configuración</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  userPassword: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  settingsButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
