import { Configs } from "./configs.js";
import { AppModules } from "./imports.js";
import { base } from "./libs/base/base.js";
import { AppShell } from "./shell/app-shell.js";
import { Push } from "./worker/push.js";

/**
 * MainController
 *
 * This will setup the main app controller.
 * @class
 */
class MainController
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

	setupPush(serviceWorker)
	{
		this.serviceWorker = serviceWorker;
		this.push = new Push(this.pushPublicKey, serviceWorker);
	}

	/**
	 * This will get the router settings.
	 * @return {object}
	 */
	getRouterSettings()
	{
		return Configs.router;
	}

	/**
	 * This will setup the router.
	 * @protected
	 */
	setupRouter()
	{
		let settings = this.getRouterSettings(),
		baseUrl = settings.baseUrl;

		let router = this.router = base.router;
		router.setup(baseUrl, settings.title);

		/* this will modify the base tag to ref from
		the base url for all xhr */
		this.updateBaseTag(baseUrl);
	}

	updateBaseTag(url)
	{
		/* this will modify the base tag to ref from
		the base url for all xhr */
		let ele = document.getElementsByTagName('base');
		if(ele.length)
		{
			ele[0].href = url;
		}
	}

	/**
	 * This will setup the app modules.
	 *
	 */
	setupModules()
	{
		let modules = this.modules = AppModules || [];
		if(!modules || modules.length < 1)
		{
			return;
		}

		for(let i = 0, length = modules.length; i < length; i++)
		{
			let module = modules[i];
			if(!module)
			{
				continue;
			}

			let routes = module.getRoutes();
			if(routes)
			{
				this.routes = this.routes.concat(routes);
			}

			let links = module.getLinks();
			if(links)
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
		let options = this.getNavOptions();
		let main = this.appShell = new AppShell(
		{
			options: options,
			routes: this.getRoutes()
		});
		main.setup(document.body);
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

	setup()
	{
		this.setupRouter();
		this.setupModules();
		this.setupAppShell();
	}
}