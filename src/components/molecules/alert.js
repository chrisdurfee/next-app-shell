import { Div, H5, I, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * Alert Icon Atom
 *
 * @param {string} icon
 * @returns {object}
 */
const AlertIcon = (icon) => (
    Div({ class: 'flex items-center justify-center h-6 w-6 mr-3' }, [
        I({ html: icon})
    ])
);

/**
 * AlertTitle Atom
 *
 * @param {string} title
 * @returns {object}
 */
const AlertTitle = (title) => (
    H5({ class: 'font-semibold' }, title)
);

/**
 * AlertDescription Atom
 *
 * @param {string} description
 * @returns {object}
 */
const AlertDescription = (description) => (
    P({ class: 'text-sm text-muted-foreground' }, description)
);

/**
 * Alert Component
 *
 * @param {object} props
 * @returns {object}
 */
export const Alert = Atom(({ title, description, icon }) => {
    return Div({ class: 'flex items-start p-4 border rounded-lg bg-muted/10 border-muted-foreground/20' }, [
        icon && AlertIcon(icon),
        Div({ class: 'flex flex-col' }, [
            AlertTitle(title),
            AlertDescription(description)
        ])
    ]);
});