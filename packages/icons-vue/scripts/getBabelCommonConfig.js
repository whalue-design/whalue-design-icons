'use strict';

module.exports = function (modules) {
  const plugins = [
    require.resolve('babel-plugin-transform-vue-jsx'),
    require.resolve('babel-plugin-transform-es3-member-expression-literals'),
    require.resolve('babel-plugin-transform-es3-property-literals'),
    require.resolve('babel-plugin-transform-object-assign'),
    [
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
      },
    ],
  ];
  return {
    presets: [
      [
        require.resolve(`babel-preset-env`),
        {
          modules,
          exclude: ['transform-es2015-typeof-symbol'],
        },
      ],
    ].concat(
      ['stage-0'].map((name) => {
        return require(`babel-preset-${name}`);
      }),
    ),
    plugins,
  };
};
