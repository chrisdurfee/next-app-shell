import { Div, Span } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Avatar } from "@components/molecules/avatar.js";
import { UserLoginStatus } from "../user-status/user-login-status";

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
const StatusIndicator = () => (
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

/**
 * This will create the UserDetails molecule.
 *
 * @returns {object}
 */
const UserDetails = () => (
    Div([
        Span({ class: "text-sm text-foreground whitespace-nowrap" }, '[[name]]'),
        Span({ class: "text-xs text-muted-foreground capitalize whitespace-nowrap" }, ' - [[status]]'),
    ])
);

/**
 * @type {UserLoginStatus} status
 */
const status = new UserLoginStatus();

/**
 * NavigationAvatar
 *
 * This will create the NavigationAvatar molecule.
 *
 * @extends Component
 * @class NavigationAvatar
 */
export const NavigationAvatar = Jot(
{
    /**
     * This will set up the status tracker.
     *
     * @returns {void}
     */
    after()
    {
        status.setup(this.data);
    },

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: "flex items-center gap-4" }, [
            Div({ class: "relative" }, [
                // User Avatar
                Div({ class: "relative mx-2" }, [
                    Avatar({
                        src: '[[image]]',
                        alt: '[[name]]',
                        fallbackText: '[[name]]',
                        size: "sm",
                    })
                ]),
                StatusIndicator()
            ]),
            UserDetails()
        ]);
    },

    /**
     * This will destroy the status tracker.
     *
     * @returns {void}
     */
    destroy()
    {
        status.stop();
    }
});
