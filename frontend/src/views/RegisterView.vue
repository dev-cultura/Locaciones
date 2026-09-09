<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h2 class="mb-3">Registro</h2>
      <form @submit.prevent="enviarRegistro">
        <div class="mb-3">
          <label class="form-label" for="nombre">Nombre</label>
          <input id="nombre" v-model="nombre" type="text" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="email">Email</label>
          <input id="email" v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input id="password" v-model="password" type="password" class="form-control" required />
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <button type="submit" class="btn btn-primary" :disabled="cargando">Registrarse</button>
      </form>
      <p class="mt-3">
        Ya tienes cuenta <router-link to="/login">Inicia sesion</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'RegisterView',
  data() {
    return {
      nombre: '',
      email: '',
      password: '',
      error: '',
      cargando: false,
    };
  },
  methods: {
    async enviarRegistro() {
      this.error = '';
      this.cargando = true;
      try {
        const { data } = await api.post('/auth/register', {
          nombre: this.nombre,
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        this.$router.push({ name: 'protegido' });
      } catch (error) {
        this.error = error.response?.data?.error || 'Error al registrarse';
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>
