import { createRouter, createWebHistory } from 'vue-router';
import CompressionPanel from '../views/CompressionPanel.vue';

const routes = [
  {
    path: '/',
    name: 'CompressionPanel',
    component: CompressionPanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
