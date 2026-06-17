import path from 'node:path';
import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';

export default defineConfig({
  context: import.meta.dirname,
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
});
