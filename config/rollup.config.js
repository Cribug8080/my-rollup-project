import json from 'rollup-plugin-json';
// import { version } from '../package.json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
    banner: '/* my-library version  */',
    footer: '/* follow me on ** */',
    // intro: 'var ENVIRONMENT = "production-intro";',
    // outro: 'var ENVIRONMENT = "production-outro";'
  },
  plugins: [json()],
}