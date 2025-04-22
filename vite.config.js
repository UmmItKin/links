import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.VITE_BASE_URL || '/'
  
  return {
    plugins: [react()],
    base: base,
    server: {
      historyApiFallback: true,
    }
  }
})
