import { Div, Textarea } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";

/**
 * EmailComposer
 *
 * A styled email composer with a textarea and send button.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const EmailComposer = ({ placeholder = "Write a reply here...", charLimit = 1500 }) => (
    Div({ class: "fadeIn pt-4" }, [
        Div({ class: "relative flex flex-row border rounded-lg p-2" }, [
            // Textarea for reply
            Textarea({
                class: "flex-grow border-none bg-transparent resize-none focus:outline-none focus:ring-0 text-foreground placeholder-muted-foreground",
                placeholder
            }),
            // Character counter and send button
            Div({ class: "flex justify-between items-center pt-2 mt-2" }, [
                Button({
                    variant: "icon",
                    onClick: () => console.log("Send email"),
                    icon: Icons.airplane,
                    class: "text-foreground hover:text-accent",
                }),
            ]),
        ]),
    ])
);