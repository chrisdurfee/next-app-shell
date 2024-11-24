import { Div, Footer, H2, Header, Dialog as MainDialog, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import "../../../css/components/molecules/modals/modal.css";

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
    MainDialog({
            class: `fixed pullUpIn z-30 w-[98%] md:w-full max-w-lg border bg-popover text-foreground shadow-lg duration-200
                rounded-lg flex flex-auto flex-col
                bottom-4 top-auto md:m-auto md:bottom-auto md:top-1/2 md:left-0 md:right-0 md:-translate-y-1/2`,
            click: props.click,
            aria: { expanded: ['open'] }
        }, [
        Div({ class: 'flex flex-auto flex-col gap-4 p-6 pb-12 md:pb-6' }, [
            Div({ class: 'flex flex-auto flex-col space-y-2' }, [
                DialogHeader(props),
                props.description && P({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, props.description),
                Div({ class: 'flex flex-auto flex-col text-sm text-muted-foreground' }, children),
            ]),
            Footer({ class: 'flex flex-col-reverse sm:flex-row sm:justify-end mt-6 gap-2 sm:gap-0 sm:space-x-2' }, props.buttons)
        ])
    ])
));