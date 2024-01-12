import 'manatsu/style';
import '@/assets/style.css';
import App from '@/App.vue';
import { createApp } from 'vue';
import { router } from '@/router';
import { createManatsu } from 'manatsu';

const app = createApp(App);
const manatsu = createManatsu({ darkMode: false });

app.use(router);
app.use(manatsu);

app.mount('#app');
