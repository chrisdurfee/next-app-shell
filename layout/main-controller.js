import { base, Builder } from "@base-framework/base";
import { Configs } from "./configs.js";
import { AppModules } from "./modules/module.js";
import { AppShell } from "./shell/app-shell.js";
import { Push } from "./worker/push.js";

/**
 * MainController
 *
 * This will setup the main app controller.
 * @class
 */
export class MainController
{
	/**
	 * @member {array} modules
	 */
	modules = [];

	/**
	 * @member {array} routes
	 */
	routes = [];

	/**
	 * @member {array} links
	 */
	links = [];

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
	 * This will setup the push.
	 *
	 * @protected
	 * @param {object} serviceWorker
	 * @return {object}
	 */
	setupPush(serviceWorker)
	{
		this.serviceWorker = serviceWorker;
		this.push = new Push(this.pushPublicKey, serviceWorker);
	}

	/**
	 * This will get the router settings.
	 *
	 * @return {object}
	 */
	getRouterSettings()
	{
		return Configs.router;
	}

	/**
	 * This will setup the router.
	 *
	 * @protected
	 * @return {void}
	 */
	setupRouter()
	{
		const settings = this.getRouterSettings(),
		baseUrl = settings.baseUrl;

		const router = this.router = base.router;
		router.setup(baseUrl, settings.title);
	}

	/**
	 * This will setup the app modules.
	 *
	 */
	setupModules()
	{
		const modules = this.modules = AppModules || [];
		if (!modules || modules.length < 1)
		{
			return;
		}

		for (let i = 0, length = modules.length; i < length; i++)
		{
			const module = modules[i];
			if (!module)
			{
				continue;
			}

			const routes = module.getRoutes();
			if (routes)
			{
				this.routes = this.routes.concat(routes);
			}

			const links = module.getLinks();
			if (links)
			{
				this.links = this.links.concat(links);
			}
		}
	}

	/**
	 * This will get the routes that will be used in
	 * the app shell.
	 *
	 * @return {array}
	 */
	getRoutes()
	{
		return this.routes;
	}

	/**
	 * This will get the options to create the app
	 * navigation.
	 *
	 * @return {array}
	 */
	getNavOptions()
	{
		return this.links;
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
	 */
	setupAppShell()
	{
		const options = this.getNavOptions();
		const main = this.appShell = new AppShell(
		{
			options,
			routes: this.getRoutes()
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
		this.setupModules();
		this.setupAppShell();
	}
}