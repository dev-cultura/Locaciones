const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/ejemplo', verifyToken, (req, res) => {
  res.json({
    mensaje: 'Ruta protegida de ejemplo',
    usuario: req.usuario,
  });
});

module.exports = router;
