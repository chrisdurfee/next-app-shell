"use strict";

var urlB64ToUint8Array = function(base64String)
{
	var padding = '='.repeat((4 - base64String.length % 4) % 4);
	var base64 = (base64String + padding)
	.replace(/\-/g, '+')
	.replace(/_/g, '/');

	var rawData = window.atob(base64),
	outputArray = new Uint8Array(rawData.length);

	for (let i = 0; i < rawData.length; ++i)
	{
		outputArray[i] = rawData.charCodeAt(i);
	}
	return outputArray;
};

var Push = base.Class.extend(
{
	constructor: function(publicKey, serviceWorker)
	{
		this.publicKey = publicKey;
		this.serviceWorker = serviceWorker;

		if(this.supported())
		{
			this.getSubscription();
		}
	},

	setupState: function(supported)
	{
		var target = this.state = base.state.add('push');
		target.addAction('supported', supported);
		target.addAction('subscribed', false);
	},

	supported: function()
	{
		var supported = ('PushManager' in window);
		this.setupState(supported);

		return supported;
	},

	getSubscription: function()
	{
		var self = this,
		state = this.state;
		this.serviceWorker.pushManager.getSubscription()
		.then(function(subscription)
		{
			var subscribed = !(subscription === null);
			if(!subscribed)
			{
				self.subscribe();
			}

			state.set('subscribed', subscribed);
			self.updateSubscription(subscription);
		});
	},

	subscribe: function()
	{
		var self = this,
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

	updateSubscription: function(subscription)
	{

	}
});