import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),

  ],
  server: {
    port: 3000,
  },
  // 别名
  resolve:{
    //设置路径别名
    alias: {
      '@': path.resolve(__dirname,'./src'),
      },
  },
})
