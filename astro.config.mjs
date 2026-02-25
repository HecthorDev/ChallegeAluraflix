import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

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
            include: ['react-multi-carousel', 'sweetalert2', 'framer-motion']
        }
    }
});
