import { Div, H2, P } from "@base-framework/atoms";
import { Button, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * This will create the ListEmptyState organism.
 *
 * @param {object} props
 * @returns {object}
 */
export const ListEmptyState = ({ list }) => (
    Div({ class: 'm-4 mt-8 p-4 border rounded-md items-center justify-center text-center' }, [
        Div({ class: 'flex-none max-w-12 mx-auto mt-8 mb-4' }, [
            Icon({ size: "xl" }, Icons.inbox.default)
        ]),
        H2({ class: 'text-xl font-semibold text-muted-foreground text-center' }, 'I\'ve checked but found nothing.'),
        Div({ class: 'flex flex-auto flex-col items-center justify-center' }, [
            P('Let\'s get this thread started. Create a message to begin.')
        ]),
        Button({ variant: 'outline',  class: 'my-8' }, 'Create a Message')
    ])
);