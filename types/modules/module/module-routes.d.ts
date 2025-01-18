/**
 * ModuleRoutes
 *
 * This will help create local module routes.
 *
 * @class
 */
export class ModuleRoutes {
    /**
     * This will add a route.
     *
     * @param {string} uri
     * @param {object} component
     * @param {string} [title]
     * @param {boolean} [persist]
     * @param {boolean} [preventScroll]
     * @returns {object}
     */
    add(uri: string, component: object, title?: string, persist?: boolean, preventScroll?: boolean): object;
    /**
     * This will check if the object is a promise.
     *
     * @param {*} obj
     * @returns {boolean}
     */
    isPromise(obj: any): boolean;
    /**
     * This will add a loaded route.
     *
     * @param {string} uri
     * @param {object|string} loader
     * @param {string} [title]
     * @param {boolean} [persist]
     * @param {boolean} [preventScroll]
     * @returns {object}
     */
    load(uri: string, loader: object | string, title?: string, persist?: boolean, preventScroll?: boolean): object;
}
