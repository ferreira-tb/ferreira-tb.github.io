import 'manatsu/style';
import { createApp } from 'vue';
import { createManatsu } from 'manatsu';
import App from './App.vue';

const app = createApp(App);
const manatsu = createManatsu();

app.use(manatsu);
app.mount('#app');
