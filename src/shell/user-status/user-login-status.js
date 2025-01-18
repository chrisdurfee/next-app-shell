import { Events, State } from "@base-framework/base";
import { UserStatus } from "../models/user-status.js";
import { ActionTimer } from "./action-timer.js";
import { APP_STATE, STATES, STATE_ATTR } from "./state.js";

/**
 * Sends a POST request with keep-alive enabled.
 *
 * @param {string} url - The endpoint URL.
 * @param {string} params - The request parameters.
 * @returns {Promise} The fetch promise.
 */
const sendRequest = (url, params) =>
{
	return fetch(url,
	{
		method: 'POST',
		body: params,
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		keepalive: true,
	});
};

/**
 * UserLoginStatus
 *
 * Manages user login status and synchronizes it with the server.
 *
 * @class UserLoginStatus
 */
export class UserLoginStatus
{
	/**
	 * Constructor initializes user data binding.
	 *
	 * @param {string} apiUrl - The API endpoint URL.
	 */
	constructor(apiUrl = '/api/user-status')
	{
		/**
		 * @member {string} apiUrl
		 */
		this.apiUrl = apiUrl;

		/**
		 * @member {object|null} data
		 */
		this.data = null;

		/**
		 * @member {object|null} data
		 */
		this.state = null;

		/**
		 * @member {object|null} data
		 */
		this.userData = null;
	}

	/**
	 * Initializes the class by setting up state, events, and signing in the user.
	 *
	 * @param {object} userData - The user data object.
	 * @returns {void}
	 */
	setup(userData)
	{
		this.userData = userData;
		this.setupData();

		// Initialize action timer for idle detection
		ActionTimer.setup(userData);

		this.setupState();
		this.addEvents();
		this.signIn();
	}

	/**
	 * This will stop the timer.
	 *
	 * @returns {void}
	 */
	stop()
	{
		ActionTimer.stop();
	}

	/**
	 * Sets up the AdminStatusModel for linking user data to app state.
	 *
	 * @returns {void}
	 */
	setupData()
	{
		this.data = new UserStatus({
			status: STATES.OFFLINE,
		});

		// Link the 'status' from userData to this data model
		this.data.link(this.userData, 'status', STATE_ATTR);
	}

	/**
	 * Sets up the state for managing user status.
	 *
	 * @returns {void}
	 */
	setupState()
	{
		const state = (this.state = State.add(APP_STATE, STATE_ATTR));

		this.data.link(state, STATE_ATTR, 'status');
		this.watchData();

		// Also link data <-> userData
		this.data.link(this.userData, 'status', STATE_ATTR);
	}

	/**
	 * Configures event listeners for tracking user login status.
	 *
	 * @returns {array} An array of event listeners.
	 */
	setupEvents()
	{
		const events = [
			['visibilitychange', document, () => {
				if (!document.hidden) {
					this.setOnline();
				} else {
					this.setOffline();
				}
			}],
			['beforeunload', window, () => this.setOffline()],
			['pointerenter', document, () => this.signIn()],
		];

		return events;
	}

	/**
	 * Adds event listeners to monitor user activity and visibility changes.
	 *
	 * @returns {void}
	 */
	addEvents()
	{
		const events = this.setupEvents();
		if (!events || events.length < 1) return;

		for (let event of events)
		{
			// @ts-ignore
			Events.on(...event);
		}
	}

	/**
	 * Watches for state changes and updates the server when necessary.
	 *
	 * @returns {void}
	 */
	watchData()
	{
		this.state.on(STATE_ATTR, (value) =>
		{
			switch (value)
			{
				case STATES.ONLINE:
					this.signIn();
					break;
				case STATES.AWAY:
					this.setStatus(STATES.AWAY);
					break;
				case STATES.BUSY:
					this.setStatus(STATES.BUSY);
					break;
				case STATES.OFFLINE:
					this.signOut();
					break;
			}
		});
	}

	/**
	 * Updates the user's status on the server.
	 *
	 * @param {string} status - The user's status.
	 * @returns {void}
	 */
	setStatus(status)
	{
		const data = this.data.get();

		const params = new URLSearchParams({
			status,
			userId: data.userId,
		}).toString();

		sendRequest(this.apiUrl, params);
	}

	/**
	 * Public method to manually set the user busy.
	 *
	 * @returns {void}
	 */
	setBusy()
	{
		this.state.set(STATE_ATTR, STATES.BUSY);
	}

	/**
	 * Sets the user's state to "online."
	 *
	 * @returns {void}
	 */
	setOnline()
	{
		this.state.set(STATE_ATTR, STATES.ONLINE);
	}

	/**
	 * Sets the user's state to "away."
	 *
	 * @returns {void}
	 */
	setAway()
	{
		this.state.set(STATE_ATTR, STATES.AWAY);
	}

	/**
	 * Sets the user's state to "offline."
	 *
	 * @returns {void}
	 */
	setOffline()
	{
		this.state.set(STATE_ATTR, STATES.OFFLINE);
	}

	/**
	 * Signs the user in and updates their status.
	 *
	 * @returns {void}
	 */
	signIn()
	{
		this.data.set('userId', this.userData.id);
		this.setStatus(STATES.ONLINE);
	}

	/**
	 * Signs the user out and updates their status.
	 *
	 * @returns {void}
	 */
	signOut()
	{
		this.setStatus(STATES.OFFLINE);
	}
}