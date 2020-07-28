module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 1%, not dead',
        corejs: '3',
        useBuiltIns: 'usage',
        modules: false,
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          imgs: './public/images',
        },
      },
    ],
  ],
};
