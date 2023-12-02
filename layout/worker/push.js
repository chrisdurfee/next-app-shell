"use strict";

const urlB64ToUint8Array = (base64String) =>
{
	let padding = '='.repeat((4 - base64String.length % 4) % 4);
	let base64 = (base64String + padding)
	.replace(/\-/g, '+')
	.replace(/_/g, '/');

	let rawData = window.atob(base64),
	outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i)
	{
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
};

const Push = base.Class.extend(
{
	constructor(publicKey, serviceWorker)
	{
		this.publicKey = publicKey;
		this.serviceWorker = serviceWorker;

		if(this.supported())
		{
			this.getSubscription();
		}
	},

	setupState(supported)
	{
		let target = this.state = base.state.add('push');
		target.addAction('supported', supported);
		target.addAction('subscribed', false);
	},

	supported()
	{
		let supported = ('PushManager' in window);
		this.setupState(supported);

		return supported;
	},

	getSubscription()
	{
		let self = this,
		state = this.state;
		this.serviceWorker.pushManager.getSubscription()
		.then(function(subscription)
		{
			let subscribed = !(subscription === null);
			if(!subscribed)
			{
				self.subscribe();
			}

			state.set('subscribed', subscribed);
			self.updateSubscription(subscription);
		});
	},

	subscribe()
	{
		let self = this,
		state = this.state,
		publicKey = urlB64ToUint8Array(this.publicKey);

		this.serviceWorker.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: publicKey
		})
		.then(function(subscription)
		{
			self.updateSubscription(subscription);
			state.set('subscription', true);
		})
		.catch(function(err)
		{
			state.set('subscription', false);
		});
	},

	updateSubscription(subscription)
	{

	}
});