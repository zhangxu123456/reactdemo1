import { defineConfig, splitVendorChunkPlugin, } from 'vite'
import react from '@vitejs/plugin-react'
import {extname,resolve} from "path"
import viteEslint from 'vite-plugin-eslint';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

const getOutFilename = (dir:string,ext:string) => `assets/${dir}/[name].[hash].${ext}`;

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    viteEslint(),
    createSvgIconsPlugin({
      iconDirs:[resolve(process.cwd(),'src/assets/icons')],
      symbolId:'icon-[dir]-[name]'
    })
  ],
  envDir: './src/env/',
  resolve:{
    alias:{
      "@":resolve(__dirname,'./src'),
      "app": resolve(process.cwd(),'./src/App'),
      '@pages':resolve(process.cwd(),'./src/App/pages')
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"]
  },
  build:{
    rollupOptions:{
      output:{
        entryFileNames:getOutFilename('js','js'),
        chunkFileNames:getOutFilename('js','js'),
        assetFileNames: chunk => {
          const extMapping = {'.jpg,.png':'images','.css': 'css'}
          const dirs = extMapping[Object.keys(extMapping).find(e => e.includes(extname(chunk.name)))] || 'temp';
          return getOutFilename(dirs,'[ext]')
        }
      }
    }
  },
  server:{
    port: 8081,
    proxy:{
      '/adapter/':{
        target: 'https://areaxxxx.cn',
        changeOrigin:true,
        rewrite: path => path.replace(/^\/adapter/,'')
      }
    },
    hmr:{
      overlay: false
    }
  }
})
