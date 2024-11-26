import { Div, P, Span } from "@base-framework/atoms";
import { DateTime, Jot } from "@base-framework/base";
import { DynamicTime } from "@base-framework/organisms";
import { Skeleton } from "@components/atoms/skeleton.js";

/**
 * Skeleton for Inbox Message Item while loading.
 *
 * @returns {object}
 */
const InboxMessageSkeleton = () => (
    Div({ class: "p-4 border rounded-md flex flex-col space-y-2 bg-muted" }, [
        Skeleton({ width: "w-3/4", height: "h-6", class: "rounded" }), // Skeleton for name
        Skeleton({ width: "w-full", height: "h-4", class: "rounded" }), // Skeleton for subject
        Skeleton({ width: "w-1/2", height: "h-4", class: "rounded" }), // Skeleton for time
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
export const InboxMessageItem = Jot({
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
    render() {
        const { message } = this;

        // Simulate loading with a timeout
        setTimeout(() => this.state.loaded = true, 500);

        return Div({
            class: "flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            onState: ["loaded", (loaded) => {
                return !loaded
                    ? InboxMessageSkeleton()
                    : Div({ class: 'flex flex-auto flex-col w-full gap-2' }, [
                        Div({ class: "flex w-full flex-col gap-1" }, [
                            Div({ class: 'flex items-center' }, [
                                Div({ class: "flex items-center gap-2" }, [
                                    Span({ class: "font-semibold text-base text-foreground" }, message.name),
                                ]),
                                Time(message.time),
                            ]),
                            Div({ class: "text-xs font-medium" }, message.subject),
                        ]),
                        P({ class: "line-clamp-2 text-sm text-muted-foreground" }, message.content),
                        Div({
                            class: "flex space-x-2 mt-2",
                            map: [message.tags, Tag],
                        }),
                    ]);
            }],
        });
    },
});