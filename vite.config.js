import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	root: './',
	build: {
		rollupOptions: {
			input: './index.html',  // Ensure this points to your index.html
		},
	},
	base: '/next-app-shell/',
	server: {
		open: true
	}
});
