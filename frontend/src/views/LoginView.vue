<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h2 class="mb-3">Iniciar sesion</h2>
      <form @submit.prevent="enviarLogin">
        <div class="mb-3">
          <label class="form-label" for="email">Email</label>
          <input id="email" v-model="email" type="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Password</label>
          <input id="password" v-model="password" type="password" class="form-control" required />
        </div>
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <button type="submit" class="btn btn-primary" :disabled="cargando">Entrar</button>
      </form>
      <p class="mt-3">
        No tienes cuenta <router-link to="/registro">Registrate</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      cargando: false,
    };
  },
  methods: {
    async enviarLogin() {
      this.error = '';
      this.cargando = true;
      try {
        const { data } = await api.post('/auth/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
        this.$router.push({ name: 'protegido' });
      } catch (error) {
        this.error = error.response?.data?.error || 'Error al iniciar sesion';
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>
