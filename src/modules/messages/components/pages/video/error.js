import { Button, Div, Span } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create the error view.
 *
 * @param {object} props
 * @param {string} props.errorMessage - The error message to display
 * @param {Function} props.onRetry - Handler for retry
 * @param {Function} props.onExit - Handler for exiting
 * @returns {object}
 */
export const Error = ({ errorMessage, onRetry, onExit }) => (
    Div({
        class: 'flex flex-auto flex-col items-center justify-center space-y-6 bg-background/95'
    }, [
        // Error icon
        Div({
            class: 'w-16 h-16 rounded-full bg-red-100 flex items-center justify-center'
        }, [
            Icon({ size: 'lg', class: 'text-red-500' }, Icons.warning)
        ]),

        // Error message
        Div({ class: 'space-y-2 text-center max-w-md' }, [
            Span({ class: 'text-xl font-semibold text-red-500' }, 'Connection Error'),
            Span({ class: 'text-sm text-muted-foreground block' }, errorMessage)
        ]),

        // Action buttons
        Div({ class: 'flex space-x-4' }, [
            Button({
                class: 'w-12 h-12 rounded-full bg-primary hover:bg-primary text-primary-foreground flex items-center justify-center mt-8',
                click: onRetry
            }, [
                Icon({ size: 'sm' }, Icons.phone.oubound)
            ]),
            Button({
                class: 'w-12 h-12 rounded-full bg-muted hover:bg-muted text-muted-foreground flex items-center justify-center mt-8',
                click: onExit
            }, [
                Icon({ size: 'sm' }, Icons.x)
            ])
        ])
    ])
);