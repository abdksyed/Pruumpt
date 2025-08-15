import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure for Single Page Application (SPA) routing
  // This is like configuring Apache/Nginx to handle React Router
  server: {
    // Development server settings
    port: 5173,
    host: true, // Allow external connections (useful for testing)
  },
  // Production build settings
  build: {
    // Generate source maps for debugging production issues
    sourcemap: true,
    // Optimize for modern browsers (smaller bundle size)
    target: 'es2020',
    // Split vendor libraries for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  // Preview settings (for production build testing)
  preview: {
    port: 4173,
    host: true,
  },
})