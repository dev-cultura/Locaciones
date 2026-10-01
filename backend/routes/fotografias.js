// fotografias: busca en Mongo las fotos que tengan todas las tags indicadas y devuelve la lista.

const express = require('express');
const Fotografia = require('../models/Fotografia');
const F = require('../constants/filtros');
const router = express.Router();

const aLista = (valor) =>
  (valor || '').split(',').map(t => t.trim().toLowerCase()).filter(Boolean);

// GET /api/fotografias/filtros  -> devuelve las listas para que Vue arme los checkboxes
router.get('/filtros', (req, res) => res.json(F));

// GET /api/fotografias?categorias=pueblo,iglesia-templo&ambiente=exterior&estacionamiento=true
router.get('/', async (req, res) => {
  try {
    const q = req.query;
    const filtro = {};

    // Principales: AND por defecto, OR si mandan modo=or
    const cats = aLista(q.categorias);
    if (cats.length) filtro.categorias = { [q.modo === 'or' ? '$in' : '$all']: cats };

    // Interior/exterior: si piden uno, también sirven las que son "ambos"
    if (q.ambiente) filtro.ambiente = { $in: [q.ambiente.toLowerCase(), 'ambos'] };

    // Secundarios de valor único
    for (const campo of ['acceso', 'estiloArquitectonico', 'estadoConservacion', 'permisos']) {
      if (q[campo]) filtro[campo] = q[campo].toLowerCase();
    }

    // Secundarios sí/no: solo filtran cuando piden "true" (requiero esto)
    for (const campo of ['estacionamiento', 'electricidad', 'agua', 'aislamiento']) {
      if (q[campo] === 'true') filtro[campo] = true;
    }

    // Servicios cercanos: debe tener todos los pedidos
    const servicios = aLista(q.servicios);
    if (servicios.length) filtro.serviciosCercanos = { $all: servicios };

    const fotos = await Fotografia.find(filtro).limit(50);
    res.json(fotos);
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al buscar fotografías' });
  }
});

module.exports = router;