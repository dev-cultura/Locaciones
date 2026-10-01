// Script de prueba: carga 20 fotos de ejemplo (URLs de picsum.photos) en Mongo para probar la búsqueda. Se ejecuta con: node scripts/seed.js
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');
const Fotografia = require('../models/Fotografia');

const fotos = [
  {
    titulo: 'Hacienda con casco histórico (prueba)',
    url: 'https://picsum.photos/id/1011/600/400',
    categorias: ['hacienda-rancho', 'zona-rural', 'arquitectura-historica'],
    ambiente: 'ambos', acceso: 'terraceria',
    estacionamiento: true, electricidad: true, agua: false,
    estiloArquitectonico: 'porfiriano', estadoConservacion: 'regular',
    aislamiento: true, permisos: 'municipal',
    serviciosCercanos: ['hotel', 'restaurante']
  },
  {
    titulo: 'Plaza y templo del pueblo (prueba)',
    url: 'https://picsum.photos/id/1015/600/400',
    categorias: ['pueblo', 'iglesia-templo', 'parque-plaza', 'centro-historico'],
    ambiente: 'exterior', acceso: 'pavimentado',
    estacionamiento: true, electricidad: true, agua: true,
    estiloArquitectonico: 'colonial', estadoConservacion: 'bueno',
    aislamiento: false, permisos: 'estatal',
    serviciosCercanos: ['restaurante', 'hospital']
  },
  {
    titulo: 'Dunas del desierto (prueba)',
    url: 'https://picsum.photos/id/10/600/400',
    categorias: ['desierto'],
    ambiente: 'exterior', acceso: 'dificil',
    aislamiento: true, permisos: 'no-requiere'
  },
  {
    titulo: 'Bosque de pinos (prueba)',
    url: 'https://picsum.photos/id/11/600/400',
    categorias: ['bosque', 'zona-rural'],
    ambiente: 'exterior', acceso: 'terraceria',
    agua: true, aislamiento: true, permisos: 'no-requiere'
  },
  {
    titulo: 'Sierra con neblina (prueba)',
    url: 'https://picsum.photos/id/12/600/400',
    categorias: ['montana-sierra', 'bosque'],
    ambiente: 'exterior', acceso: 'dificil',
    aislamiento: true, permisos: 'estatal'
  },
  {
    titulo: 'Barranca profunda (prueba)',
    url: 'https://picsum.photos/id/13/600/400',
    categorias: ['canon-barranca', 'montana-sierra'],
    ambiente: 'exterior', acceso: 'dificil',
    aislamiento: true, permisos: 'federal'
  },
  {
    titulo: 'Presa y orilla del lago (prueba)',
    url: 'https://picsum.photos/id/14/600/400',
    categorias: ['rio-lago-presa', 'zona-rural'],
    ambiente: 'exterior', acceso: 'terraceria',
    estacionamiento: true, agua: true, permisos: 'federal',
    serviciosCercanos: ['restaurante']
  },
  {
    titulo: 'Avenida del centro de la ciudad (prueba)',
    url: 'https://picsum.photos/id/15/600/400',
    categorias: ['zona-urbana', 'edificio-oficina'],
    ambiente: 'ambos', acceso: 'pavimentado',
    estacionamiento: true, electricidad: true, agua: true,
    estiloArquitectonico: 'moderno', estadoConservacion: 'excelente',
    permisos: 'municipal',
    serviciosCercanos: ['hotel', 'restaurante', 'hospital']
  },
  {
    titulo: 'Casa moderna con jardín (prueba)',
    url: 'https://picsum.photos/id/16/600/400',
    categorias: ['casa-residencia', 'zona-urbana'],
    ambiente: 'interior', acceso: 'pavimentado',
    estacionamiento: true, electricidad: true, agua: true,
    estiloArquitectonico: 'moderno', estadoConservacion: 'bueno',
    permisos: 'no-requiere',
    serviciosCercanos: ['restaurante']
  },
  {
    titulo: 'Casona colonial del centro (prueba)',
    url: 'https://picsum.photos/id/17/600/400',
    categorias: ['casa-residencia', 'centro-historico', 'arquitectura-historica'],
    ambiente: 'interior', acceso: 'pavimentado',
    electricidad: true, agua: true,
    estiloArquitectonico: 'colonial', estadoConservacion: 'regular',
    permisos: 'municipal',
    serviciosCercanos: ['hotel', 'restaurante']
  },
  {
    titulo: 'Oficina corporativa (prueba)',
    url: 'https://picsum.photos/id/18/600/400',
    categorias: ['edificio-oficina'],
    ambiente: 'interior', acceso: 'pavimentado',
    estacionamiento: true, electricidad: true, agua: true,
    estiloArquitectonico: 'moderno', estadoConservacion: 'excelente',
    permisos: 'no-requiere',
    serviciosCercanos: ['restaurante', 'hospital']
  },
  {
    titulo: 'Fábrica abandonada (prueba)',
    url: 'https://picsum.photos/id/19/600/400',
    categorias: ['industrial-fabrica', 'zona-urbana'],
    ambiente: 'ambos', acceso: 'pavimentado',
    estacionamiento: true,
    estiloArquitectonico: 'industrial', estadoConservacion: 'deteriorado',
    permisos: 'municipal'
  },
  {
    titulo: 'Camino rural de terracería (prueba)',
    url: 'https://picsum.photos/id/20/600/400',
    categorias: ['carretera-camino', 'zona-rural'],
    ambiente: 'exterior', acceso: 'terraceria',
    aislamiento: true, permisos: 'no-requiere'
  },
  {
    titulo: 'Carretera en el desierto (prueba)',
    url: 'https://picsum.photos/id/22/600/400',
    categorias: ['carretera-camino', 'desierto'],
    ambiente: 'exterior', acceso: 'pavimentado',
    aislamiento: true, permisos: 'estatal'
  },
  {
    titulo: 'Puente sobre el río (prueba)',
    url: 'https://picsum.photos/id/24/600/400',
    categorias: ['puente-tunel', 'rio-lago-presa'],
    ambiente: 'exterior', acceso: 'pavimentado',
    estiloArquitectonico: 'otro', estadoConservacion: 'regular',
    agua: true, permisos: 'estatal'
  },
  {
    titulo: 'Estación de tren antigua (prueba)',
    url: 'https://picsum.photos/id/25/600/400',
    categorias: ['vias-estacion-tren', 'arquitectura-historica'],
    ambiente: 'ambos', acceso: 'terraceria',
    estiloArquitectonico: 'porfiriano', estadoConservacion: 'deteriorado',
    permisos: 'federal'
  },
  {
    titulo: 'Boca de mina abandonada (prueba)',
    url: 'https://picsum.photos/id/26/600/400',
    categorias: ['mina-cueva', 'montana-sierra'],
    ambiente: 'interior', acceso: 'dificil',
    estadoConservacion: 'ruina', aislamiento: true, permisos: 'estatal'
  },
  {
    titulo: 'Túnel de carretera (prueba)',
    url: 'https://picsum.photos/id/27/600/400',
    categorias: ['puente-tunel', 'carretera-camino'],
    ambiente: 'exterior', acceso: 'pavimentado',
    electricidad: true, estadoConservacion: 'bueno', permisos: 'estatal'
  },
  {
    titulo: 'Templo en ruinas (prueba)',
    url: 'https://picsum.photos/id/28/600/400',
    categorias: ['iglesia-templo', 'pueblo', 'arquitectura-historica'],
    ambiente: 'exterior', acceso: 'terraceria',
    estiloArquitectonico: 'colonial', estadoConservacion: 'ruina',
    permisos: 'estatal'
  },
  {
    titulo: 'Hacienda restaurada como hotel (prueba)',
    url: 'https://picsum.photos/id/29/600/400',
    categorias: ['hacienda-rancho', 'casa-residencia', 'arquitectura-historica'],
    ambiente: 'ambos', acceso: 'terraceria',
    estacionamiento: true, electricidad: true, agua: true,
    estiloArquitectonico: 'porfiriano', estadoConservacion: 'excelente',
    permisos: 'municipal',
    serviciosCercanos: ['hotel', 'restaurante']
  }
].map(f => ({ ...f, fuente: 'picsum' })); // marca todas como de prueba, para poder borrarlas después

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base:', mongoose.connection.name, '| host:', mongoose.connection.host);

    const borradas = await Fotografia.deleteMany({ fuente: 'picsum' });
    console.log(`Borradas ${borradas.deletedCount} fotos de prueba anteriores`);

    await Fotografia.insertMany(fotos); // valida cada foto contra el modelo (enum, etc.)
    console.log(`Insertadas ${fotos.length} fotos de prueba`);

    const total = await Fotografia.countDocuments();
    console.log(`Total en la colección fotografias: ${total}`);
  } catch (err) {
    console.error('Error en el seed:', err.message);
  } finally {
    await mongoose.disconnect();
  }
})();