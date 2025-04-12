import '@/assets/style.css';
import '@tb-dev/vue/style';
import App from '@/App.vue';
import { createApp } from 'vue';
import { router } from '@/router';

createApp(App).use(router).mount('#app');
