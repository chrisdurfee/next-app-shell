import { Div, H2, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Form } from "@components/molecules/form/form.js";

/**
 * This will create the Title atom.
 *
 * @param {object} props
 * @returns {object}
 */
const Title = (props) => H2({ class: 'text-2xl font-semibold' }, props.title);

/**
 * SettingsSection
 *
 * This will create a settings section.
 *
 * @param {object} props
 * @returns {object}
 */
export const SettingsSection = Atom((props, children) => (
    Div({ class: `space-y-6 ${props.class || '' }` }, [

        /**
         * Set up the title and description.
         */
        props.title && Title({ title: props.title }),
        props.description && P({ class: 'text-muted-foreground' }, props.description),

        Form({ submit: props.submit }, children)
    ])
));