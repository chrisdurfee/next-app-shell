"use strict";

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
 * AppController
 *
 * This will extend the main class to override
 * the app settings.
 * @class
 */
var AppController = MainController.extend(
{
	/**
	 * This will get the router settings.
	 * @return {object}
	 */
	getRouterSettings: function()
	{
		return {
			baseUrl: '/dashr-app-shell/',
			title: 'Dashr'
		};
	},

	/**
	 * This will get the routes that will be used in
	 * the app shell.
	 *
	 * @return {array}
	 */
	getRoutes: function()
	{
		return [
			addRoute('/', ExampleModule, 'Example'),
			addRoute('/full', FullModule, 'Full Example'),
			addRoute('/full-contain', FullContainModule, 'Full Contain Example'),
			addRoute('/aside/:page?/:marketing?/:label?', new Loader({
				src: 'scripts/layout/modules/aside-module.js',
				callBack: function()
				{
					return new AsideModule();
				}
			}), 'Aside Example'),
			addRoute('/bside', BsideModule, 'Bside Example'),
			addRoute('/aside-bside', AsideBsideModule, 'Aside Bside Example')
		];
	},

	/**
	 * This will get the options to create the app
	 * navigation.
	 *
	 * @return {array}
	 */
	getNavOptions: function()
	{
		return [
			{
				label: 'Example',
				href: './',
				icon: 'blank'
			},
			{
				label: 'Aside',
				href: 'aside',
				icon: 'blank'
			},
			{
				label: 'Bside',
				href: 'bside',
				icon: 'blank'
			},
			{
				label: 'Aside + Bside',
				href: 'aside-bside',
				icon: 'blank'
			},
			{
				label: 'Full',
				href: 'full',
				icon: 'blank'
			},
			{
				label: 'Full Contain',
				href: 'full-contain',
				icon: 'blank'
			},
			{
				label: 'Messages',
				href: 'messages',
				icon: 'blank'
			},
			{
				label: 'Synopsis',
				icon: 'blank',
				options:
				[
					{
						group: 'Synopsis',
						options:
						[
							{
								label: 'Story',
								href: 'synopsis/story'
							},
							{
								label: 'Book',
								href: 'synopsis/book'
							},
							{
								label: 'Concepts',
								href: 'synopsis/concepts'
							}
						]
					}
				]
			},
			{
				label: 'Cast',
				href: 'cast',
				icon: 'blank'
			},
			{
				label: 'Gallery',
				href: 'gallery',
				icon: 'blank'
			},
			{
				group: 'Mail',
				options:
				[
					{
						label: 'Inbox',
						href: './mail/inbox',
						icon: 'blank'
					},
					{
						label: 'Sent',
						href: './mail/sent',
						icon: 'blank'
					},
					{
						label: 'Spam',
						href: './mail/spam',
						icon: 'blank'
					}
				]
			}
		];
	}
});