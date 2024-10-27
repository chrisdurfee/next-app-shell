import { Builder, router } from "@base-framework/base";
import { Configs } from "./configs.js";
import { modules } from "./modules/modules.js";
import { setupServiceWorker } from "./service.js";
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
		this.renderApp();
	}

	/**
	 * This will setup the service worker.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupService()
	{
		setupServiceWorker();
	}

	/**
	 * This will setup the router.
	 *
	 * @protected
	 * @returns {void}
	 */
	setupRouter()
	{
		this.router = router;

		/**
		 * This will add the configs router settings
		 * to the router.
		 */
		const { baseUrl, title } = Configs.router;
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
	navigate(uri, data, replace = false)
	{
		this.router.navigate(uri, data, replace);
	}

	/**
	 * This will render the app.
	 *
	 * @protected
	 * @returns {void}
	 */
	renderApp()
	{
		const { routes, links: options } = modules;
		const main = AppShell({ options, routes });
		this.appShell = Builder.render(main, document.body);
	}

	/**
	 * This will add a notification.
	 *
	 * @param {object} props
	 * @returns {void}
	 */
	notify(props)
	{
		this.appShell.notifications.addNotice(props);
	}
}