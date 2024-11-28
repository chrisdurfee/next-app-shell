import { A, Div } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Avatar } from "@components/molecules/avatar.js";
import { StatusIndicator } from "./statuses.js";

/**
 * MobileUserAvatar
 *
 * This will create the MobileUserAvatar molecule.
 *
 * @extends Component
 * @class MobileUserAvatar
 */
export const MobileUserAvatar = Jot(
{
    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: "flex items-center gap-4" }, [
            A({ class: "relative", href: 'profile' }, [
                Div({ class: "relative mx-2" }, [
                    Avatar({
                        src: '[[image]]',
                        alt: '[[name]]',
                        fallbackText: '[[name]]',
                        size: "xs",
                    })
                ]),
                StatusIndicator()
            ])
        ]);
    }
});
