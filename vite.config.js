import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-news-app/', // e.g., '/news-app/' if your repo is github.com/user/news-app
})
