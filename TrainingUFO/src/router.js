import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Tools from '@/views/Tools.vue';

const routes = [
    { path: '/', name: 'tools', component: Tools }
];

export default createRouter({
    history: createWebHistory(),
    routes
});