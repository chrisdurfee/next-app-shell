import { Div } from "@base-framework/atoms";
import { getStatusClass } from "./statuses.js";

/**
 * StaticStatusIndicator
 *
 * This will create the StaticStatusIndicator molecule. This will allow the indicator
 * to show to the status of the user.
 *
 * @param {string} status
 * @returns {object}
 */
export const StaticStatusIndicator = (status) => (
    Div({
        class: `absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full ${getStatusClass(status)}`,
    })
);