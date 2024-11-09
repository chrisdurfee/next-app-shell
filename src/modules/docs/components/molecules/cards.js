import { Code, Div, Pre } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Icons } from "@components/icons/icons.js";

/**
 * This will create a code card.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const CodeCard = Atom((props, children) => (
    Pre({ class: 'flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer' }, [
        Code({ class: 'font-mono flex-auto text-sm text-wrap', click: () =>
        {
            navigator.clipboard.writeText(children[0].textContent);
            app.notify({
                title: "Code copied",
                description: "The code has been copied to your clipboard.",
                icon: Icons.clipboard.checked
            });
        }}, children)
    ])
));

/**
 * This will create a preview card.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const PreviewCard = Atom((props, children) => (
    Div({ class: 'flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-card' }, [
        Div({ class: 'preview flex w-full justify-center items-center' }, children)
    ])
));