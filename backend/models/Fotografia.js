// Fotografia: Aqui se define cómo se guarda cada foto (título, tags, url/dropboxFileId) en la colección "fotografias".

const mongoose = require('mongoose');
const F = require('../constants/filtros');

const fotografiaSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  url: { type: String, default: null },
  dropboxFileId: { type: String, default: null },
  fuente: { type: String, default: 'manual' },

  // Filtros principales (varios por foto)
  categorias: {
    type: [{ type: String, enum: F.CATEGORIAS, lowercase: true, trim: true }],
    default: [],
    index: true
  },

  // Filtros secundarios
  ambiente: { type: String, enum: F.AMBIENTES },
  acceso: { type: String, enum: F.ACCESOS },
  estacionamiento: { type: Boolean, default: false },
  electricidad: { type: Boolean, default: false },
  agua: { type: Boolean, default: false },
  estiloArquitectonico: { type: String, enum: F.ESTILOS },
  estadoConservacion: { type: String, enum: F.ESTADOS_CONSERVACION },
  aislamiento: { type: Boolean, default: false },
  permisos: { type: String, enum: F.PERMISOS },
  serviciosCercanos: { type: [String], default: [] } // ejemplos: hotel, restaurante, hospital
}, { timestamps: true });

module.exports = mongoose.model('Fotografia', fotografiaSchema, 'fotografias');