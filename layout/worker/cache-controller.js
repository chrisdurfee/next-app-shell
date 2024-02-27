
/**
 * CacheController
 *
 * This will handle the caching of files and data.
 *
 * @class CacheController
 */
class CacheController
{
	constructor(prefix)
	{
		this.cacheName = prefix;
		this.dataCacheName = prefix + '-data';
		this.hasUpdate = false;
	}

	open(cacheName, callBack)
	{
		return caches.open(cacheName).then(callBack);
	}

	/**
	 * This will check if there is an update from
	 * the service worker version.
	 *
	 * @return {void}
	 */
	checkUpdate()
	{
		if (this.hasUpdate === false)
		{
			this.hasUpdate = true;
			this.alert();
		}
	}

	/**
	 * This will send a message to the client side to notify the app
	 * has an update.
	 *
	 * @return {void}
	 */
	alert()
	{
		clients.matchAll({
			type: 'window',
			includeUncontrolled: true
		})
		.then((clientList) =>
		{
			if (clientList.length === 0)
			{
				return;
			}

			/**
			 * This will check if there is a focused client.
			 */
			let focusedClient = null;
			for (let i = 0; i < clientList.length; i++)
			{
				let client = clientList[i];
				if (client.focused)
				{
					focusedClient = client;
					break;
				}
			}

			/**
			 * If there is no focused client, it will just select the first client.
			 */
			const client = focusedClient || clientList[0];
			client.postMessage({
				update: true
			});
		});
	}

	addFiles(files)
	{
		return this.open(this.cacheName, (cache) =>
		{
			return cache.addAll(files);
		});
	}

	deleteFiles()
	{
		caches.delete(this.cacheName).then((success) =>
		{

		});
	}

	addData(key, data)
	{
		return this.open(this.dataCacheName, (cache) =>
		{
			return cache.put(key, data);
		});
	}

	removeData(key)
	{
		return this.open(this.dataCacheName, (cache) =>
		{
			return caches.delete(key);
		});
	}

	fetchData(e)
	{
		const request = e.request,
		networkPromise = fetch(request);

		return caches.open(this.dataCacheName).then(async (cache) =>
		{
			const cachedResponse = await cache.match(request);
			const networkResponse = await networkPromise;
			cache.put(request, networkResponse.clone());

			return cachedResponse || networkPromise;
		});
	}

	fetchFile(e)
	{
		const request = e.request;
		return caches.open(this.cacheName).then(async (cache) =>
		{
			const cachedResponse = await cache.match(request);
			return cachedResponse || fetch(request).then((response) =>
			{
				cache.put(request, response.clone());
				return response;
			});
		});
	}

	/**
	 * This will refresh the cache.
	 *
	 * @returns {Promise}
	 */
	refresh()
	{
		const cacheName = this.cacheName,
		dataCacheName = this.dataCacheName;

		/**
		 * This will select all caches files.
		 */
		return caches.keys().then((keyList) =>
		{
			/**
			 * This will delete all caches files except the current cache.
			 */
			return Promise.all(keyList.map((key) =>
			{
				if (key !== cacheName && key !== dataCacheName)
				{
					this.checkUpdate();
					return caches.delete(key);
				}
			}));
		});
	}
}