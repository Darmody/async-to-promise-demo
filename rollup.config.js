var babel = require('rollup-plugin-babel');

export default {
  input: 'main.ts',
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  plugins: [
    babel({
      babelrc: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: ['@babel/preset-typescript'],
      plugins: ['babel-plugin-transform-async-to-promises']
    })
  ]
};
