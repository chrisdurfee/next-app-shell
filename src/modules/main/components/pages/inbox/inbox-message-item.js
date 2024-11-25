import { Div, Span } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
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
            class: "p-4 border rounded-md flex flex-col space-y-2",
            onState: ["loaded", (loaded) => {
                return !loaded
                    ? InboxMessageSkeleton()
                    : Div({}, [
                        Div({ class: "flex justify-between items-center" }, [
                            Span({ class: "font-semibold text-base text-foreground" }, message.name),
                            Span({ class: "text-xs text-muted-foreground" }, message.time),
                        ]),
                        Div({ class: "text-sm font-medium text-muted mt-1" }, message.subject),
                        Div({
                            class: "flex space-x-2 mt-2",
                            map: [message.tags, (tag) => Span({ class: "bg-secondary px-2 py-1 rounded text-xs text-background" }, tag)],
                        }),
                    ]);
            }],
        });
    },
});