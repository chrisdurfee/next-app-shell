import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icon } from "@components/atoms/icon.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";

/**
 * Toolbar for Email Actions.
 *
 * @returns {object}
 */
export const EmailToolbar = () => (
    Div({ class: "flex items-center justify-start space-x-4 border-b pb-2" }, [
        Tooltip({ content: "Move to inbox", position: "bottom" }, [
            Button({
                variant: "icon",
                icon: Icon({ size: "sm", class: "text-foreground" }, Icons.archive.box.default)
            }),
        ]),
        Tooltip({ content: "Move to junk", position: "bottom" }, [
            Button({
                variant: "icon",
                icon: Icon({ size: "sm", class: "text-foreground"}, Icons.archive.box.x)
            }),
        ]),
        Tooltip({ content: "Delete", position: "bottom" }, [
            Button({
                variant: "icon",
                icon: Icon({ size: "sm", class: "text-foreground" }, Icons.trash)
            }),
        ]),
        Tooltip({ content: "Snooze", position: "bottom" }, [
            Button({
                variant: "icon",
                icon: Icon({ size: "sm", class: "text-foreground" }, Icons.clock)
            }),
        ]),
    ])
);
