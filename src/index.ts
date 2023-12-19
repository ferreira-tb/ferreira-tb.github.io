import 'manatsu/style';
import './assets/main.scss';
import { createApp } from 'vue';
import { createManatsu } from 'manatsu';
import App from './App.vue';

const app = createApp(App);
const manatsu = createManatsu({
  darkMode: 'auto'
});

app.use(manatsu);
app.mount('#app');
