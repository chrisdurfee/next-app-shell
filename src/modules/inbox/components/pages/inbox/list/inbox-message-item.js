import { A, Div, P, Span } from "@base-framework/atoms";
import { Component, Jot } from "@base-framework/base";
import { Skeleton } from "@base-framework/ui/atoms";
import { TimeFrame } from "@base-framework/ui/molecules";

/**
 * Skeleton for Inbox Message Item while loading.
 *
 * @returns {object}
 */
const InboxMessageSkeleton = () => (
    Div({ class: "flex flex-col flex-auto w-full rounded-md space-y-3" }, [
        Skeleton({ width: "w-3/4", height: "h-6", class: "rounded" }), // Skeleton for name
        Skeleton({ width: "w-1/2", height: "h-5", class: "rounded" }), // Skeleton for subject
        Skeleton({ width: "w-full", height: "h-8", class: "rounded" }), // Skeleton for content
        Div({ class: "flex space-x-2 mt-4 pb-[1.5px]" }, [
            Skeleton({ width: "w-12", height: "h-5", class: "rounded" }), // Tag 1 skeleton
            Skeleton({ width: "w-14", height: "h-5", class: "rounded" }), // Tag 2 skeleton
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
        TimeFrame({
            dateTime: time
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
 * @type {typeof Component}
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
     * This will mark as read.
     *
     * @returns {void}
     */
    markRead()
    {
        // @ts-ignore
        let { message } = this;
        message = { ...message };

        if (!message.read)
        {
            message.read = true;
            // @ts-ignore
            this.parent.mingle([message]);
        }
    },

    /**
     * This will render the InboxMessageItem component.
     *
     * @returns {object}
     */
    render()
    {
        // @ts-ignore
        const message = this.message;
        // @ts-ignore
        const route = this.parent.parent.route;

        // Simulate loading with a timeout
        const DELAY = 500;
        // @ts-ignore
        setTimeout(() => this.state.loaded = true, DELAY);

        return Div({
            class: "flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-muted/50",

            /**
             * This wil add the selected class to the message item
             * when the message id matches the route id.
             */
            onSet: [route, "messageId", {
                'bg-muted/50': message.id.toString()
            }],

            /**
             * This will render the skeleton and message item after
             * the message is loaded.
             */
            onState: ["loaded", (loaded) =>
            {
                return !loaded
                    ? InboxMessageSkeleton()
                    // @ts-ignore
                    : A({ class: 'flex flex-auto flex-col w-full gap-2', href: `inbox/${route.page}/${message.id}`, click: () => this.markRead() }, [
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

export default InboxMessageItem;