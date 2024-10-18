import { Code, Div, Pre } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { ButtonTab } from "../../../../components/organisms/tabs/button-tab.js";

/**
 * This will create a code card.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
export const CodeCard = Atom((props, children) => (
    Pre({ class: 'flex p-4 min-h-[350px] max-h-[650px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces' }, [
        Code({ class: 'font-mono text-sm' }, children)
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

/**
 * This will create a tab content.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const TabContent = Atom((props, children) => (
    Div({ class: 'py-4' }, children)
));

/**
 * This will create a preview tab.
 *
 * @param {object} props
 * @returns {object}
 */
export const PreviewTab = (props) => (
    new ButtonTab({
        class: 'mt-4 max-w-[400px]',
        options: [
            {
                label: 'Preview',
                value: 'preview',
                layout: TabContent([
                    PreviewCard(props.preview)
                ])
            },
            {
                label: 'Code',
                value: 'code',
                layout: TabContent([
                    CodeCard(props.code)
                ])
            }
        ]
    })
);