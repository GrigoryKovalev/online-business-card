import * as path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { markdown } from 'svelte-preprocess-markdown';

const API_BASE = process.env.DEV ? 'http://127.0.0.1:3000' : 'https://api.svelte.dev';

const config = {
  kit: {
    adapter: adapter(),
    vite: () => ({
      define: {
        'process.env.API_BASE': JSON.stringify(API_BASE),
      },
    // etc...
    floc: process.env.NODE_ENV === "development",
//       resolve: {
//         alias: {
//           $img: path.resolve('src/images'),
//           $lib: path.resolve('./src/lib'),
//         },
//       },
      server: {
        fs: {
          strict: false,
        },
      },
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    markdown(),
  ],
};

export default config;