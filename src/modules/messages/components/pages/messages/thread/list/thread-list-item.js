import { A, Div, P } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Skeleton } from "@base-framework/ui/atoms";
import { Avatar, StaticStatusIndicator, TimeFrame } from "@base-framework/ui/molecules";

/**
 * ThreadListItemSkeleton
 *
 * A Tailwind-based skeleton placeholder for loading states:
 * - Round avatar skeleton on the left
 * - Two lines of text and a small time skeleton on the right
 */
const ThreadListItemSkeleton = () =>
    Div({ class: "flex items-center gap-3 p-4 lg:p-5 hover:bg-muted rounded-md" }, [
        Skeleton({ shape: "circle", width: "w-12", height: "h-12", class: "flex-none" }),
        Div({ class: "flex flex-col flex-1 gap-1" }, [
            Skeleton({ width: "w-1/2", height: "h-4", class: "rounded" }), // Name
            Skeleton({ width: "w-2/3", height: "h-3", class: "rounded mt-1" })  // Message snippet
        ]),
        Skeleton({ width: "w-10", height: "h-3", class: "rounded" })           // Timestamp
    ]);

/**
 * ThreadListItem
 *
 * A list item showing a single thread's summary:
 * - Avatar (with status)
 * - Sender's name
 * - Last message snippet (content)
 * - Unread count badge if any
 * - Timestamp
 *
 * Uses a skeleton while loading.
 *
 * @type {typeof Component}
 */
export const ThreadListItem = Jot(
{
    state: { loaded: false },

    /**
     * Render the thread list item.
     *
     * @returns {object}
     */
    render()
    {
        // @ts-ignore
        const thread = this.message;
        // @ts-ignore
        const route = this.parent.parent.route;

        // Simulate loading delay
        const LOADING_WAIT = 500;
        // @ts-ignore
        setTimeout(() => this.state.loaded = true, LOADING_WAIT);

        return Div({
            class: "transition-all",
            onState: ["loaded", (loaded) =>
            {
                if (!loaded)
                {
                    return ThreadListItemSkeleton();
                }

                return A({
                    href: `messages/${route.page}/${thread.id}`,
                    class: `
                        flex items-center gap-3 p-4 lg:p-5 rounded-md hover:bg-muted/50
                    `,

                    /**
                     * Highlights the current item if selected (based on route messageId).
                     */
                    onSet: [route, "messageId", {
                        'bg-muted/50': thread.id.toString()
                    }],
                }, [
                    // Avatar + status
                    Div({ class: "relative flex-none" }, [
                        Avatar({
                            src: thread.avatar,
                            alt: thread.sender,
                            fallbackText: thread.sender,
                            size: "md",
                        }),
                        Div({ class: "absolute bottom-0 right-0" }, [
                            StaticStatusIndicator(thread.status)
                        ])
                    ]),

                    // Text content
                    Div({ class: "flex flex-col flex-1" }, [
                        Div({ class: "flex items-center justify-between" }, [
                            P({ class: "font-semibold text-base text-foreground" }, thread.sender),
                            Div({ class: "text-xs text-muted-foreground" },
                                TimeFrame({ dateTime: thread.time })
                            )
                        ]),
                        Div({ class: "flex items-center justify-between mt-1" }, [
                            P({ class: "text-sm text-muted-foreground line-clamp-1" }, thread.content),

                            // Unread count badge if any
                            (thread.unreadCount > 0) && Div({
                                class: "ml-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center"
                            }, thread.unreadCount.toString())
                        ])
                    ])
                ]);
            }]
        });
    }
});