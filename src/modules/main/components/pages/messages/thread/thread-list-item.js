import { A, Div, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { StaticStatusIndicator } from "@components/molecules/avatars/static-status-indicator.js";
import { TimeFrame } from "@components/molecules/date-time/time-frame.js";

/**
 * ThreadListItemSkeleton
 *
 * A Tailwind-based skeleton placeholder matching the new design:
 * - Round avatar skeleton on the left
 * - Two lines of text and a small time skeleton on the right
 */
const ThreadListItemSkeleton = () =>
    Div({ class: "flex items-center gap-3 p-4 lg:p-5 hover:bg-muted rounded-md" }, [
        Skeleton({ shape: "circle", width: "w-12", height: "h-12", class: "flex-none" }),
        Div({ class: "flex flex-col flex-1 gap-1" }, [
            Skeleton({ width: "w-1/2", height: "h-4", class: "rounded" }),  // Name
            Skeleton({ width: "w-2/3", height: "h-3", class: "rounded mt-1" })   // Message snippet
        ]),
        Skeleton({ width: "w-10", height: "h-3", class: "rounded" })        // Timestamp
    ]);

/**
 * ThreadListItem
 *
 * A list item showing an avatar, user name, last message snippet, status indicator,
 * unread count, and time. Uses a skeleton while loading.
 *
 * @class
 */
export const ThreadListItem = Jot(
{
    state: { loaded: false },

    /**
     * Renders the final item or skeleton.
     *
     * @returns {object}
     */
    render()
    {
        const msg = this.message;
        const route = this.parent.parent.route;

        // Simulate loading
        setTimeout(() => this.state.loaded = true, 500);

        return Div({
            class: "transition-all",
            onState: ["loaded", (loaded) =>
            {
                if (!loaded)
                {
                    return ThreadListItemSkeleton();
                }

                return A({
                    href: `messages/${route.page}/${msg.id}`,
                    class: `
                        flex items-center gap-3 p-4 lg:p-5 rounded-md hover:bg-muted/50
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                    `,

                    /**
                     * This wil add the selected class to the message item
                     * when the message id matches the route id.
                     */
                    onSet: [route, "messageId", {
                        'bg-accent/50': msg.id.toString()
                    }],
                }, [
                    // Avatar + status
                    Div({ class: "relative flex-none" }, [
                        Avatar({
                            src: msg.avatar,
                            alt: msg.sender,
                            fallbackText: msg.sender,
                            size: "md",
                        }),
                        Div({ class: "absolute bottom-0 right-0" }, [
                            StaticStatusIndicator(msg.status)
                        ])
                    ]),

                    // Text content
                    Div({ class: "flex flex-col flex-1" }, [
                        Div({ class: "flex items-center justify-between" }, [
                            P({ class: "font-semibold text-base text-foreground" }, msg.sender),
                            Div({ class: "text-xs text-muted-foreground" },
                                TimeFrame({ dateTime: msg.time })
                            )
                        ]),
                        Div({ class: "flex items-center justify-between mt-1" }, [
                            P({ class: "text-sm text-muted-foreground line-clamp-1" }, msg.content),

                            // Unread count badge if any
                            (msg.unreadCount > 0) && Div({
                                class: "ml-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center"
                            }, msg.unreadCount.toString())
                        ])
                    ])
                ]);
            }]
        });
    }
});