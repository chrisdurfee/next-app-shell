import { A, Div, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { TimeFrame } from "@components/molecules/date-time/time-frame.js";

/**
 * ThreadListSkeleton
 *
 * Skeleton placeholder for the chat thread item while loading.
 *
 * @returns {object}
 */
const ThreadListSkeleton = () =>
    Div({ class: "flex flex-col flex-auto w-full rounded-md space-y-3 p-3" }, [
        Skeleton({ width: "w-3/4", height: "h-5", class: "rounded" }),
        Skeleton({ width: "w-1/2", height: "h-4", class: "rounded" }),
    ]);

/**
 * ThreadListItem
 *
 * Renders a single chat list item. Simulates loading via setTimeout + skeleton.
 *
 * @class
 */
export const ThreadListItem = Jot(
{
    state: { loaded: false },

    render()
    {
        const message = this.message;
        const route = this.parent.parent.route;

        // Simulate loading
        setTimeout(() => this.state.loaded = true, 500);

        return Div({
            class: "flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 transition-all hover:bg-muted",
            onSet: [route, "messageId", {
                "bg-accent": message.id.toString()
            }],
            onState: ["loaded", (loaded) =>
            {
                if (!loaded)
                {
                    return ThreadListSkeleton();
                }

                return A({
                    class: "flex flex-col w-full gap-1",
                    href: `messages/${route.page}/${message.id}`
                }, [
                    Div({ class: "flex items-center justify-between" }, [
                        P({ class: "font-semibold text-base text-foreground" }, message.sender),
                        Div({ class: "ml-auto text-xs text-foreground" }, [
                            TimeFrame({ dateTime: message.time })
                        ])
                    ]),
                    P({ class: "line-clamp-1 text-sm text-muted-foreground" }, message.content)
                ]);
            }]
        });
    }
});