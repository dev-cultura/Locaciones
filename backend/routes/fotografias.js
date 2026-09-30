// fotografias: busca en Mongo las fotos que tengan todas las tags indicadas y devuelve la lista.

const express = require('express');
const Fotografia = require('../models/Fotografia');
const router = express.Router();

// GET /api/fotografias?tags de ejemplo = colonial, noche
router.get('/', async (req, res) => {
  try {
    const tags = (req.query.tags || '')
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(Boolean);

    // Sin tags: devuelve todo. Con tags: AND ($all). Para OR usa $in.
    const filtro = tags.length ? { tags: { $all: tags } } : {};

    const fotos = await Fotografia.find(filtro).limit(50);
    res.json(fotos);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al buscar fotografías' });
  }
});

module.exports = router;