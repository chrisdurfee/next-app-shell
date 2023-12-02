"use strict";

/**
 * MainController
 *
 * This will setup the main app controller.
 * @class
 */
var MainController = base.Class.extend(
{
	constructor: function()
	{
		/**
		 * @member {object} router
		 */
		this.router = null;

		/**
		 * @member {object} appShell
		 */
		this.appShell = null;
	},

	setupPush: function(serviceWorker)
	{
		this.serviceWorker = serviceWorker;
		this.push = new Push(this.pushPublicKey, serviceWorker);
	},

	/**
	 * This will get the router settings.
	 * @return {object}
	 */
	getRouterSettings: function()
	{
		return {
			baseUrl: '/',
			title: 'Dashr'
		};
	},

	/**
	 * This will setup the router.
	 * @protected
	 */
	setupRouter: function()
	{
		var settings = this.getRouterSettings(),
		baseUrl = settings.baseUrl;

		var router = this.router = base.router;
		router.setup(baseUrl, settings.title);

		/* this will modify the base tag to ref from
		the base url for all xhr */
		this.updateBaseTag(baseUrl);
	},

	updateBaseTag: function(url)
	{
		/* this will modify the base tag to ref from
		the base url for all xhr */
		var ele = document.getElementsByTagName('base');
		if(ele.length)
		{
			ele[0].href = url;
		}
	},

	getRoutes: function()
	{
		return [

		];
	},

	/**
	 * This will navigate to the uri.
	 *
	 * @param {string} uri
	 * @param {object} [data]
	 * @param {bool} [replace=false]
	 */
	navigate: function(uri, data, replace)
	{
		this.router.navigate(uri, data, replace);
	},

	/**
	 * This will setup the app shell.
	 */
	setupAppShell: function()
	{
		var options = this.getNavOptions();
		var main = this.appShell = new AppShell(
		{
			options: options,
			routes: this.getRoutes()
		});
		main.setup(document.body);
	},

	/**
	 * This will get the main body element.
	 *
	 * @return {object}
	 */
	getMainBody: function()
	{
		return this.appShell.getBodyPanel();
	},

	setup: function()
	{
		this.setupRouter();
		this.setupAppShell();
	}
});