<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Locaciones</router-link>
      <div class="navbar-nav ms-auto flex-row align-items-center">
        <router-link class="nav-link" to="/wiki">Wiki</router-link>
        <template v-if="estaAutenticado">
          <router-link class="nav-link" to="/protegido">Ruta protegida</router-link>
          <button class="btn btn-outline-light btn-sm ms-2" @click="cerrarSesion">Cerrar sesion</button>
        </template>
        <template v-else>
          <router-link class="nav-link" to="/login">Iniciar sesion</router-link>
          <router-link class="btn btn-outline-light btn-sm ms-2" to="/registro">Registrarse</router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      estaAutenticado: !!localStorage.getItem('token'),
    };
  },
  watch: {
    $route() {
      this.estaAutenticado = !!localStorage.getItem('token');
    },
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.estaAutenticado = false;
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
