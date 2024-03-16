// data.js
const users = [
  { email: 'luisquispe@gmail.com', password: '123456789' },
  { email: 'bao@example.com', password: '123456' },
  { email: 'bao', password: '123' },
  // ... otros usuarios
];

const categories = [
  {
    id: 1,
    name: 'Pollo',
    meals: [
      { 
        id: 1, 
        name: 'Pollo al horno', 
        ingredients: ['pollo', 'sal', 'pimienta'], 
        image: require('../img/pollo_horno.jpg') 
      },
      { 
        id: 2, 
        name: 'Pollo a la parrilla', 
        ingredients: ['pollo', 'limón', 'aceite'], 
        image: require('../img/pollo_parrilla.jpg') 
      },
      { 
        id: 3, 
        name: 'Pollo con champiñones', 
        ingredients: ['pollo', 'champiñones', 'crema', 'ajo'], 
        image: require('../img/Pollo_champinones.jpg') 
      },
      { 
        id: 4, 
        name: 'Pollo al curry', 
        ingredients: ['pollo', 'curry', 'cebolla', 'tomate'], 
        image: require('../img/pollo_curry.jpg') 
      },
      { 
        id: 5, 
        name: 'Pollo a la naranja', 
        ingredients: ['pollo', 'naranja', 'miel', 'jengibre'], 
        image: require('../img/pollo_naranja.jpg') 
      },
    ],
  },
  {
    id: 2,
    name: 'Carne',
    meals: [
      { 
        id: 1, 
        name: 'Asado de carne', 
        ingredients: ['carne', 'sal', 'ajo', 'cebolla'], 
        image: require('../img/carne_asado.jpg') 
      },
      { 
        id: 2, 
        name: 'Bistec a la plancha', 
        ingredients: ['bistec', 'sal', 'pimienta'], 
        image: require('../img/carne_bistec.jpg') 
      },
      { 
        id: 3, 
        name: 'Lomo saltado', 
        ingredients: ['lomo', 'cebolla', 'tomate', 'papas fritas'], 
        image: require('../img/carne_lomosaltado.jpg') 
      },
      { 
        id: 4, 
        name: 'Filete de res con salsa de champiñones', 
        ingredients: ['filete de res', 'champiñones', 'crema', 'vino tinto'], 
        image: require('../img/carne_filetesalsa.jpg') 
      },
      { 
        id: 5, 
        name: 'Chuletas de cerdo al horno', 
        ingredients: ['chuletas de cerdo', 'mostaza', 'miel', 'pimienta'], 
        image: require('../img/carne_chuletacerdo.jpg') 
      },
    ],
  },
  {
    id: 3,
    name: 'Desayuno',
    meals: [
      { 
        id: 1, 
        name: 'Huevos revueltos con espinacas', 
        ingredients: ['huevos', 'espinacas', 'sal', 'pimienta'], 
        image: require('../img/desayuno_huevoespinacas.jpg') 
      },
      { 
        id: 2, 
        name: 'Avena con frutas frescas', 
        ingredients: ['avena', 'leche', 'fresas', 'plátano', 'arándanos'], 
        image: require('../img/desayuno_avenafrutas.jpg') 
      },
      // Otros platillos para el desayuno...
    ],
  },
  {
    id: 4,
    name: 'Almuerzo',
    meals: [
      { 
        id: 1, 
        name: 'Ensalada de quinoa y aguacate', 
        ingredients: ['quinoa', 'aguacate', 'tomate', 'pepino', 'cebolla'], 
        image: require('../img/almuerzo_quinoaaguacate.jpg') 
      },
      { 
        id: 2, 
        name: 'Sándwich de pavo y aguacate', 
        ingredients: ['pan integral', 'pavo', 'aguacate', 'lechuga', 'tomate'], 
        image: require('../img/almuerzo_sandwich.jpg') 
      },
      // Otros platillos para el almuerzo...
    ],
  },
  {
    id: 5,
    name: 'Vegetales',
    meals: [
      { 
        id: 1, 
        name: 'Ensalada César', 
        ingredients: ['lechuga romana', 'crutones', 'queso parmesano', 'salsa César'], 
        image: require('../img/vegetales_ensaladacesar.jpg') 
      },
      { 
        id: 2, 
        name: 'Ensalada Caprese', 
        ingredients: ['tomate', 'mozzarella', 'albahaca', 'aceite de oliva', 'vinagre balsámico'], 
        image: require('../img/vegetales_ensaladacaprese.jpg') 
      },
      { 
        id: 3, 
        name: 'Verduras salteadas', 
        ingredients: ['brócoli', 'zanahorias', 'calabacín', 'cebolla', 'ajo'], 
        image: require('../img/vegetales_verdurassalteadas.jpg') 
      },
      { 
        id: 4, 
        name: 'Espárragos al horno', 
        ingredients: ['espárragos', 'aceite de oliva', 'sal', 'pimienta', 'queso parmesano'], 
        image: require('../img/vegetales_esparrago.jpg') 
      },
      { 
        id: 5, 
        name: 'Zanahorias glaseadas', 
        ingredients: ['zanahorias', 'mantequilla', 'azúcar', 'sal', 'pimienta'], 
        image: require('../img/vegetales_zanahoriasglaseadas.jpg') 
      },
    ],
  },
  {
    id: 6,
    name: 'Recetas bajas en carbohidratos',
    meals: [
      { 
        id: 1, 
        name: 'Salmón a la parrilla con espárragos', 
        ingredients: ['salmón', 'espárragos', 'aceite de oliva', 'sal', 'pimienta'], 
        image: require('../img/recetas_salmonesparragos.jpg') 
      },
      { 
        id: 2, 
        name: 'Ensalada de pollo y aguacate', 
        ingredients: ['pollo', 'aguacate', 'lechuga', 'tomate', 'vinagreta'], 
        image: require('../img/recetas_ensaladapolloaguacate.jpg') 
      },
      // Otros platillos bajos en carbohidratos...
    ],
  },
  {
    id: 7,
    name: 'Snacks saludables',
    meals: [
      { 
        id: 1, 
        name: 'Batidos verdes', 
        ingredients: ['espinacas', 'plátano', 'leche de almendras', 'esencia de vainilla'], 
        image: require('../img/snacks_batidosverdes.jpg') 
      },
      { 
        id: 2, 
        name: 'Nueces mixtas', 
        ingredients: ['nueces', 'almendras', 'anacardos'], 
        image: require('../img/snacks_nuecesmixtas.jpg') 
      },
      // Otros snacks saludables...
    ],
  },
  {
    id: 8,
    name: 'Platillos con granos integrales',
    meals: [
      { 
        id: 1, 
        name: 'Ensalada de quinoa con vegetales', 
        ingredients: ['quinoa', 'tomate', 'pepino', 'pimiento', 'cebolla', 'limón'], 
        image: require('../img/platillos_ensaladaquinoa.jpg') 
      },
      { 
        id: 2, 
        name: 'Arroz integral con pollo al curry', 
        ingredients: ['arroz integral', 'pollo', 'curry', 'cebolla', 'pimiento'], 
        image: require('../img/platillos_arrozcurry.jpg') 
      },
      // Otros platillos con granos integrales...
    ],
  },
  {
    id: 9,
    name: 'Bebidas saludables',
    meals: [
      { 
        id: 1, 
        name: 'Agua con limón', 
        ingredients: ['agua', 'limón'], 
        image: require('../img/bebidas_agualimon.jpg') 
      },
      { 
        id: 2, 
        name: 'Té verde sin azúcar', 
        ingredients: ['té verde'], 
        image: require('../img/bebidas_teverde.jpg') 
      },
      // Otras bebidas saludables...
    ],
  },
  {
    id: 10,
    name: 'Cena',
    meals: [
      { 
        id: 1, 
        name: 'Pescado al horno con verduras asadas', 
        ingredients: ['filete de pescado', 'pimiento', 'calabacín', 'cebolla', 'aceite de oliva'], 
        image: require('../img/cena_pescado.jpg') 
      },
      { 
        id: 2, 
        name: 'Ensalada de salmón ahumado', 
        ingredients: ['salmón ahumado', 'espinacas', 'aguacate', 'tomate', 'vinagreta'], 
        image: require('../img/cena_ensaladaahumado.jpg') 
      },
      // Otros platillos para la cena...
    ],
  },
  // Puedes agregar más categorías de platillos aquí
];
export { users, categories };
