import config from '@tb-dev/eslint-config';

export default config({
  vue: true,
  project: ['tsconfig.json'],
  overrides: {
    vue: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false }
      ]
    },
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }]
  }
});
