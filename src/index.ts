import type { Plugin } from 'vite'
import type { Headers } from './headers'

export default (headers: Partial<Headers>): Plugin => ({
  name: 'vite-plugin-server-headers',
  apply: 'serve',

  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      Object.entries(headers).forEach(([key, value]) => {
        if (key && value) res.setHeader(key, value)
      })

      next()
    })
  }
})
