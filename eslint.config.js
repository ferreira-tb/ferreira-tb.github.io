import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['tsconfig.json'],
  features: {
    vue: true,
    tailwind: false,
  },
  overrides: {
    vue: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false },
      ],
    },
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
  },
});
