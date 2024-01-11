import 'manatsu/style';
import './assets/style.css';
import { createApp } from 'vue';
import { createManatsu } from 'manatsu';
import App from './App.vue';
import { router } from './router';

const app = createApp(App);
const manatsu = createManatsu({ darkMode: true });

app.use(router);
app.use(manatsu);

app.mount('#app');
