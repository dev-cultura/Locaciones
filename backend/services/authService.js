const Usuario = require('../models/Usuario');

async function registrarUsuario({ nombre, email, password }) {
  const existente = await Usuario.findOne({ email });
  if (existente) {
    const error = new Error('El email ya esta registrado');
    error.status = 400;
    throw error;
  }

  const usuario = await Usuario.create({ nombre, email, password });
  return usuario;
}

async function autenticarUsuario({ email, password }) {
  const usuario = await Usuario.findOne({ email });
  if (!usuario) {
    const error = new Error('Credenciales invalidas');
    error.status = 401;
    throw error;
  }

  const passwordValido = await usuario.compararPassword(password);
  if (!passwordValido) {
    const error = new Error('Credenciales invalidas');
    error.status = 401;
    throw error;
  }

  return usuario;
}

module.exports = { registrarUsuario, autenticarUsuario };
