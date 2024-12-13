importScripts('./worker/cache-controller.js', './worker/service.js', '.worker/push-controller.js');

/**
 * This is the name of the app and the version. This is used to
 * create the cache name.
 *
 * @const
 * @type {string} appName
 */
const appName = 'base-example',

/**
 * This is the version of the app. This is used to create the cache
 *
 * @const
 * @type {string} version
 */
version = '0.0.109';

/**
 * This will add these files to cache. Add any files you want to
 * cache here. As files are fetched, they will be added to the cache.
 */
const files =
[
	'./',
	'./index.html'
];

/**
 * This will set up the service worker controller with
 * the app name and the files to cache.
 */
const appNameId = `${appName}-${version}`;
const service = new Service(appNameId, files);

/**
 * Push needs to be added to the service to allow for push
 * notifications to be received.
 */
const push = new PushController(appName);
