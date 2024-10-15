import { ModuleRoutes } from './module-routes.js';

/**
 * @type {array} AppModules
 */
export const AppModules = [];

/**
 * Module
 *
 * This will create a module to extend
 * to all child modules.
 *
 * @class
 */
export class Module
{
	/**
	 * This will create a module.
	 *
	 * @param {object} settings
	 */
	constructor({ links, routes } = {})
	{
		/**
		 * @member {array} links
		 */
		this.links = links;

		/**
		 * @member {array} links
		 */
		this.routes = routes;
	}

	/**
	 * This will create a route creator.
	 *
	 * @returns {object}
	 */
	static routeCreator()
	{
		return new ModuleRoutes();
	}

	/**
	 * This will convert the routes to the route creator.
	 *
	 * @param {array} routes
	 * @returns {array}
	 */
	static convertRoutes(routes)
	{
		const routeCreator = Module.routeCreator();
		return routes.map(route =>
		{
			if (route.import)
			{
				return routeCreator.load(route.path, route.import, route.title);
			}

			return routeCreator.add(route.path, route.component, route.title);
		});
	}

	/**
	 * This will get the module routes.
	 *
	 * @returns {array}
	 */
	getRoutes()
	{
		return this.routes;
	}

	/**
	 * This will get the module links.
	 *
	 * @returns {array}
	 */
	getLinks()
	{
		return this.links;
	}

	/**
	 * This will create a module.
	 *
	 * @param {object} settings
	 * @returns {object}
	 */
	static create(settings)
	{
		const module = new Module(settings);
		AppModules.push(module);
		return module;
	}
}