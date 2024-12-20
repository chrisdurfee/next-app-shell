import { Div, Textarea } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Icons } from "@components/icons/icons.js";


/**
 * This will check if the count is over the limit.
 *
 * @param {number} count
 * @param {number} limit
 * @returns {boolean}
 */
const isOverLimit = (count, limit) => count > limit? true : null;

/**
 * This will display the character count.
 *
 * @returns {object}
 */
const TextCount = () => (
    Div({
        class: "text-xs text-muted-foreground",
    }, `[[charCount]]/[[charLimit]]`)
);

/**
 * This will create the send button.
 *
 * @returns {object}
 */
const SendButton = () => (
    Div({ class: "flex justify-between items-center mt-3" }, [
        Button({
            variant: "icon",
            click: () => console.log("Send email"),
            icon: Icons.airplane,
            class: "text-foreground hover:text-accent"
        })
    ])
);

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
     * This will set the state object.
     *
     * @returns {object}
     */
    state()
    {
        return {
            charCount: 0,
            charLimit: this.charLimit ?? 5000,
            isOverLimit: false
        };
    },

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        const charLimit = this.state.charLimit;
        const updateCharCount = (e) =>
        {
            const text = e.target.value;
            const state = this.state;
            state.charCount = text.length;
            state.isOverLimit = (isOverLimit(text.length, charLimit));
        };

        return Div({ class: "fadeIn p-4 w-full lg:max-w-5xl m-auto" }, [
            Div({ class: "relative flex border rounded-lg p-3 bg-surface" }, [
                Div([
                    Button({
                        variant: "icon",
                        icon: Icons.microphone,
                        class: "text-foreground hover:text-accent",
                        click: () => console.log("Recording audio!")
                    })
                ]),
                // Textarea for reply
                Textarea({
                    class: "w-full border-none bg-transparent resize-none focus:outline-none focus:ring-0 text-sm text-foreground placeholder-muted-foreground",
                    placeholder: this.placeholder,
                    input: updateCharCount,
                    bind: this.bind
                }),
                Div({ class: 'flex flex-col items-end justify-end' }, [
                    TextCount(),
                    SendButton()
                ])
            ]),
        ]);
    }
});