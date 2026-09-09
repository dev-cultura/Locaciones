<template>
  <div>
    <h2>Ruta protegida de ejemplo</h2>
    <p v-if="cargando">Cargando...</p>
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
    <pre v-else class="bg-light p-3">{{ respuesta }}</pre>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'ProtectedView',
  data() {
    return {
      respuesta: null,
      error: '',
      cargando: true,
    };
  },
  async created() {
    try {
      const { data } = await api.get('/protected/ejemplo');
      this.respuesta = JSON.stringify(data, null, 2);
    } catch (error) {
      this.error = error.response?.data?.error || 'Error al cargar la ruta protegida';
    } finally {
      this.cargando = false;
    }
  },
};
</script>
