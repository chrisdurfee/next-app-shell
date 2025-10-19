/**
 * UserLoginStatus
 *
 * Manages user login status and synchronizes it with the server.
 *
 * @class UserLoginStatus
 */
export class UserLoginStatus {
    /**
     * Constructor initializes user data binding.
     *
     * @param {string} apiUrl - The API endpoint URL.
     */
    constructor(apiUrl?: string);
    /**
     * @member {string} apiUrl
     */
    apiUrl: string;
    /**
     * @member {object|null} data
     */
    data: import("@base-framework/base").Model;
    /**
     * @member {object|null} data
     */
    state: import("../../../node_modules/@base-framework/base/dist/types/modules/state/state-target.js").StateTarget;
    /**
     * @member {object|null} data
     */
    userData: any;
    /**
     * Initializes the class by setting up state, events, and signing in the user.
     *
     * @param {object} userData - The user data object.
     * @returns {void}
     */
    setup(userData: object): void;
    /**
     * This will stop the timer.
     *
     * @returns {void}
     */
    stop(): void;
    /**
     * Sets up the AdminStatusModel for linking user data to app state.
     *
     * @returns {void}
     */
    setupData(): void;
    /**
     * Sets up the state for managing user status.
     *
     * @returns {void}
     */
    setupState(): void;
    /**
     * Configures event listeners for tracking user login status.
     *
     * @returns {array} An array of event listeners.
     */
    setupEvents(): any[];
    /**
     * Adds event listeners to monitor user activity and visibility changes.
     *
     * @returns {void}
     */
    addEvents(): void;
    /**
     * Watches for state changes and updates the server when necessary.
     *
     * @returns {void}
     */
    watchData(): void;
    /**
     * Updates the user's status on the server.
     *
     * @param {string} status - The user's status.
     * @returns {void}
     */
    setStatus(status: string): void;
    /**
     * Public method to manually set the user busy.
     *
     * @returns {void}
     */
    setBusy(): void;
    /**
     * Sets the user's state to "online."
     *
     * @returns {void}
     */
    setOnline(): void;
    /**
     * Sets the user's state to "away."
     *
     * @returns {void}
     */
    setAway(): void;
    /**
     * Sets the user's state to "offline."
     *
     * @returns {void}
     */
    setOffline(): void;
    /**
     * Signs the user in and updates their status.
     *
     * @returns {void}
     */
    signIn(): void;
    /**
     * Signs the user out and updates their status.
     *
     * @returns {void}
     */
    signOut(): void;
}
