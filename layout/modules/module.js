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
 * @class
 */
export class Module
{
	/**
	 * @member {string} title
	 */
	title = '';

	/**
	 * @member {array}
	 */
	routes = [];

	/**
	 * @member {array} links
	 */
	links = [];

	/**
	 * This will create a module.
	 *
	 * @param {object} settings
	 */
	constructor(settings = {})
	{
		this.title = settings.title;
		this.links = settings.links;

		const routes = settings.routes;
		this.routes = routes;
	}

	/**
	 * This will create a route creator.
	 *
	 * @return {object}
	 */
	static routeCreator()
	{
		return new ModuleRoutes();
	}

	/**
	 * This will get the module routes.
	 *
	 * @return {array}
	 */
	getRoutes()
	{
		return this.routes;
	}

	/**
	 * This will get the module links.
	 *
	 * @return {array}
	 */
	getLinks()
	{
		return this.links;
	}

	/**
	 * This will create a module.
	 *
	 * @param {object} settings
	 * @return {object}
	 */
	static create(settings)
	{
		const module = new Module(settings);
		AppModules.push(module);
		return module;
	}
}