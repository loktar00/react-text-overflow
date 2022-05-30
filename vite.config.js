import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/TextOverflow.tsx'),
            name: 'TextOverflow',
            fileName: 'TextOverflow'
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React'
                }
            }
        }
    }
});
