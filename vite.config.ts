import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dev from 'vite-plugin-vue-devtools';

export default defineConfig({
  plugins: [vue(), dev()]
});
