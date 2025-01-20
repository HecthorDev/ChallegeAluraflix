import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: 'http://localhost:5173/oracle-next-education/challenge-aluraflix/dist/',
  plugins: [react()],
});