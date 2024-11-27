import { Div, P } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { INBOX_MESSAGES } from "../inbox-messages.js";
import { EmailComposer } from "./email-composer.js";
import { EmailEmptyState } from "./email-empty-state.js";
import { EmailHeader } from "./email-header.js";
import { EmailToolbar } from "./email-toolbar.js";

/**
 * Skeleton for Email Details while loading.
 *
 * @returns {object}
 */
const EmailDetailSkeleton = () => (
    Div({ class: "flex flex-col gap-4 p-4" }, [
        Div({ class: "flex items-center gap-4" }, [
            Skeleton({ width: "w-12", height: "h-12", shape: "circle" }),
            Div({ class: "flex flex-col gap-2 flex-1" }, [
                Skeleton({ width: "w-1/2", height: "h-6", class: "rounded" }),
                Skeleton({ width: "w-1/3", height: "h-4", class: "rounded" }),
            ]),
        ]),
        Skeleton({ width: "w-full", height: "h-20", class: "rounded" }),
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
            class: "w-full flex flex-auto flex-col p-4 space-y-4",

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
                    : Div({ class: "flex flex-auto flex-col space-y-4" }, [

                        EmailToolbar(message),

                        // Header Section
                        EmailHeader(message),

                        // Content Section
                        Div({ class: 'flex flex-auto flex-col overflow-y-auto' }, [
                            P({ class: "text-sm text-foreground mt-2 pb-40" }, message.content),
                        ]),

                        // Composer Section
                        EmailComposer({ placeholder: `Reply to ${message.name}...` }),
                    ]);
                },
            ],
        });
    },
});
