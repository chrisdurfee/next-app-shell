import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Textarea } from "@components/atoms/form/input.js";
import { Icons } from "@components/icons/icons.js";

/**
 * EmailComposer
 *
 * A simple email composer with a text area and send button.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const EmailComposer = ({ placeholder = "Reply..." }) => (
    Div({ class: "border-t pt-4 space-y-4" }, [
        // Input for the reply content
        Textarea({
            placeholder,
        }),
        // Send button
        Div({ class: "flex justify-end space-x-2" }, [
            Button({ variant: "withIcon", onClick: () => console.log("Send email"), icon: Icons.airplane }, "Send"),
        ]),
    ])
);