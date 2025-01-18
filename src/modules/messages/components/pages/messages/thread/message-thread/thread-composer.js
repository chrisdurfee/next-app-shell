import { Div, Textarea } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Form } from "@base-framework/ui/molecules";


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
    Div({ class: "flex justify-between" }, [
        Button({
            type: "submit",
            variant: "icon",
            click: () => console.log("Send email"),
            icon: Icons.airplane,
            class: "text-foreground hover:text-accent",
            onSet: ['empty', (empty, el) => el.disabled = empty]
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
 * @type {typeof Component} ThreadComposer
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
            empty: true,
            charCount: 0,
            // @ts-ignore
            charLimit: this.charLimit ?? 5000,
            isOverLimit: false
        };
    },

    /**
     * This will submit the form.
     *
     * @returns {void}
     */
    submit()
    {
        console.log('message sent');

        // @ts-ignore
        this.add(this.textarea.value);

        // @ts-ignore
        this.textarea.value = '';
        // @ts-ignore
        this.state.charCount = 0;
        // @ts-ignore
        this.state.isOverLimit = false;
        // @ts-ignore
        this.state.empty = true;
    },

    /**
     * This will check the submit.
     *
     * @param {object} e
     * @returns {void}
     */
    checkSubmit(e)
    {
        // @ts-ignore
        this.resizeTextarea();

        const keyCode = e.keyCode;
        if (keyCode === 13)
        {
            if (e.ctrlKey === true)
            {
                // @ts-ignore
                if (this.state.empty === true || this.state.isOverLimit === true)
                {
                    e.preventDefault();
                    e.stopPropagation();

                    app.notify({
                        icon: Icons.warning,
                        type: 'warning',
                        title: 'Missing Message',
                        description: 'Please enter a message.',
                    });

                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                // @ts-ignore
                this.submit();
            }
            else
            {
                // @ts-ignore
                this.resizeTextarea();
            }
        }
    },

    /**
     * This will resize the textarea.
     *
     * @returns {void}
     */
    resizeTextarea()
    {
        const startHeight = 48;
        let height = startHeight;

        // @ts-ignore
        if (this.textarea.value !== '')
        {
            // @ts-ignore
            const targetHeight = this.textarea.scrollHeight;
            height = (targetHeight > startHeight)? targetHeight : startHeight;
        }

        // @ts-ignore
        this.textarea.style = 'height:' + height + 'px;';
    },

    /**
     * This will render the component.
     *
     * @returns {object}
     */
    render()
    {
        // @ts-ignore
        const charLimit = this.state.charLimit;
        const updateCharCount = (e) =>
        {
            const text = e.target.value;
            // @ts-ignore
            const state = this.state;
            state.charCount = text.length;
            state.isOverLimit = (isOverLimit(text.length, charLimit));
            state.empty = text.length === 0;
        };

        return Div({ class: "fadeIn p-4 w-full lg:max-w-5xl m-auto" }, [
            // @ts-ignore
            Form({ class: "relative flex border rounded-lg p-3 bg-surface", submit: () => this.submit() }, [
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
                    cache: 'textarea',
                    // @ts-ignore
                    placeholder: this.placeholder,
                    input: updateCharCount,
                    // @ts-ignore
                    bind: this.bind,
                    required: true,
                    // @ts-ignore
                    keyup: (e) => this.checkSubmit(e)
                }),
                Div({ class: 'flex flex-col' }, [
                    //TextCount(),
                    SendButton()
                ])
            ]),
        ]);
    }
});