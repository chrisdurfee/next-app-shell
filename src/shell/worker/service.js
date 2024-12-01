
/**
 * Service
 *
 * This will create a service for a service worker.
 *
 * @class
 * @extends CacheController
 */
class Service extends CacheController
{
	/**
	 * This will create a new service.
	 *
	 * @param {string} prefix
	 * @param {array} files
	 */
	constructor(prefix, files = [])
	{
		super(prefix);
		this.files = files;

		this.addEvents();
	}

	/**
	 * @member {string} dataUri
	 */
	dataUri = '/api/';

	/**
	 * This will check if the request is a data request.
	 *
	 * @param {string} url
	 * @returns {boolean}
	 */
	isDataRequest(url = '')
	{
		return (url.indexOf(this.dataUri) > -1);
	}

	/**
	 * This will add the events for the service worker.
	 *
	 * @returns {void}
	 */
	addEvents()
	{
		self.addEventListener('install', (e) =>
		{
			self.skipWaiting();

			e.waitUntil(
				this.addFiles(this.files)
			);
		});

		self.addEventListener('activate', (e) =>
		{
			e.waitUntil(
				this.refresh()
			);

			return self.clients.claim();
		});

		self.addEventListener('message', (e) =>
		{
			if (e.data === 'delete')
			{
				this.deleteFiles();
			}
		});

		self.addEventListener('fetch', (e) =>
		{
			/**
			 * Prevent non-GET requests.
			 */
			if (e.request.method !== 'GET')
			{
				return;
			}

			/**
			 * Prevent the service worker from handling the navigation requests.
			 */
			if (e.request.mode === 'navigate')
			{
				e.respondWith(caches.match('index.html'));
				return false;
			}

			/**
			 * Prevent the service worker from handling the CORS requests.
			 */
			if (e.request.mode === 'cors')
			{
				return false;
			}

			/**
			 * Prevent the service worker from handling the extension requests.
			 */
			if (e.request.url.startsWith('chrome-extension://'))
			{
				return;
			}

			/**
			 * Prevent the service worker from handling the data requests.
			 */
			if (this.isDataRequest(e.request.url))
			{
				return;
			}

			const response = this.fetchFile(e);
			e.respondWith(response);
		});
	}
}