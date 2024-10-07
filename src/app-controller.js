import { base, Builder } from "@base-framework/base";
import { Configs } from "./configs.js";
import { modules } from "./modules/modules.js";
import { AppShell } from "./shell/app-shell.js";

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
	 * @member {object} router
	 */
	router = null;

	/**
	 * @member {object} appShell
	 */
	appShell = null;

	/**
	 * This will setup the main controller.
	 */
	constructor()
	{
		this.setupService();
		this.setupRouter();
		this.setupAppShell();
	}

	/**
	 * This will setup the service worker.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupService()
	{
		// service workers can only work on secure connections
		const protocol = window.location.protocol.replace(':', '');
		if (!('serviceWorker' in navigator) || protocol === 'http')
		{
			return false;
		}

		const sw = navigator.serviceWorker;
		sw.register('./sw.js', {
			scope: './'
		}).then((serviceWorker) =>
		{

		});
	}

	/**
	 * This will setup the router.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupRouter()
	{
		const { baseUrl, title } = Configs.router;
		const router = this.router = base.router;
		router.setup(baseUrl, title);
	}

	/**
	 * This will navigate to the uri.
	 *
	 * @param {string} uri
	 * @param {object} [data]
	 * @param {boolean} [replace=false]
	 * @returns {void}
	 */
	navigate(uri, data, replace)
	{
		this.router.navigate(uri, data, replace);
	}

	/**
	 * This will setup the app shell.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupAppShell()
	{
		const { routes, links: options } = modules;
		const main = this.appShell = new AppShell({ options, routes });
		Builder.render(main, document.body);
	}

	/**
	 * This will get the main body element.
	 *
	 * @returns {object}
	 */
	getMainBody()
	{
		return this.appShell.getBodyPanel();
	}
}