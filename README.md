# vite-plugin-server-headers

A Vite plugin for applying server headers.

## Usage

1. Install plugin.

   ```bash
   pnpm add vite-plugin-server-headers -D
   ```

2. Add it to Vite config file.

   ```ts
   import headers from 'vite-plugin-server-headers'

   export default {
     plugins: [
       headers({
         'Cross-Origin-Opener-Policy': 'same-origin',
         'Cross-Origin-Embedder-Policy': 'require-corp'
       })
     ]
   }
   ```

3. Start developing 🚀.

## License

[MIT License](./LICENSE) © 2022 [dapotatoman](https://github.com/dapotatoman)
