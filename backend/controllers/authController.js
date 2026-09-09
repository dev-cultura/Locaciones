const { registrarUsuario, autenticarUsuario } = require('../services/authService');
const generateToken = require('../utils/generateToken');

async function register(req, res, next) {
  try {
    const { nombre, email, password } = req.body;
    const usuario = await registrarUsuario({ nombre, email, password });
    const token = generateToken(usuario);
    res.status(201).json({
      token,
      usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol },
    });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const usuario = await autenticarUsuario({ email, password });
    const token = generateToken(usuario);
    res.json({
      token,
      usuario: { id: usuario._id, nombre: usuario.nombre, email: usuario.email, rol: usuario.rol },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };
