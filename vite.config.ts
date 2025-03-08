import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/chat-girls-gateway/", // استخدم اسم المستودع هنا
  plugins: [react()],
});
