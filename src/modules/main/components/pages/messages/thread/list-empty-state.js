import { Div, H2, P } from "@base-framework/atoms";
import {  Button  } from "@base-framework/ui/atoms";

/**
 * ListEmptyState
 *
 * Shown when no messages match the filter or route.
 *
 * @param {object} props
 * @param {string} props.filter
 * @returns {object}
 */
export const ListEmptyState = ({ filter }) =>
    Div({ class: "m-4 mt-8 p-4 border rounded-md items-center justify-center text-center" }, [
        H2({ class: "text-xl font-semibold text-muted-foreground text-center" }, "No Chats Found"),
        P(`We couldn't find any messages in "${filter}" list.`),
        Button({ variant: 'outline', class: 'my-8' }, 'Start a new chat')
    ]);