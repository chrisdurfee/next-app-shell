/**
 * AppController
 *
 * This will setup the main app controller.
 *
 * @class
 */
export class AppController {
    /**
     * @member {object} router
     */
    router: any;
    /**
     * @member {object} appShell
     */
    appShell: any;
    /**
     * @member {object} data
     */
    data: {};
    /**
     * @member {object|null} root
     */
    root: any;
    /**
     * This will set the data.
     *
     * @protected
     * @returns {void}
     */
    protected setData(): void;
    /**
     * This will setup the service worker.
     *
     * @protected
     * @returns {void}
     */
    protected setupService(): void;
    /**
     * This will setup the router.
     *
     * @protected
     * @returns {void}
     */
    protected setupRouter(): void;
    /**
     * This will navigate to the uri.
     *
     * @param {string} uri
     * @param {object} [data]
     * @param {boolean} [replace=false]
     * @returns {void}
     */
    navigate(uri: string, data?: object, replace?: boolean): void;
    /**
     * This will render the app.
     *
     * @protected
     * @returns {void}
     */
    protected render(): void;
    /**
     * This will sign the user in.
     *
     * @returns {void}
     */
    signIn(): void;
    /**
     * This will sign the user out.
     *
     * @returns {void}
     */
    signOut(): void;
    /**
     * This will set the user data.
     *
     * @protected
     * @param {object|null} [data]
     * @returns {void}
     */
    protected setUserData(data?: object | null): void;
    /**
     * This will add a notification.
     *
     * @param {object} props
     * @returns {void}
     */
    notify(props: object): void;
}
