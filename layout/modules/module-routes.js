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