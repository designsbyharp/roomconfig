import {resolve} from 'path';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default {
  root,
    css: {
      preprocessorOptions: {
        scss: { 
           // example : additionalData: `@import "./src/design/styles/variables";`
           // dont need include file extend .scss
           additionalData: `@import "./styles/abstracts/_variables";`
       },
      },
    },
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, 'index.html'),
          presetroom: resolve(root, 'presetroom', 'index.html')
        }
      }
    }
  };