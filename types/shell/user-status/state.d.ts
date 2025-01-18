/**
 * @const {string} APP_STATE
 *
 * Application state identifier for global state management.
 */
export const APP_STATE: "app";
/**
 * @const {string} STATE_ATTR
 * Attribute key for tracking user status.
 */
export const STATE_ATTR: "userStatus";
export namespace STATES {
    let AWAY: string;
    let ONLINE: string;
    let BUSY: string;
    let OFFLINE: string;
}
