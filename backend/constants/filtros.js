// Filtros. el backend, seed y frontend deben usar estos mismos valores.

const CATEGORIAS = [
    'desierto', 'bosque', 'montana-sierra', 'canon-barranca', 'rio-lago-presa',
    'zona-rural', 'pueblo', 'zona-urbana', 'centro-historico', 'casa-residencia',
    'hacienda-rancho', 'edificio-oficina', 'industrial-fabrica', 'carretera-camino',
    'puente-tunel', 'vias-estacion-tren', 'mina-cueva', 'iglesia-templo',
    'parque-plaza', 'arquitectura-historica'
  ];
  
  const AMBIENTES = ['interior', 'exterior', 'ambos'];
  const ACCESOS = ['pavimentado', 'terraceria', 'dificil'];
  const ESTADOS_CONSERVACION = ['excelente', 'bueno', 'regular', 'deteriorado', 'ruina'];
  const ESTILOS = ['colonial', 'porfiriano', 'moderno', 'industrial', 'vernaculo', 'otro'];
  const PERMISOS = ['no-requiere', 'municipal', 'estatal', 'federal'];
  
  module.exports = { CATEGORIAS, AMBIENTES, ACCESOS, ESTADOS_CONSERVACION, ESTILOS, PERMISOS };