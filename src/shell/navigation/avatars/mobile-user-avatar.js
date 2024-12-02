import { A, Div } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { StatusIndicator } from "@components/molecules/avatars/status-indicator.js";

/**
 * MobileUserAvatar
 *
 * This will create the MobileUserAvatar molecule.
 *
 * @extends Component
 * @class MobileUserAvatar
 */
export const MobileUserAvatar = Jot(() =>
    Div({ class: "flex items-center gap-4" }, [
        A({ class: "relative", href: 'settings' }, [
            Div({ class: "relative mx-2" }, [
                Avatar({
                    src: '[[image]]',
                    alt: '[[name]]',
                    watcherFallback: '[[name]]',
                    size: "xs",
                })
            ]),
            StatusIndicator()
        ])
    ])
);
