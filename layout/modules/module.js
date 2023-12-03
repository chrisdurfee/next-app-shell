import { Loader } from "../loader.js";

export const AppModules = [];

/**
 * This will create a route object.
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
 */
export const addRoute = (uri, component, title) =>
{
	return {
		uri: uri,
		component: component,
		title: title,
		persist: true
	};
};

/**
 * ModuleRoutes
 *
 * This will help create local module routes.
 *
 * @class
 */
export class ModuleRoutes
{
	/**
	 * This will create the module routes.
	 *
	 * @param {array} [common]
	 */
	constructor(common)
	{
		/**
		 * @member {array} common
		 */
		this.common = common || [];
	}

	/**
	 * This will get the dependencies and add them to the
	 * common dependencies.
	 *
	 * @param {array} deps
	 * @return {array}
	 */
	depends(deps)
    {
        return this.common.concat(deps);
    }

	/**
	 * This will add a route.
	 *
	 * @param {string} uri
	 * @param {object} component
	 * @param {string} [title]
	 * @param {bool} [persist]
	 * @param {bool} [module]
	 * @return {object}
	 */
	add(uri, component, title, persist, module = false)
	{
		persist = (persist !== false);

		return {
			uri,
			component,
			title,
			persist,
			module
		};
	}

	/**
	 * This will add a loaded route.
	 *
	 * @param {string} uri
	 * @param {object} loader
	 * @param {string} [title]
	 * @param {bool} [persist]
	 * @param {bool} [module]
	 * @return {object}
	 */
	load(uri, loader, title, persist, module = false)
	{
		let depends = loader.depends || [];
		if (this.common)
		{
			depends = this.depends(depends);
		}

		let callBack = loader.callBack;
		if (typeof callBack === 'string')
		{
			let component;
			callBack = () =>
			{
				return component || (component = new window[loader.callBack]());
			};
		}

		return this.add(
			uri,
			{
				src: loader.src,
				depends: depends,
                callBack: callBack
			},
			title,
			persist,
			module
		);
	}
}

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
	constructor(settings)
	{
		settings = settings || {};

		this.title = settings.title;

		let routes = settings.routes;
		this.convertLoaderRoutes(routes);
		this.routes = routes;

		this.links = settings.links;
	}

	/**
	 * This will setup the loader routes.
	 *
	 * @param {array} routes
	 * @return {void}
	 */
	convertLoaderRoutes(routes)
	{
		if (!routes)
		{
			return;
		}

		for (let i = 0, length = routes.length; i < length; i++)
		{
			const route = routes[i];
			if (route && route.component.src)
			{
				route.component = new Loader(route.component);
			}
		}
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