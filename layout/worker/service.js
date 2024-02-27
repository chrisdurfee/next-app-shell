
class Service extends CacheController
{
	constructor(prefix, files = [])
	{
		super(prefix);
		this.files = files;

		this.addEvents();
	}

	dataUri = '/api/';

	isDataRequest(url = '')
	{
		return (url.indexOf(this.dataUri) > -1);
	}

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
			if (e.request.method !== 'GET')
			{
				return;
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
				return;
			}

			var response;
			if (this.isDataRequest(e.request.url))
			{
				return;
			}
			else
			{
				response = this.fetchFile(e);
			}

			e.respondWith(response);
		});
	}
}