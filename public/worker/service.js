/**
 * Service
 *
 * This will create a service worker that will cache files.
 *
 * @class Service
 */
class Service extends CacheController
{
    /**
     * This will create a service that will cache files.
     *
     * @param {string} prefix
     * @param {Array} files
     */
	constructor(prefix, files = [])
	{
		super(prefix);
		this.files = files;

		this.addEvents();
	}

    /**
     * This will add events to the service worker.
     *
     * @return {void}
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
			if(e.data === 'delete')
			{
				this.deleteFiles();
			}
		});

		self.addEventListener('fetch', (e) =>
		{
			if (e.request.method !== 'GET')
			{
				return false;
			}

			if (e.request.mode === 'navigate')
			{
				e.respondWith(caches.match('index.html'));
				return false;
			}
			else if (e.request.mode === 'cors')
			{
				return false;
			}

			if (e.request.url.startsWith('chrome-extension://'))
			{
				return false;
			}

			const response = this.fetchFile(e);
			e.respondWith(response);
		});
	}
}