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
	 * This will add a route.
	 *
	 * @param {string} uri
	 * @param {object} component
	 * @param {string} [title]
	 * @param {bool} [persist]
	 * @param {bool} [module]
	 * @return {object}
	 */
	add(uri, component, title, persist)
	{
		persist = (persist !== false);

		return {
			uri,
			component,
			title,
			persist
		};
	}

	isPromise(obj)
	{
		return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	}

	/**
	 * This will add a loaded route.
	 *
	 * @param {string} uri
	 * @param {object|string} loader
	 * @param {string} [title]
	 * @param {bool} [persist]
	 * @return {object}
	 */
	load(uri, loader, title, persist = true)
	{
		if (typeof loader === 'string')
		{
			loader = {
				src: loader
			};
		}
		else if (this.isPromise(loader))
		{
			loader = {
				src: loader
			};
		}

		const callBack = loader.callBack || null;

		return {
			uri,
			import: {
				src: loader.src,
                callBack
			},
			title,
			persist
		};
	}
}