import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/deploy-app/" // Thay bằng tên repository GitHub của bạn
});
