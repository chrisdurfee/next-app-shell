/**
 * @type {Array<object>} AppModules
 */
export const AppModules: Array<object>;
/**
 * Module
 *
 * This will create a module to extend
 * to all child modules.
 *
 * @class
 */
export class Module {
    /**
     * This will create a route creator.
     *
     * @returns {object}
     */
    static routeCreator(): object;
    /**
     * This will convert the routes to the route creator.
     *
     * @param {Array<object>} routes
     * @returns {Array<object>}
     */
    static convertRoutes(routes: Array<object>): Array<object>;
    /**
     * This will create a module.
     *
     * @param {object} settings
     * @returns {object}
     */
    static create(settings: object): object;
    /**
     * This will create a module.
     *
     * @param {object} settings
     */
    constructor({ links, routes }?: object);
    /**
     * @member {Array<object>} links
     */
    links: any;
    /**
     * @member {Array<object>} links
     */
    routes: any;
    /**
     * This will get the module routes.
     *
     * @returns {Array<object>}
     */
    getRoutes(): Array<object>;
    /**
     * This will get the module links.
     *
     * @returns {Array<object>}
     */
    getLinks(): Array<object>;
}
