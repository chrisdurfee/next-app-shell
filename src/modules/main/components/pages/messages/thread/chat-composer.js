import { Div, Textarea } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";

/**
 * ChatComposer
 *
 * A minimal chat text area with a send button, similar to EmailComposer.
 *
 * @class
 */
export const ChatComposer = Jot(
{
    state()
    {
        return {
            charCount: 0,
            charLimit: this.charLimit ?? 1500
        };
    },

    render()
    {
        const updateCharCount = (e) =>
        {
            this.state.charCount = e.target.value.length;
        };

        return Div({ class: "pt-2 border-t" }, [
            Div({ class: "relative flex p-2 bg-surface" }, [
                Textarea({
                    class: "flex-1 border-none bg-transparent resize-none focus:outline-none text-sm text-foreground placeholder-muted-foreground p-2",
                    placeholder: this.placeholder || "Type your message...",
                    input: updateCharCount,
                }),
                Button({
                    variant: "icon",
                    icon: Icons.airplane,
                    class: "text-foreground hover:text-accent ml-2",
                    click: () => console.log("Message Sent!")
                })
            ])
        ]);
    }
});