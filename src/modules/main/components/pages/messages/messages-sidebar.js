import { Div, H1, Header, Span } from "@base-framework/atoms";

/**
 * MessagesSidebar
 *
 * Mimics an email-app-style sidebar for chat.
 *
 * @returns {object}
 */
export const MessagesSidebar = () => (
    Div({ class: "flex-auto flex-col pb-12 hidden lg:flex p-6 border-r bg-sidebar max-w-[220px] h-full" }, [
        Header({ class: 'pb-4 px-2 flex flex-col' }, [
            H1({ class: "scroll-m-20 text-2xl font-bold tracking-tight" }, "Messages")
        ]),
        Div({ class: "flex flex-auto flex-col divide-y divide-border mt-4" }, [
            // If you want nav links or categories, place them here
            // E.g. "All", "Unread", "Archived", etc.
            Span({ class: "py-2 text-sm text-muted-foreground px-2" }, "Placeholder for chat categories")
        ])
    ])
);