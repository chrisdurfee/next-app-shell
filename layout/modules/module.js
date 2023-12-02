"use strict";

var AppModules = [];

/**
 * This will create a route object.
 * @param {string} uri
 * @param {function} component
 * @param {string} [title]
 */
var addRoute = function(uri, component, title)
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
var ModuleRoutes = base.Class.extend(
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
	depends: function(deps)
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
	add: function(uri, component, title, persist)
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
	load: function(uri, loader, title, persist)
	{
		var depends = loader.depends || [];
		if(this.common)
		{
			depends = this.depends(depends);
		}

		var callBack = loader.callBack;
		if(typeof callBack === 'string')
		{
			var component;
			callBack = function()
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
var Module = base.Class.extend(
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

		var routes = settings.routes;
		this.convertLoaderRoutes(routes);
		this.routes = routes;

		this.links = settings.links;
	},

	/**
	 * This will setup the loader routes.
	 *
	 * @param {array} routes
	 */
	convertLoaderRoutes: function(routes)
	{
		if(!routes)
		{
			return;
		}

		for(var i = 0, length = routes.length; i < length; i++)
		{
			var route = routes[i];
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
	getRoutes: function()
	{
		return this.routes;
	},

	/**
	 * This will get the module links.
	 *
	 * @return {array}
	 */
	getLinks: function()
	{
		return this.links;
	}
});

Module.create = function(settings)
{
	var module = new Module(settings);
	AppModules.push(module);
	return module;
};