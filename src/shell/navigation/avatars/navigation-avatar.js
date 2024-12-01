import { Div, Span } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { StatusIndicator } from "@components/molecules/avatars/status-indicator.js";
import { UserLoginStatus } from "../../user-status/user-login-status.js";

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
