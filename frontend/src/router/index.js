import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProtectedView from '../views/ProtectedView.vue';
import WikiView from '../views/WikiView.vue';

// importame el nuevo archivo donde vemos las fotos subidas
import Buscar from '../views/Buscar.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/buscar', name: 'buscar', component: Buscar, meta: { requiresAuth: true } }, // nueva ruta de prueba 
  { path: '/registro', name: 'registro', component: RegisterView },
  { path: '/wiki', name: 'wiki', component: WikiView },
  {
    path: '/protegido',
    name: 'protegido',
    component: ProtectedView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
