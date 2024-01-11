import config from '@tb-dev/eslint-config';

export default config({
  vue: true,
  project: ['tsconfig.json'],
  overrides: {
    vue: {
      'vue/block-lang': ['error', { script: { lang: 'ts' } }]
    }
  }
});
