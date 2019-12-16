import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import multiInput from 'rollup-plugin-multi-input';


const globals = {
  react: 'React',
  imask: 'IMask',
  'prop-types': 'PropTypes',
};

export default [
  {
    input: 'src/index.js',
    external: Object.keys(globals),
    output: {
      name: 'ReactIMask',
      file: 'dist/react-imask.js',
      globals,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      eslint({configFile: '../../.eslintrc'}),
      babel({
        rootMode: 'upward',
      }),
    ],
  },
  {
    input: ['src/**/*.js'],
    output: {
      format: 'esm',
      dir: 'esm',
    },
    plugins: [
      multiInput(),
      babel({
        rootMode: 'upward',
      }),
    ]
  }
]
