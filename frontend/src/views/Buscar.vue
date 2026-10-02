<!-- Llama a GET /api/fotografias y pinta la galería de imágenes. -->

<template>
  <div class="py-3">
    <h2 class="mb-3">Buscar locaciones</h2>

    <!-- Categorías (vienen del backend) -->
    <div class="mb-3">
      <div class="form-check form-check-inline" v-for="cat in categorias" :key="cat">
        <input
          class="form-check-input"
          type="checkbox"
          :id="'cat-' + cat"
          :value="cat"
          v-model="seleccionadas"
        />
        <label class="form-check-label" :for="'cat-' + cat">{{ cat }}</label>
      </div>
    </div>

    <!-- AND / OR -->
    <div class="form-check form-switch mb-3">
      <input class="form-check-input" type="checkbox" id="modo" v-model="cualquiera" />
      <label class="form-check-label" for="modo">
        Coincidir con cualquiera (apagado = con todas)
      </label>
    </div>

    <button class="btn btn-primary mb-4" @click="buscar" :disabled="cargando">
      {{ cargando ? 'Buscando...' : 'Buscar' }}
    </button>

    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <p v-else-if="buscado && fotos.length === 0">No hay resultados.</p>

    <!-- Galería -->
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-3" v-for="foto in fotos" :key="foto._id">
        <div class="card h-100">
          <img
            :src="foto.url"
            :alt="foto.titulo"
            class="card-img-top"
            style="height: 180px; object-fit: cover"
          />
          <div class="card-body">
            <h6 class="card-title">{{ foto.titulo }}</h6>
            <span class="badge bg-secondary me-1" v-for="c in foto.categorias" :key="c">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'BuscarView',
  data() {
    return {
      categorias: [],
      seleccionadas: [],
      cualquiera: false,
      fotos: [],
      cargando: false,
      buscado: false,
      error: '',
    };
  },
  async created() {
    try {
      const { data } = await api.get('/fotografias/filtros');
      this.categorias = data.CATEGORIAS;
    } catch (e) {
      this.error = 'No se pudieron cargar los filtros.';
    }
    this.buscar();
  },
  methods: {
    async buscar() {
      this.cargando = true;
      this.error = '';
      try {
        const params = {};
        if (this.seleccionadas.length) params.categorias = this.seleccionadas.join(',');
        if (this.cualquiera) params.modo = 'or';

        const { data } = await api.get('/fotografias', { params });
        this.fotos = data;
        this.buscado = true;
      } catch (e) {
        this.error = 'Error al buscar fotografías.';
      } finally {
        this.cargando = false;
      }
    },
  },
};
</script>