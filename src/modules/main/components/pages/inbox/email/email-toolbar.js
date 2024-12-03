import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icon } from "@components/atoms/icon.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import { BackButton } from "@components/organisms/overlays/overlay.js";

/**
 * Toolbar for Email Actions.
 *
 * @returns {object}
 */
export const EmailToolbar = () => (
    Div({ class: "flex items-center justify-between border-b pb-2" }, [
        Div({ class: 'flex lg:hidden' }, [
            BackButton({
                margin: 'm-0 ml-0'
            })
        ]),
        Div({ class: "hidden lg:flex items-center gap-2" }, [
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
                    click: () =>
                    {
                        new Confirmation({
                            icon: Icons.trash,
                            title: 'Delete Message',
                            description: 'Are you sure you want to delete this message?',
                            confirmTextLabel: 'Delete',
                            confirmed: () => app.notify({
                                type: "success",
                                title: "Email Deleted",
                                description: "The email has been deleted.",
                                icon: Icons.check
                            })
                        }).open()
                    }
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

        Div({ class: "hidden lg:flex items-center gap-2" }, [
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
