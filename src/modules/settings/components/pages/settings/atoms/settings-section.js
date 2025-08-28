import { Div, H2, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Form } from "@base-framework/ui/molecules";

/**
 * This will create the Title atom.
 *
 * @param {object} props
 * @returns {object}
 */
const Title = (props) => H2({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, props.title);

/**
 * SettingsSection
 *
 * This will create a settings section.
 *
 * @param {object} props
 * @returns {object}
 */
export const SettingsSection = Atom((props, children) => (
    Div({ class: `${props.class || '' }` }, [

        /**
         * Set up the title and description.
         */
        props.title && Title({ title: props.title }),
        props.description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, props.description),

        Form({ class: 'flex flex-col gap-y-12 py-10', submit: props.submit }, children)
    ])
));

export default SettingsSection;