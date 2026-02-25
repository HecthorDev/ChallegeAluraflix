import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    vite: {
        resolve: {
            alias: {
                'sweetalert2': 'sweetalert2/dist/sweetalert2.all.js',
            }
        },
        ssr: {
            noExternal: ['react-icons', 'react-multi-carousel', 'sweetalert2', 'framer-motion'],
        },
        optimizeDeps: {
            include: ['sweetalert2', 'react-multi-carousel']
        }
    },
});
