const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');
require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
  require('@cypress/code-coverage/task')(on, config);

  return config;
};
