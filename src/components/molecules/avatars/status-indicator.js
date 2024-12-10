import { Div } from "@base-framework/atoms";

/**
 * This will create a status object.
 *
 * @type {object} STATUSES
 */
const STATUSES = {
    ONLINE: "online",
    OFFLINE: "offline",
    BUSY: "busy",
    AWAY: "away"
};

/**
 * This will create a status class object.
 *
 * @type {object} STATUS_CLASS
 */
const STATUS_CLASS = {
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
 * @param {object} [props]
 * @returns {object}
 */
export const StatusIndicator = ({ propName = 'status' } = {}) => (
    Div({
        class: `absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full`,
        onSet: [propName, {
            [STATUS_CLASS.ONLINE]: STATUSES.ONLINE,
            [STATUS_CLASS.OFFLINE]: STATUSES.OFFLINE,
            [STATUS_CLASS.BUSY]: STATUSES.BUSY,
            [STATUS_CLASS.AWAY]: STATUSES.AWAY
        }]
    })
);