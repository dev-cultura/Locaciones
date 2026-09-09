<template>
  <div>
    <NavBar />
    <main class="container mt-4">
      <slot />
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  name: 'DefaultLayout',
  components: { NavBar },
};
</script>
