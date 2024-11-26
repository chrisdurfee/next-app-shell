import { A, Div, P, Span } from "@base-framework/atoms";
import { DateTime, Jot } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * Skeleton for Inbox Message Item while loading.
 *
 * @returns {object}
 */
const InboxMessageSkeleton = () => (
    Div({ class: "flex flex-col flex-auto w-full rounded-md space-y-3" }, [
        Skeleton({ width: "w-3/4", height: "h-5", class: "rounded" }), // Skeleton for name
        Skeleton({ width: "w-full", height: "h-4", class: "rounded" }), // Skeleton for subject
        Skeleton({ width: "w-1/2", height: "h-4", class: "rounded" }), // Skeleton for time
        Div({ class: "flex space-x-2 mt-2" }, [
            Skeleton({ width: "w-10", height: "h-4", class: "rounded" }), // Tag 1 skeleton
            Skeleton({ width: "w-12", height: "h-4", class: "rounded" }), // Tag 2 skeleton
        ])
    ])
);

/**
 * This will create the time time atom.
 *
 * @param {string} time
 * @returns {object}
 */
const Time = (time) => (
    Span({ class: "ml-auto text-xs text-foreground" }, [
        new DynamicTime({
            dateTime: time,
            filter(date)
            {
                // convert to local time
                const localTime = DateTime.getLocalTime(date, true);
                return DateTime.getTimeFrame(localTime);
            }
        })
    ])
);

/**
 * This will create the unread indicator atom.
 *
 * @returns {object}
 */
const UnreadIndicator = () => Span({
    class: "w-2 h-2 bg-blue-500 rounded-full",
    ariaLabel: "Unread message indicator"
});

/**
 * This will create the tag atom.
 *
 * @param {string} tag
 * @returns {object}
 */
const Tag = (tag) => Span({ class: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" }, tag);

/**
 * InboxMessageItem
 *
 * Displays the skeleton placeholder while the message loads.
 *
 * @class
 */
export const InboxMessageItem = Jot(
{
    /**
     * This will set up the state.
     *
     * @returns {object}
     */
    state: { loaded: false },

    /**
     * This will render the InboxMessageItem component.
     *
     * @returns {object}
     */
    render()
    {
        const { message } = this;

        // Simulate loading with a timeout
        const DELAY = 1500;
        setTimeout(() => this.state.loaded = true, DELAY);

        return Div({
            class: "flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            onState: ["loaded", (loaded) =>
            {
                const route = this.parent.route;

                return !loaded
                    ? InboxMessageSkeleton()
                    : A({ class: 'flex flex-auto flex-col w-full gap-2', href: `inbox/${route.page}/${message.id}` }, [
                        Div({ class: "flex w-full flex-col gap-1" }, [
                            Div({ class: 'flex items-center justify-between' }, [
                                Div({ class: "flex items-center gap-2" }, [
                                    Span({ class: "font-semibold text-base text-foreground" }, message.name),
                                    !message.read && UnreadIndicator(),
                                ]),
                                Time(message.time),
                            ]),
                            Div({ class: "text-sm font-medium text-muted-foreground" }, message.subject),
                        ]),
                        P({ class: "line-clamp-2 text-sm text-muted-foreground" }, message.content),
                        Div({
                            class: "flex flex-wrap gap-2 mt-2",
                            map: [message.tags, Tag],
                        }),
                    ]);
            }],
        });
    },
});