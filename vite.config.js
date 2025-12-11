import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-react/',
  server: {
    host: true, // Expose to all network interfaces (0.0.0.0)
    port: 5173, // Enforce port 5173
    strictPort: true, // Fail if port is busy instead of auto-incrementing
  }
})
