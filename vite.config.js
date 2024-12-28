import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: '/next-app-shell/',
	server: {
		open: true
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@shell': path.resolve(__dirname, 'src/shell'),
			'@base-framework/ui/icons': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/icons.es.js'),
			'@base-framework/ui/molecules': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/molecules.es.js'),
			'@base-framework/ui/atoms': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/atoms.es.js'),
			'@base-framework/ui/organisms': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/organisms.es.js'),
			'@base-framework/ui/templates': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/templates.es.js'),
			'@base-framework/ui/pages': path.resolve(__dirname, 'node_modules/@base-framework/ui/dist/pages.es.js'),
		}
	}
});
