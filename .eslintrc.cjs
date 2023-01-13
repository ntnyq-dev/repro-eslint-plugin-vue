/* eslint-env node */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  rules: {
    'vue/require-name-property': ['error'],
    'vue/padding-lines-in-component-definition': ['error', {
      betweenOptions: `always`,
      groupSingleLineProperties: false,
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
