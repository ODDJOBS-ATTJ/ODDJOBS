import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace('/^\server/', '')
        //no need to add rewrite
        //path.rewrite is needed if the request to the server contains a starting string
        //that starting string is then converted into another string for request
        //so if it is /api/users
        //then it gets taken away and then express reads it as a /users request
      }
    }
  }
})
