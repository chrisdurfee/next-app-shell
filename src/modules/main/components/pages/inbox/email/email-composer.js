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
const isOverLimit = (count, limit) => count > limit;

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
            class: "text-foreground hover:text-accent",
            disabled: '[[isOverLimit]]',
        })
    ])
);

/**
 * EmailComposer
 *
 * A styled email composer with a textarea, character counter, and send button.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const EmailComposer = Jot(
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

        return Div({ class: "fadeIn pt-4" }, [
            Div({ class: "relative flex border rounded-lg p-3 bg-surface" }, [
                // Textarea for reply
                Textarea({
                    class: "w-full border-none bg-transparent resize-none focus:outline-none focus:ring-0 text-sm text-foreground placeholder-muted-foreground",
                    placeholder: this.placeholder,
                    input: updateCharCount,
                    bind: this.bind
                }),
                // Send button and character count
                Div({ class: 'flex flex-col items-end justify-end' }, [
                    TextCount(),
                    SendButton()
                ])
            ]),
        ]);
    }
});
