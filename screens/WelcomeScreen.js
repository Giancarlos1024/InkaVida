// WelcomeScreen.js
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleStart = () => {
    // Navegar a la pantalla de inicio de sesión (Auth)
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InkaVida</Text>
      <Image source={require('../img/logoinka.png')} style={styles.image} />
      
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Empezar</Text>
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
    backgroundColor: '#ffffff',
    borderRightWidth: 10,  // Ancho del borde en el lado derecho
    borderLeftWidth: 10,   // Ancho del borde en el lado izquierdo
    borderColor: 'black',  // Color del borde
    
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
    borderRadius: 100, // Hace que la imagen sea circular
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // Cambia el color del texto según tus preferencias
  },
  button: {
    backgroundColor: 'black', // Cambia el color del botón según tus preferencias
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff', // Cambia el color del texto del botón según tus preferencias
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'black', 
    fontSize: 15,
    fontWeight: 'bold',
    padding:30
  },
  text2: {
    color: 'red', 
    fontSize: 15,
    fontWeight: 'bold',
    padding:30,
  },
});

export default WelcomeScreen;
