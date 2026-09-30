// Fotografia: Aqui se define cómo se guarda cada foto (título, tags, url/dropboxFileId) en la colección "fotografias".

const mongoose = require('mongoose');

const fotografiaSchema = new mongoose.Schema({
  titulo: { type: String, required: true, trim: true },
  tags: { type: [String], default: [], index: true },
  url: { type: String, default: null },
  dropboxFileId: { type: String, default: null },
  fuente: { type: String, default: 'manual' }
}, { timestamps: true });

// Guardar siempre las tags en minúsculas y sin espacios sobrantes
fotografiaSchema.pre('save', function (next) {
  this.tags = this.tags.map(t => t.trim().toLowerCase());
  next();
});

module.exports = mongoose.model('Fotografia', fotografiaSchema, 'fotografias');