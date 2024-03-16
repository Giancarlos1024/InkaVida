import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {users} from './data';

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticación simulada
    const user = users.find((user) => user.email === email && user.password === password);

    console.log('Usuario encontrado:', user);

    if (user) {
      console.log('Contraseña correcta');
      navigation.navigate('Home');
    } else {
      console.error('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Image source={require('../img/user.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Botón personalizado */}
      <TouchableOpacity
        style={styles.customButton}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        ¿No tienes cuenta?{' '}
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate('Register')}
        >
          Registrar
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  inicioText: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 100,
  },
  customButton: {
    backgroundColor: 'black', // Cambia el color del botón según tus preferencias
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 30,
  },
  text2: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 30,
  },
});

export default AuthScreen;
