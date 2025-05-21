/**
 * Push
 *
 * This will handle the push notification.
 *
 * @class
 */
export class Push {
    /**
     * This will set up the push notification.
     *
     * @param {string} publicKey
     * @param {object} serviceWorker
     */
    constructor(publicKey: string, serviceWorker: object);
    publicKey: string;
    serviceWorker: any;
    /**
     * This will set up the push notification.
     *
     * @returns {void}
     */
    setup(): void;
    /**
     * This will set up the state globally to allow the
     * app to bind to the push states.
     *
     * @param {boolean} supported
     * @returns {void}
     */
    setupState(supported: boolean): void;
    state: any;
    /**
     * This will check if the push notification is supported.
     *
     * @returns {boolean}
     */
    supported(): boolean;
    /**
     * This will get the subscription.
     *
     * @returns {void}
     */
    getSubscription(): void;
    /**
     * This will subscribe to the push notification.
     *
     * @returns {void}
     */
    subscribe(): void;
    /**
     * This will request the permission.
     *
     * @returns {Promise<void>}
     */
    requestPermission(): Promise<void>;
    /**
     * This will handle the subscribe.
     *
     * @returns {void}
     */
    handleSubscribe(): void;
    /**
     * This will unsubscribe from the push notification.
     *
     * @returns {void}
     */
    unsubscribe(): void;
    /**
     * This will send the request.
     *
     * @param {string} action
     * @param {object} subscription
     * @returns {void}
     */
    request(action: string, subscription: object): void;
    /**
     * This will remove the subscription.
     *
     * @param {object} subscription
     * @returns {void}
     */
    removeSubscription(subscription: object): void;
    /**
     * This will update the subscription.
     *
     * @param {object} subscription
     * @returns {void}
     */
    updateSubscription(subscription: object): void;
}
