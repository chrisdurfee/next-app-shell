import { Div, H5, I, P } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * Type styles mapping
 */
const typeStyles = {
    info: {
        borderColor: 'border-blue-500',
        bgColor: 'bg-blue-500/10',
        iconColor: 'text-blue-500'
    },
    warning: {
        borderColor: 'border-yellow-500',
        bgColor: 'bg-yellow-500/10',
        iconColor: 'text-yellow-500'
    },
    destructive: {
        borderColor: 'border-red-500',
        bgColor: 'bg-red-500/10',
        iconColor: 'text-red-500'
    },
    default: {
        borderColor: 'border',
        bgColor: 'bg-muted/10',
        iconColor: 'text-muted-foreground'
    }
};

/**
 * Alert Icon Atom
 *
 * @param {string} icon
 * @param {string} iconColor
 * @returns {object}
 */
const AlertIcon = (icon, iconColor) => (
    Div({ class: `flex items-center justify-center h-6 w-6 mr-3 ${iconColor}` }, [
        I({ html: icon })
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
export const Alert = Atom(({ title, description, icon, type = 'default' }) =>
{
    const { borderColor, bgColor, iconColor } = typeStyles[type] || typeStyles.default;

    return Div({ class: `flex items-start p-4 border rounded-lg ${bgColor} ${borderColor}` }, [

        // Icon and content
        icon && AlertIcon(icon, iconColor),

        Div({ class: 'flex flex-col' }, [
            AlertTitle(title),
            AlertDescription(description)
        ])
    ]);
});
