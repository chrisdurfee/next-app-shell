import { Div, Footer, H2, Header, Dialog as MainDialog, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Icon } from "../../atoms/icon.js";

/**
 * Alert Icon Atom
 *
 * @param {string} icon
 * @param {string} iconColor
 * @returns {object}
 */
const DialogIcon = (icon, iconColor) => (
    Div({ class: `hidden md:flex items-start justify-center w-6 h-6 mr-3 ${iconColor}` }, [
        Icon({ size: 'lg' }, icon)
    ])
);

/**
 * This will create a dialog header.
 *
 * @param {object} props
 * @returns {object}
 */
const DialogHeader = ({ title }) => (
    Header({ class: 'flex flex-auto items-center' }, [
        H2({ class: 'text-lg font-semibold' }, title)
    ])
);

/**
 * This will create a dialog component.
 *
 * @param {object} props
 * @param {array} children
 * @returns {object}
 */
export const DialogContainer = Atom((props, children) => (
    MainDialog(
        {
            class: `fixed pullUpIn z-30 w-[98%] border md:w-full max-w-lg bg-popover text-foreground shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto inset-auto m-auto md:bottom-0 md:top-0 left-0 right-0 ${props.class}`,
            click: props.click,
            aria: { expanded: ['open'] }
        }, [
        Div({ class: 'flex flex-auto p-6 pb-12 md:pb-6' }, [
            // Icon and content
            props.icon && DialogIcon(props.icon, props.iconColor),

            Div({ class: 'flex flex-auto flex-col gap-4' }, [
                Div({ class: 'flex flex-auto flex-col space-y-2' }, [
                    DialogHeader(props),
                    props.description && P({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, props.description),
                    Div({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, children),
                ]),
                props.buttons && Footer({ class: 'flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2' }, props.buttons)
            ])
        ])
    ])
));