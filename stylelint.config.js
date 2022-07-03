module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  rules: {
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
  },
  ignoreFiles: ['**/*.html', '**/*.js', '**/*.md'],
};
