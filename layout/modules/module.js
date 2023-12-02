"use strict";

let AppModules = [];

/**
 * This will create a route object.
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
 */
const addRoute = (uri, component, title) =>
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
 */
const ModuleRoutes = base.Class.extend(
{
	/**
	 *
	 * @param {array} [common]
	 */
	constructor: function(common)
	{
		this.common = common || [];
	},

	/**
	 * This will get the dependencies and add them to the
	 * common dependencies.
	 *
	 * @param {array} deps
	 */
	depends(deps)
    {
        return this.common.concat(deps);
    },

	/**
	 *
	 * @param {string} uri
	 * @param {object} component
	 * @param {string} [title]
	 * @param {bool} [persist]
	 */
	add(uri, component, title, persist)
	{
		persist = (persist !== false);

		return {
			uri: uri,
			component: component,
			title: title || '',
			persist: persist
		};
	},

	/**
	 *
	 * @param {string} uri
	 * @param {object} loader
	 * @param {string} [title]
	 * @param {bool} [persist]
	 */
	load(uri, loader, title, persist)
	{
		let depends = loader.depends || [];
		if(this.common)
		{
			depends = this.depends(depends);
		}

		let callBack = loader.callBack;
		if(typeof callBack === 'string')
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
			persist
		);
	}
});

/**
 * Module
 *
 * This will create a module to extend
 * to all child modules.
 * @class
 */
const Module = base.Class.extend(
{
	/**
	 * @param {string} title
	 */
	title: '',

	/**
	 * @param {array}
	 */
	routes: [],

	/**
	 * @param {array} links
	 */
	links: [],

	/**
	 *
	 * @param {object} settings
	 */
	constructor: function(settings)
	{
		settings = settings || {};

		this.title = settings.title;

		let routes = settings.routes;
		this.convertLoaderRoutes(routes);
		this.routes = routes;

		this.links = settings.links;
	},

	/**
	 * This will setup the loader routes.
	 *
	 * @param {array} routes
	 */
	convertLoaderRoutes(routes)
	{
		if(!routes)
		{
			return;
		}

		for(let i = 0, length = routes.length; i < length; i++)
		{
			let route = routes[i];
			if(route && route.component.src)
			{
				route.component = new Loader(route.component);
			}
		}
	},

	/**
	 * This will get the module routes.
	 *
	 * @return {array}
	 */
	getRoutes()
	{
		return this.routes;
	},

	/**
	 * This will get the module links.
	 *
	 * @return {array}
	 */
	getLinks()
	{
		return this.links;
	}
});

Module.create = (settings) =>
{
	let module = new Module(settings);
	AppModules.push(module);
	return module;
};