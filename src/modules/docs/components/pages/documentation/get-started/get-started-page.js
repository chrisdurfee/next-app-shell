import { A, Code, H4, P, Pre, Section, Span } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { DocPage } from "../../doc-page.js";

/**
 * This will create a code block.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const CodeBlock = Atom((props, children) => (
	Pre({ ...props, class: `flex p-4 max-h-[650px] max-w-[1024px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer mt-4 ${props.class}` }, [
        Code({ class: 'font-mono flex-auto text-sm text-wrap', click: () =>
        {
            navigator.clipboard.writeText(children[0].textContent);
            app.notify({
                title: "Code copied",
                description: "The code has been copied to your clipboard.",
                icon: Icons.clipboard.checked
            });
        }}, children)
    ])
));

/**
 * GetStartedPage
 *
 * This component creates a comprehensive get started page for the documentation,
 * detailing how to get started with the App Shell project.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const GetStartedPage = () => (
    DocPage(
        {
            title: 'Get Started',
            description: 'This page will help you get started with the App Shell project.',
        },
        [
            Section({ class: 'space-y-4' }, [
                H4({ class: 'text-lg font-bold' }, 'About the Project'),
                P({ class: 'text-muted-foreground' }, `This project is a PWA (Progressive Web App) that serves as a foundational framework for building web applications. It is designed to be modular, scalable, and easy to use, making it an ideal starting point for new projects.`),
            ]),

            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Theme Setup'),
                P({ class: 'text-muted-foreground' }, { html: `This project uses Tailwind and supported light and dark themes. The theme can be modified to fit the application style by changing a few fils in the project with the desired light and dark theme colors. The <a href="/docs/theme" class="underline">"Theme"</a> page outlines the types of properties that are themeable and how they are applied. ` }),
                CodeBlock(`
/**
 * /src/css/base.css
 */
@layer base {
	:root {
		--background: 0 0% 100%;
		--foreground: 240 10% 3.9%;
		--card: 0 0% 100%;
        ...
	}

	@media (prefers-color-scheme: dark) {
		:root:not(.light) {
			--background: 240 10% 3.9%;
			--foreground: 0 0% 98%;
			--card: 240 10% 3.9%;
            ...
		}
	}
}

                `),

                H4({ class: 'text-lg font-bold' }, 'Index Meta Tags'),
                P({ class: 'text-muted-foreground' }, { html: `The theme colors should also be added to the index.html meta tags. The other meta tags like description and title can also be edited. ` }),
                CodeBlock(`
<meta name="theme-color" content="#09090b">
<meta name="msapplication-TileColor" content="#09090b">
                `),

                H4({ class: 'text-lg font-bold' }, 'Manifest Colors and Settings'),
                P({ class: 'text-muted-foreground' }, { html: `All PWA's need to have a manifiest that outlines the app settings. Edit the app theme and settings in the "public/manifest.json" file. ` }),
                CodeBlock(`
{
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
}
                `),

                H4({ class: 'text-lg font-bold' }, 'Images and Icons'),
                P({ class: 'text-muted-foreground' }, { html: `The app will need to have at least two homescreen icons (192px and 512px) and one "badge" (Mobile status bar icon for push notifications) in the "/public/images/icons" folder. ` }),
                CodeBlock(`
{
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
}
                `)
            ]),

            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold mt-12' }, 'Authentication'),
                P({ class: 'text-muted-foreground' }, `The shell supports auth flows and has a "signed in" and signed out" mode. The "src/shell" folder has a login page that can be edited to fit the application needs. The "src/shell" also has a "models" folder with a "UserData" that can be updated to add specific methods and properties for the application needs.`),
            ]),

            // Development and Module System
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Development Guidelines'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the "src/modules/imported-modules.js" file. `),
                    Span(`This structure supports modularity, making it easier to maintain and scale projects.`),
                ]),
                CodeBlock(`/**
 * Import all the modules here in the order they should be added.
 *
 * e.g. import "./main/module.js";
 */
import "./main/module.js";
import "./home/module.js";
                `),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.`)
                ]),

                CodeBlock(`import {  Icons  } from "@base-framework/ui/icons";
import { Module } from '../module/module.js';

/**
 * This will set the routes for the module. You can have unlimited routes in an module
 * but modules should be domain specific. If you have a module that has multiple domains,
 * you should create a new module for each domain.
 *
 * @type {Array<object>} routes
 */
const routes = Module.convertRoutes(
[
    {
        path: '/docs/:page?/:sub?*',
        import: import('./components/pages/documentation/documentation-page.js'),
        title: 'Docs'
    }
]);

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {Array<object>} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {Array<object>} links
     */
    links: [
        {
            group: 'Discover',
            options: [
                { label: 'Docs', href: 'docs', icon: Icons.document.text, mobileOrder: 5 }
            ]
        }
    ]
});`)
            ]),

            // About the Contributors
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Contributors and Community'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`For information on contributing, check the `),
                    A({ href: 'https://github.com/chrisdurfee/next-app-shell', class: 'underline', target: '_blank' }, 'GitHub repository'),
                    Span(` and join the community discussions to collaborate and innovate.`)
                ])
            ])
        ]
    )
);

export default GetStartedPage;
