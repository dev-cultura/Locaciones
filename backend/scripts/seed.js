// 10 fotos de ejemplo (URLs "picsum.photos") en Mongo para probar la búsqueda. Se ejecuta con: node scripts/seed.js

require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');
const Fotografia = require('../models/Fotografia');

// Pruebas:
const fotos = [
  { titulo: 'Casa colonial', tags: ['interior', 'colonial', 'dia'], url: 'https://picsum.photos/id/1011/1080/608' },
  { titulo: 'Calle de noche', tags: ['exterior', 'calle', 'noche'], url: 'https://picsum.photos/id/1015/1080/608' },
  { titulo: 'Piscina moderna', tags: ['exterior', 'piscina', 'dia'], url: 'https://picsum.photos/id/1016/1080/608' },
  { titulo: 'Estacionamiento', tags: ['exterior', 'estacionamiento', 'noche'], url: 'https://picsum.photos/id/1018/1080/608' },
  { titulo: 'Sala colonial nocturna', tags: ['interior', 'colonial', 'noche'], url: 'https://picsum.photos/id/1020/1080/608' },
  { titulo: 'Paisaje de montaña', tags: ['exterior', 'paisaje', 'dia'], url: 'https://picsum.photos/id/1036/1080/608' },
  { titulo: 'Estudio de fotografía', tags: ['interior', 'estudio', 'dia'], url: 'https://picsum.photos/id/1040/1080/608' },
  { titulo: 'Patio colonial', tags: ['exterior', 'colonial', 'dia'], url: 'https://picsum.photos/id/1043/1080/608' },
  { titulo: 'Piscina de noche', tags: ['exterior', 'piscina', 'noche'], url: 'https://picsum.photos/id/1047/1080/608' },
  { titulo: 'Calle colonial', tags: ['exterior', 'calle', 'colonial', 'dia'], url: 'https://picsum.photos/id/1050/1080/608' }
].map(f => ({ ...f, fuente: 'picsum' }));

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Fotografia.deleteMany({ fuente: 'picsum' }); // evita duplicados si se corre dos veces
  for (const f of fotos) await new Fotografia(f).save();
  console.log(`Insertadas ${fotos.length} fotos de prueba`);
  await mongoose.disconnect();
})();