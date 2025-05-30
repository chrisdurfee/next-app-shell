import { Code, H4, P, Pre, Section, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Icons } from "@base-framework/ui/icons";
import { DocPage } from "../../doc-page.js";

/**
 * This will create a code block.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const CodeBlock = Atom((props, children) => (
	Pre(
		{
			...props,
			class: `flex p-4 max-h-[650px] max-w-[1024px] overflow-x-auto
					 rounded-lg border bg-muted whitespace-break-spaces
					 break-all cursor-pointer mt-4 ${props.class}`
		},
		[
			Code(
				{
					class: 'font-mono flex-auto text-sm text-wrap',
					click: () => {
						navigator.clipboard.writeText(children[0].textContent);

						// @ts-ignore
						app.notify({
							title: "Code copied",
							description: "The code has been copied to your clipboard.",
							icon: Icons.clipboard.checked
						});
					}
				},
				children
			)
		]
	)
));

/**
 * GetStartedPage
 *
 * This component creates a comprehensive "Get Started" page for the documentation,
 * detailing how to install, configure, and begin developing with the App Shell project.
 *
 * @returns {DocPage}
 */
export const GetStartedPage = () =>
	DocPage(
		{
			title: 'Get Started',
			description: 'Learn how to install, configure, and begin working with the App Shell project.'
		},
		[
			// 1) About the Project
			Section({ class: 'space-y-4' }, [
				H4({ class: 'text-lg font-bold' }, 'About the Project'),
				P(
					{ class: 'text-muted-foreground' },
					`This project is a Progressive Web App (PWA) framework designed to serve as a
					flexible and scalable starting point for new web applications. Built on
					Vite, Tailwind CSS, and the Base framework, it allows you to quickly
					scaffold a modern, modular application that you can customize to
					meet your specific requirements.`
				)
			]),

			// 2) Prerequisites & Installation
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Prerequisites & Installation'),
				P(
					{ class: 'text-muted-foreground' },
					`Before you begin, make sure you have Node.js (version 16+) and npm or yarn
					installed on your machine.`
				),
				P(
					{ class: 'text-muted-foreground' },
					`To install the necessary dependencies, navigate to your project root folder
					in a terminal and run:`
				),
				CodeBlock(
`npm install
# or
yarn install`
				),
				P(
					{ class: 'text-muted-foreground' },
					`This will download and install all the packages defined in the "dependencies"
					and "devDependencies" fields of your package.json file.`
				)
			]),

			// 3) Project Structure & Package Setup
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Project Structure & Package Setup'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						The <code>package.json</code> file is configured to use <strong>Vite</strong>,
						<strong>Tailwind</strong>, and other libraries for both local development
						and production builds. You should update this file with your project's
						details (name, author, description, etc.) to reflect your specific application.`
					}
				),
				CodeBlock(
`{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "A PWA App Shell project built with Vite and Tailwind",
  "keywords": ["pwa", "vite", "tailwind", "base-framework"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
	"type": "git",
	"url": "https://github.com/your-username/your-repo.git"
  },
  "bugs": {
	"url": "https://github.com/your-username/your-repo/issues"
  },
  "homepage": "https://github.com/your-username/your-repo#readme",
  "devDependencies": {
	"vite": "^4.0.0",
	"tailwindcss": "^3.0.0",
	...
  },
  "dependencies": {
	"@base-framework/ui": "^1.0.0",
	...
  }
}`
				)
			]),

			// 4) Running the App
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Running the App'),
				P(
					{ class: 'text-muted-foreground' },
					`Use the following commands to start the development server or build
					for production:`
				),
				CodeBlock(
`# Start the development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview`
				),
				P(
					{ class: 'text-muted-foreground' },
					`The development server by default is accessible at http://localhost:5173
					(or whichever port Vite dynamically chooses).`
				)
			]),

			// 5) Vite Configuration
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Vite Configuration'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						This project relies on <strong>Vite</strong> for local development
						and bundling for production. You can customize <code>vite.config.js</code>
						to adjust the base path or add/remove plugins. Additionally, the
						configuration includes <em>import aliases</em> for simplifying
						your import statements.`
					}
				),
				CodeBlock(
`import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	base: '/your-app-base/',
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
});`
				),
				P(
					{ class: 'text-muted-foreground' },
					`Example usage of the import alias:`
				),
				CodeBlock(
`/**
 * Example import with alias
 */
import { Div } from "@components/atoms/inputs.js";`
				)
			]),

			// 6) Theme Setup
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Theme Setup'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						This project uses <strong>Tailwind CSS</strong> with support for
						both light and dark themes. You can easily modify the look-and-feel
						by editing a few theme-related files. See the
						<a href="/docs/theme" class="underline">Theme</a> page for a full
						overview of themeable properties and how they are applied.`
					}
				),
				CodeBlock(
`/**
 * /src/css/base.css
 */
@layer base {
  :root {
	--background: 0 0% 100%;
	--foreground: 240 10% 3.9%;
	--card: 0 0% 100%;
	/* ... more variables ... */
  }

  @media (prefers-color-scheme: dark) {
	:root:not(.light) {
	  --background: 240 10% 3.9%;
	  --foreground: 0 0% 98%;
	  --card: 240 10% 3.9%;
	  /* ... more variables ... */
	}
  }
}`
				),
				H4({ class: 'text-lg font-bold' }, 'Index Meta Tags'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						You should also define theme colors in your <code>index.html</code>
						meta tags, along with other essential meta information like
						description and title.`
					}
				),
				CodeBlock(
`<meta name="theme-color" content="#09090b">
<meta name="msapplication-TileColor" content="#09090b">`
				),
				H4({ class: 'text-lg font-bold' }, 'Manifest Colors and Settings'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						For a PWA, edit <code>public/manifest.json</code> to configure
						app icons, theme color, background color, and more.`
					}
				),
				CodeBlock(
`{
  "short_name": "Base Example",
  "name": "Base Example",
  "icons": [
	{
	  "src": "./images/icons/icon-192.png",
	  "sizes": "192x192",
	  "type": "image/png"
	},
	{
	  "src": "./images/icons/icon-512.png",
	  "sizes": "512x512",
	  "type": "image/png"
	}
  ],
  "lang": "en-US",
  "dir": "ltr",
  "scope": "./",
  "start_url": "./",
  "display": "standalone",
  "theme_color": "#09090b",
  "background_color": "#09090b"
}`
				),
				H4({ class: 'text-lg font-bold' }, 'Images and Icons'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						You must include at least two home screen icons (192px and 512px)
						and one "badge" icon in the <code>/public/images/icons</code> folder
						for PWA features like add-to-home-screen and push notifications.`
					}
				),
				H4({ class: 'text-lg font-bold' }, 'Logo and Branding'),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						The shell provides a logo in the main navigation and in the mobile
						header. Replace <code>public/images/logo.svg</code> with your own
						SVG logo to customize the branding.`
					}
				),
				P(
					{ class: 'text-muted-foreground' },
					{
						html: `
						A favicon.ico file should be added to the <code>public</code> folder.`
					}
				)
			]),

			// 7) Authentication
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold mt-12' }, 'Authentication'),
				P(
					{ class: 'text-muted-foreground' },
					`The shell supports authentication flows with "signed in" and "signed out"
					modes. The "src/shell" folder includes a login page you can customize
					to meet your app’s needs. The "models" folder within "src/shell" includes
					a "UserData" model you can extend with application-specific methods
					and properties.`
				)
			]),

			// 8) Development Guidelines & Module System
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Development Guidelines'),
				P(
					{ class: 'text-muted-foreground' },
					[
						Span(
							`Modules are central to the App Shell’s extensibility. You can add new
							features by creating modules in the "src/modules" folder and registering
							them in the "src/modules/imported-modules.js" file. This promotes better
							maintainability and scalability of your codebase.`
						)
					]
				),
				CodeBlock(
`/**
 * Import all the modules here in the order they should be added.
 * For example:
 * import "./main/module.js";
 * import "./home/module.js";
 */
import "./main/module.js";
import "./home/module.js";`
				),
				P(
					{ class: 'text-muted-foreground' },
					[
						Span(
							`Each module can declare its own routes, links, and configuration.
							This modular approach ensures that features are self-contained
							and easy to integrate.`
						)
					]
				),
				CodeBlock(
`import { Icons } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';

/**
 * Define routes for your module. Each module can have unlimited routes, but it's
 * recommended to keep each module focused on a single domain or feature.
 */
const routes = Module.convertRoutes([
  {
	path: '/docs/:page?/:sub?*',
	import: import('./components/pages/documentation/documentation-page.js'),
	title: 'Docs'
  }
]);

/**
 * Create your module and register it in the application.
 */
Module.create({
  routes,
  links: [
	{
	  group: 'Discover',
	  options: [
		{ label: 'Docs', href: 'docs', icon: Icons.document.text, mobileOrder: 5 }
	  ]
	}
  ]
});`
				),
				H4({ class: 'text-lg font-bold' }, 'Example Modules'),
				P(
					{ class: 'text-muted-foreground' },
					[
						Span(
							`Check out the example modules in the "src/modules" folder for
							practical references on how to structure routes, links, and
							domain-specific features. The "main" module is a great starting
							point for understanding module creation and registration.`
						)
					]
				)
			]),

			// 9) Global Configs
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Global Configs'),
				P(
					{ class: 'text-muted-foreground' },
					`The App Shell provides a global “Configs” object for handling application-level
					settings, such as base URLs, push notifications, and API endpoints. You can
					access or update these configurations from anywhere in your codebase, making
					them an excellent place to store constants or environment-specific values.`
				),
				P(
					{ class: 'text-muted-foreground' },
					`Below is an example of how the Configs object is structured by default:`
				),
				CodeBlock(
`/**
 * Configs
 *
 * This will set the app configs. Set any global configs here.
 *
 * @type {object} Configs
 */
export const Configs = {
  APP_NAME: 'Example App',

  // Router configuration
  router: {
	baseUrl: '/next-app-shell/',
	title: 'Example'
  },

  // Push notification settings
  push: {
	publicId: ''
  },

  // Endpoints
  userStatusApi: '/api/use/status'
};`
				),
				P(
					{ class: 'text-muted-foreground' },
					[
						Span(
							`- **APP_NAME**: The display name of your application. `,
							`\n- **router**: Router-specific settings like the base URL and title. `,
							`\n- **push**: Configuration for push notifications (e.g., VAPID keys). `,
							`\n- **userStatusApi**: An endpoint for checking user status or other server-side calls.`
						)
					]
				),
				P(
					{ class: 'text-muted-foreground' },
					`You can extend or modify this object to add more application-wide configurations.
					For example, if you need to define different API endpoints for staging or
					production environments, you can do so here and reference them throughout your code.`
				)
			]),

			// 10) Service Worker & Push Notifications
			Section({ class: 'space-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Service Worker & Push Notifications'),
				P(
					{ class: 'text-muted-foreground' },
					`The App Shell provides a service worker setup for caching assets and handling
					push notifications. The service worker is configured in the "public/sw.js" file, and
					you can customize it to fit your needs. The push notification functionality is
					integrated with the service worker, allowing you to send and receive push
					messages.`
				),
				P(
					{ class: 'text-muted-foreground' },
					`Update the settings in the "public/sw.js" file to match your app's name and version.`
				),
				P(
					{ class: 'text-muted-foreground' },
					`The service worker version is used to help know which files are on
					which version. The version should be updated when pushing to production
					to ensure the app knows to update the cache with the latest version of
					the app. This is done by updating the version in the service worker file.`
				),
				CodeBlock(
`/**
 * This is the name of the app and the version. This is used to
 * create the cache name.
 *
 * @const
 * @type {string} appName
 */
const APP_NAME = 'base-example',

/**
 * This is the version of the app. This is used to create the cache
 *
 * @const
 * @type {string} version
 */
version = '0.0.134';

/**
 * This will add these files to cache. Add any files you want to
 * cache here. As files are fetched, they will be added to the cache.
 *
 * @const
 * @type {Array<string>} DEFAULT_FILES
 */
const DEFAULT_FILES =
[
	'./',
	'./index.html'
];`
				)
			])
		]
	);

export default GetStartedPage;