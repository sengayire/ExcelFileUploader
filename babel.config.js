module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          helpers: './src/helpers',
          middlewares: './src/middlewares',
          constants: './src/constants',
          config: './src/database/config',
          models: './src/database/models',
          swagger: './src/swagger',
          resources: './src/resources',
          routes: './src/routes',
        },
      },
    ],
  ],
};
