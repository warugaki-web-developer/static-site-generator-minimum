/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer')({
      cascade: false,
      grid: 'autoplace',
    }),
  ],
};
