module.exports = {
  apps: [
    {
      env_production: { NODE_ENV: 'production' },
      env: { NODE_ENV: 'development' },
      name: 'my-app',
      script: './src/server.js',
      watch: true,
    },
  ],
};
