import { Div } from "@base-framework/atoms";
import { STATUSES, STATUS_CLASS } from "./statuses.js";

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