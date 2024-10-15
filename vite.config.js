import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		postcss({
			plugins: [tailwindcss(), autoprefixer()],
		})
	],
	base: '/next-app-shell/',
	server: {
		open: true
	}
});
