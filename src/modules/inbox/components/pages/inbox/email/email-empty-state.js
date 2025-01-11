import { Div, H2, P } from "@base-framework/atoms";
import { Button, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create the EmailEmptyState organism.
 *
 * @returns {object}
 */
export const EmailEmptyState = () => (
    Div({ class: 'm-4 mt-8 p-4 border rounded-md items-center justify-center text-center' }, [
        Div({ class: 'flex-none max-w-12 mx-auto mt-8 mb-4' }, [
            Icon({ size: "xl" }, Icons.document.text)
        ]),
        H2({ class: 'text-xl font-semibold text-muted-foreground text-center' }, 'Nothing to see here.'),
        Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
            P('This view is empty. Click on a message is the list to view it or get started by creating a new message.')
        ]),
        Button({ variant: 'outline', class: 'my-8' }, 'Create a Message')
    ])
);

export default EmailEmptyState;