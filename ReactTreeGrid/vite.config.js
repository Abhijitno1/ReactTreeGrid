import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.jsx'),
            //name: 'react-tree-grid', //This attribute is not needed when format is set to es, only needed for default format umd
            // the proper extensions will be added
            fileName: 'react-tree-grid',
            formats: ['es']
        }
    }
});
