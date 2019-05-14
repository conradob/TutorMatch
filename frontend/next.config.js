const webpack = require('webpack');

const currentEnv = process.env.ENV_NAME || 'local';

if (currentEnv === 'local') {
  require('dotenv').config({ path: 'variables.env' });
}

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  },
};
