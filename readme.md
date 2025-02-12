# Proyecto InkaVida

**InkaVida** es una aplicación móvil diseñada para ayudar a los usuarios a llevar un estilo de vida saludable a través de la gestión de su alimentación y ejercicio. La app permite a los usuarios acceder a un sistema de seguimiento de su dieta, registrar sus platillos favoritos, configurar su perfil y mucho más. Está construida utilizando **React Native** y **Expo Go**, lo que permite un desarrollo ágil y compatibilidad tanto con dispositivos Android como iOS.

## Características principales:
- Registro y autenticación de usuarios.
- Vista principal con un menú fácil de navegar.
- Registro de platillos por categoría (Carne, Pollo, Vegetales).
- Gestión del perfil y configuración personalizada.
- Opciones para agregar y editar categorías de platillos.


## Tecnologías

```
→ React Native
→ Expo Go
→ Emulador opcional (Nox) o Dispositivo Android o iOS
→ Diseño UX/UI: Figma

```

### Interfaz Principal
![Interfaz Principal](./img/readme_Interfaces/principal.png)
La vista principal donde los usuarios pueden acceder a todas las funcionalidades de la app, desde el inicio hasta las opciones de menú.

### Interfaz Login
![Interfaz Login](./img/readme_Interfaces/login.png)
Pantalla de inicio donde los usuarios pueden ingresar con su cuenta para acceder a sus datos personalizados.


### Interfaz Registro
![Interfaz Registro](./img/readme_Interfaces/registrar.png)
Pantalla de registro para nuevos usuarios que deseen crear una cuenta en la app.


### Interfaz Home
![Interfaz Home](./img/readme_Interfaces/home.png)
Una vez que el usuario haya iniciado sesión, la vista principal del hogar muestra su progreso, opciones y acceso rápido a funcionalidades como el registro de platillos.

### Platillo Carne
![Platillo Carne](./img/readme_Interfaces/platillo_carne.png)
Vista de un platillo con carne registrado en la aplicación. El usuario puede añadir o modificar los detalles del platillo.

### Platillo Pollo
![Platillo Pollo](./img/readme_Interfaces/platillo_pollo.png)
Vista de un platillo con pollo registrado en la aplicación, con la opción de agregar más detalles.

### Platillo Vegetales
![Platillo Vegetales](./img/readme_Interfaces/platillo_vegetales.png)
Pantalla donde se visualiza un platillo con vegetales, también editable por el usuario.


### Interfaz Agregar Categorías
![Interfaz Agregar Categorías](./img/readme_Interfaces/agregar_categorias.png)
Pantalla donde el usuario puede agregar nuevas categorías para organizar mejor los platillos y alimentos.

### Interfaz Perfil
![Interfaz Perfil](./img/readme_Interfaces/perfil.png)
En esta sección los usuarios pueden ver y editar su perfil, incluyendo información personal y preferencias.


### Interfaz Configuración
![Interfaz Configuración](./img/readme_Interfaces/configuracion.png)
Desde esta pantalla, el usuario puede ajustar diferentes preferencias y configuraciones de la app.

### Interfaz Editar Perfil
![Interfaz Editar Perfil](./img/readme_Interfaces/editar_perfil.png)
Permite a los usuarios modificar los datos de su perfil, como nombre, foto, preferencias, etc.

### Usuario Registrado Estatico:
```
const users = [
  { email: 'giancarlos@gmail.com', password: '123456789' },
  
];
```
