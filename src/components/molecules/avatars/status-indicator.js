import { Div } from "@base-framework/atoms";

/**
 * Status Classes
 *
 * This will create a status class object.
 *
 * @type {object} statusClasses
 */
const STATUSES = {
    ONLINE: "bg-green-500",
    OFFLINE: "bg-gray-500",
    BUSY: "bg-red-500",
    AWAY: "bg-yellow-500",
};

/**
 * This will create the StatusIndicator molecule.
 *
 * @returns {object}
 */
export const StatusIndicator = () => (
    Div({
        class: `absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full`,
        onSet: ['status', {
            [STATUSES.ONLINE]: 'online',
            [STATUSES.OFFLINE]: 'offline',
            [STATUSES.BUSY]: 'busy',
            [STATUSES.AWAY]: 'away'
        }]
    })
);
