import path from 'path';
import { defineConfig } from 'vite';
import { Configs } from './src/configs.js';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: Configs.router.baseUrl,
	server: {
		open: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@shell': path.resolve(__dirname, 'src/shell'),
		}
	}
});
