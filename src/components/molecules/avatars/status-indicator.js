import { Div } from "@base-framework/atoms";

/**
 * This will create a status class object.
 *
 * @type {object} statusClasses
 */
const STATUSES = {
    ONLINE: "bg-green-500",
    OFFLINE: "bg-gray-500",
    BUSY: "bg-red-500",
    AWAY: "bg-yellow-500"
};

/**
 * StatusIndicator
 *
 * This will create the StatusIndicator molecule. This will allow the indicator
 * to bind to the status of the user.
 *
 * @param {object} props
 * @returns {object}
 */
export const StatusIndicator = ({ propName = 'status' }) => (
    Div({
        class: `absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full`,
        onSet: [propName, {
            [STATUSES.ONLINE]: 'online',
            [STATUSES.OFFLINE]: 'offline',
            [STATUSES.BUSY]: 'busy',
            [STATUSES.AWAY]: 'away'
        }]
    })
);
