import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8080,
        host: '127.0.0.1',
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@svg': fileURLToPath(new URL('./src/assets/svg', import.meta.url)),
            '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
        },
    },
    assetsInclude: ['**/*.otf'], // Include .otf files as assets
    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./index.html', import.meta.url)),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.otf')) {
                        return 'assets/fonts/[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});
