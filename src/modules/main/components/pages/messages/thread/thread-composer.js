import { Div, Textarea } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";

/**
 * ThreadComposer
 *
 * Similar to the email composer, but for chat:
 * - text area
 * - mic icon
 * - send button
 *
 * @class
 */
export const ThreadComposer = Jot(
{
    /**
     * The state includes a charCount, charLimit if needed.
     *
     * @returns {object}
     */
    state()
    {
        return {
            charCount: 0,
            charLimit: 3000,
        };
    },

    /**
     * Render the composer
     *
     * @returns {object}
     */
    render()
    {
        const updateCharCount = (e) =>
        {
            this.state.charCount = e.target.value.length;
        };

        return Div({ class: "p-3 border-t bg-background" }, [
            Div({ class: "relative flex items-center gap-2 bg-surface rounded-md p-2" }, [
                // Mic / voice icon
                Button({
                    variant: "icon",
                    icon: Icons.microphone,
                    class: "text-foreground hover:text-accent",
                    click: () => console.log("Recording audio!")
                }),
                // Text area
                Textarea({
                    class: "flex-1 border-none bg-transparent resize-none focus:outline-none text-sm text-foreground placeholder-muted-foreground p-1",
                    placeholder: this.placeholder || "Type something...",
                    input: updateCharCount,
                }),
                // Send button
                Button({
                    variant: "icon",
                    icon: Icons.airplane,
                    class: "text-foreground hover:text-primary",
                    click: () => console.log("Message sent!")
                })
            ])
        ]);
    }
});