import { Div, H2, P } from "@base-framework/atoms";
import {  Button  } from "@base-framework/ui/atoms";

/**
 * ThreadEmptyState
 *
 * Shown when no specific message is selected.
 *
 * @returns {object}
 */
export const ThreadEmptyState = () =>
    Div({ class: 'm-4 mt-8 p-4 border rounded-md items-center justify-center text-center' }, [
        H2({ class: 'text-xl font-semibold text-muted-foreground text-center' }, "No Thread Selected"),
        P('Select a message from the list to view the conversation.'),
        Button({ variant: 'outline', class: 'my-8' }, 'Start New Thread')
    ]);