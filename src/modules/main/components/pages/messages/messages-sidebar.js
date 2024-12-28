import { A, Div, H3, Header, Span, UseParent } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Avatar, StaticStatusIndicator } from "@base-framework/ui/molecules";
import { MESSAGES_THREADS } from "./messages-threads.js";

/**
 * Sidebar row item to display the user's name and status,
 * then navigate on click.
 *
 * @param {object} thread - The thread object { id, sender, status, ... }
 * @returns {object}
 */
const SidebarRowItem = (route) =>
{
    return (thread) =>
    {
        return A({
            class: "flex items-center justify-between p-2 rounded-md hover:bg-muted/50 cursor-pointer",
            href: `messages/all/${thread.id}`,
            onSet: [route, "messageId", {
                'bg-muted/50': thread.id.toString()
            }],
        },
        [
            Div({ class: "flex items-center gap-2" }, [
                Div({ class: "relative flex-none" }, [
                    Avatar({
                        src: thread.avatar,
                        alt: thread.sender,
                        fallbackText: thread.sender,
                        size: "sm",
                    }),
                    Div({ class: "absolute bottom-0 right-0" }, [
                        StaticStatusIndicator(thread.status)
                    ])
                ]),
                Span({ class: "text-sm font-medium" }, thread.sender)
            ])
        ]);
    };
};

/**
 * MessagesSidebar
 *
 * A sidebar that lists all threads from MESSAGES_THREADS by name & status.
 * Clicking an item navigates to that thread’s detail.
 *
 * @returns {object}
 */
export const MessagesSidebar = () =>
    Div({ class: "flex-auto flex-col pb-12 hidden lg:flex p-6 border-l bg-sidebar w-full max-w-[320px] h-full" },
    [
        Header({ class: "pb-4 px-2 flex flex-col" }, [
            H3({ class: "scroll-m-20 text-lg font-bold tracking-tight" }, "Connections")
        ]),
        UseParent(({ route }) =>
        {
            // The list of users/threads
            return new List({
                key: 'id',
                items: MESSAGES_THREADS,
                class: "flex flex-col space-y-1 mt-4",
                rowItem: SidebarRowItem(route)
            });
        })
    ]);