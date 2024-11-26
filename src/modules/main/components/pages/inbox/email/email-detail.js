import { Button, Div, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { INBOX_MESSAGES } from "../inbox-messages.js";
import { EmailEmptyState } from "./email-empty-state.js";
import { EmailHeader } from "./email-header.js";

/**
 * Skeleton for Email Details while loading.
 *
 * @returns {object}
 */
const EmailDetailSkeleton = () => (
    Div({ class: "flex flex-col gap-4 p-4" }, [
        Div({ class: "flex items-center gap-4" }, [
            Skeleton({ width: "w-12", height: "h-12", shape: "circle" }), // Avatar skeleton
            Div({ class: "flex flex-col gap-2 flex-1" }, [
                Skeleton({ width: "w-1/2", height: "h-6", class: "rounded" }), // Subject skeleton
                Skeleton({ width: "w-1/3", height: "h-4", class: "rounded" }), // Reply-To skeleton
            ]),
        ]),
        Skeleton({ width: "w-full", height: "h-20", class: "rounded" }), // Content skeleton
    ])
);

/**
 * This will get the message by id.
 *
 * @param {string} routeId
 * @returns {object|null}
 */
const getMessage = (routeId) => INBOX_MESSAGES.find((msg) => msg.id.toString() === routeId) || null;

/**
 * EmailDetail
 *
 * Dynamically displays email details based on the selected message.
 *
 * @returns {object}
 */
export const EmailDetail = Jot(
{
    /**
     * This will set up the state.
     *
     * @returns {object}
     */
    state: { loaded: false },

    /**
     * This will render the EmailDetail component.
     *
     * @returns {object}
     */
    render()
    {
        const route = this.parent.route;
        const message = getMessage(route.messageId);

        // Simulate loading with a timeout
        const DELAY = 500;
        setTimeout(() => (this.state.loaded = true), DELAY);

        return Div({
            class: "w-full flex flex-col p-4 space-y-4",

            /**
             * This will render the skeleton and message item after
             * the message is loaded.
             */
            onState: [
                "loaded",
                (loaded) =>
                {
                    if (!message)
                    {
                        return EmailEmptyState();
                    }

                    return !loaded
                    ? EmailDetailSkeleton()
                    : Div({ class: "space-y-4" }, [
                        // Header Section
                        EmailHeader(message),

                        // Content Section
                        P({ class: "text-sm text-foreground mt-2" }, message.content),

                        // Action Buttons
                        Div({ class: "flex space-x-2 mt-4" }, [
                            Button({ class: "bg-muted text-sm px-4 py-2 rounded" }, "Reply"),
                            Button({ class: "bg-muted text-sm px-4 py-2 rounded" }, "Forward"),
                        ]),
                    ]);
                },
            ],
        });
    },
});
