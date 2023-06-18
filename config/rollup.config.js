import json from 'rollup-plugin-json';
// import { version } from '../package.json';

export default {
  input: 'src/main.js',
  output: {
    // file: 'dist/bundle.js',
    dir: 'dist',
    format: 'es',
    banner: '/* my-library version  */',
    footer: '/* follow me on ** */',
    manualChunks(id) {
      if (id.includes('codeSplitting')) {
        return 'codeSplitting';
      }
    },
    // intro: 'var ENVIRONMENT = "production-intro";',
    // outro: 'var ENVIRONMENT = "production-outro";'
  },
  plugins: [json()],
  watch: {
    include: 'src/**'
  }
}