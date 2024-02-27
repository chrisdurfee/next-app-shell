import { base, Builder } from "@base-framework/base";
import { } from "../layout/modules/main/module.js";
import { Configs } from "./configs.js";
import { AppModules } from "./modules/module.js";
import { AppShell } from "./shell/app-shell.js";

/**
 * This will add the modules to the app.
 *
 * @param {array} modules
 * @return {object}
 */
const AddModules = (modules) =>
{
	if (!modules || modules.length < 1)
	{
		return {};
	}

	let appRoutes = [];
	let appLinks = [];

	modules.forEach((module) =>
	{
		if (!module)
		{
			return;
		}

		const routes = module.getRoutes();
		if (routes)
		{
			appRoutes = appRoutes.concat(routes);
		}

		const links = module.getLinks();
		if (links)
		{
			appLinks = appLinks.concat(links);
		}
	});

	return {
		routes: appRoutes,
		links: appLinks
	};
};

/**
 * AppController
 *
 * This will setup the main app controller.
 *
 * @class
 */
export class AppController
{
	/**
	 * This will setup the main controller.
	 *
	 * @return {MainController}
	 */
	constructor()
	{
		/**
		 * @member {object} router
		 */
		this.router = null;

		/**
		 * @member {object} appShell
		 */
		this.appShell = null;
	}

	/**
	 * This will setup the router.
	 *
	 * @protected
	 * @return {void}
	 */
	setupRouter()
	{
		const settings = Configs.router,
		baseUrl = settings.baseUrl;

		const router = this.router = base.router;
		router.setup(baseUrl, settings.title);
	}

	/**
	 * This will setup the app modules.
	 *
	 * @protected
	 * @return {object}
	 */
	setupModules()
	{
		return AddModules(AppModules);
	}

	/**
	 * This will navigate to the uri.
	 *
	 * @param {string} uri
	 * @param {object} [data]
	 * @param {bool} [replace=false]
	 */
	navigate(uri, data, replace)
	{
		this.router.navigate(uri, data, replace);
	}

	/**
	 * This will setup the app shell.
	 *
	 * @protected
	 * @return {void}
	 */
	setupAppShell()
	{
		const { routes, links: options } = this.setupModules();
		const main = this.appShell = new AppShell(
		{
			options,
			routes
		});
		Builder.render(main, document.body);
	}

	/**
	 * This will get the main body element.
	 *
	 * @return {object}
	 */
	getMainBody()
	{
		return this.appShell.getBodyPanel();
	}

	/**
	 * This will setup the main controller.
	 *
	 * @return {void}
	 */
	setup()
	{
		this.setupRouter();
		this.setupAppShell();
	}
}