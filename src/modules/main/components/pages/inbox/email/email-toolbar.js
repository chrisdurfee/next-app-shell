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
    Div({ class: "flex items-center justify-between border-b pb-2" }, [
        Div({ class: "flex items-center gap-2" }, [
            // Move to Inbox
            Tooltip({ content: "Move to inbox", position: "bottom-right" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.archive.box.default),
                }),
            ]),

            // Move to Junk
            Tooltip({ content: "Move to junk", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.archive.box.x),
                }),
            ]),

            // Delete
            Tooltip({ content: "Delete", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.trash),
                }),
            ]),

            // Snooze
            Tooltip({ content: "Snooze", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.clock),
                }),
            ])
        ]),

        Div({ class: "flex items-center gap-2" }, [
            // Reply
            Tooltip({ content: "Reply", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.arrows.left),
                }),
            ]),

            // Reply All
            Tooltip({ content: "Reply All", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.arrows.uturn.left),
                }),
            ]),

            // Forward
            Tooltip({ content: "Forward", position: "bottom" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.arrows.right),
                }),
            ]),

            // Separator
            Div({ class: "w-px h-5 bg-border mx-2" }),

            // More Options
            Tooltip({ content: "More options", position: "bottom-left" }, [
                Button({
                    variant: "icon",
                    icon: Icon({ size: "sm", class: "text-foreground" }, Icons.ellipsis.vertical),
                }),
            ])
        ])
    ])
);
