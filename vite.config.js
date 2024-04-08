import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: '/next-app-shell/',
	publicDir: 'static',
	server: {
		open: true
	}
});
