import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EditProfileScreen = ({ navigation, route }) => {
  // Obtener los datos del perfil actual para prellenar los campos
  const { userEmail: initialEmail, userPassword: initialPassword, userAvatar: initialAvatar } = route.params || {};

  const [userEmail, setUserEmail] = useState(initialEmail || 'luisquispe@gmail.com');
  const [userPassword, setUserPassword] = useState(initialPassword || '123456789');
  const [userAvatar, setUserAvatar] = useState(initialAvatar || require('../img/user.png'));

  const saveChanges = () => {
    // Lógica para guardar los cambios en el perfil
    // Puedes realizar una llamada a la API o cualquier otra lógica aquí
    console.log('Guardar cambios:', { userEmail, userPassword });

    // Navegar de nuevo a la pantalla de perfil después de guardar los cambios
    navigation.navigate('UserProfile', { userEmail, userPassword });
  };

  return (
    <View style={styles.container}>
      {/* Contenedor del avatar */}
      <View style={styles.avatarContainer}>
        <Text style={styles.label}>Avatar</Text>
        <Image source={userAvatar} style={styles.avatar} />
      </View>

      {/* Campo de Email */}
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={userEmail}
        onChangeText={(text) => setUserEmail(text)}
      />

      {/* Campo de Contraseña */}
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={userPassword}
        onChangeText={(text) => setUserPassword(text)}
        secureTextEntry
      />

      {/* Botón para guardar cambios */}
      <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
