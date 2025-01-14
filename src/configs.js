/**
 * Configs
 *
 * This will set the app configs. Set any global configs here.
 *
 * @type {object} Configs
 */
export const Configs =
{
	APP_NAME: 'Example App',

	/**
	 * This will set the base URL for the app.
	 *
	 * @type {object} router
	 */
	router:
	{
		baseUrl: '/next-app-shell/',
		title: 'Example'
	},

	/**
	 * This will enable the primary nav to be short
	 * without hovering.
	 *
	 * @type {boolean} useShortNav
	 */
	useShortNav: true,

	/**
	 * The push settings.
	 */
	push: {
		publicId: ''
	},

	/**
	 * This will set the API endpoints for the user status.
	 *
	 * @type {string} userStatusApi
	 */
	userStatusApi: '/api/use/status',
};