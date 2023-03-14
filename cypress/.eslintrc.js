// Create an eslint config file for cypress
module.exports = {
  env: {
    mocha: true,
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
};
