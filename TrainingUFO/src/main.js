import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes } from "./router.js";
import Tools from '@/views/Tools.vue';

export const createApp = ViteSSG(App, { routes });