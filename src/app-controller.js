import { Builder, router } from "@base-framework/base";
import { Configs } from "./configs.js";
import { modules } from "./modules/modules.js";
import { setupServiceWorker } from "./service.js";
import { AppShell } from "./shell/app-shell.js";
import { UserData } from "./shell/models/user-data.js";
import { setHtmlThemeBySettings } from "./theme.js";

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
		setHtmlThemeBySettings();
		this.setupService();
		this.setupRouter();
		this.setData();
	}

	/**
	 * This will set the data.
	 *
	 * @protected
	 * @returns {void}
	 */
	setData()
	{
		this.data = {
			user: new UserData()
		};
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
	render()
	{
		const { routes, links: options } = modules;
		const main = this.appShell = new AppShell({ options, routes });
		Builder.render(main, document.body);
	}

	/**
	 * This will sign the user in.
	 *
	 * @returns {void}
	 */
	signIn()
	{
		this.appShell.state.isSignedIn = true;
		this.setUserData();
	}

	/**
	 * This will sign the user out.
	 *
	 * @returns {void}
	 */
	signOut()
	{
		this.appShell.state.isSignedIn = false;
	}

	/**
	 * This will set the user data.
	 *
	 * @param {object|null} [data]
	 * @returns {void}
	 */
	setUserData(data = null)
	{
		data = data ?? {
			name: "John Doe", // Example default user name
			avatar: "https://github.com/shadcn.png", // Example avatar image
			status: "online", // Default status
		};

		app.data.user.set(data);
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