import { Div } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { MESSAGES_THREAD } from "../messages-thread.js";
import { ChatComposer } from "./chat-composer.js";

/**
 * getThreadMessage
 *
 * Finds a message by its ID in MESSAGES_THREAD (like an email detail).
 *
 * @param {string} routeId
 * @returns {object|null}
 */
const getThreadMessage = (routeId) =>
    MESSAGES_THREAD.find((msg) => msg.id.toString() === routeId) || null;

/**
 * ThreadDetailSkeleton
 *
 * Skeleton placeholder while loading the chat detail.
 *
 * @returns {object}
 */
const ThreadDetailSkeleton = () =>
    Div({ class: "flex flex-col gap-4 p-4" }, [
        // Chat bubble skeleton
        Skeleton({ width: "w-1/3", height: "h-10", class: "rounded" }),
        Skeleton({ width: "w-2/3", height: "h-10", class: "rounded self-end" }),
        Skeleton({ width: "w-1/4", height: "h-10", class: "rounded" })
    ]);

/**
 * ThreadDetail
 *
 * Displays a single message in chat style.
 *
 * @class
 */
export const ThreadDetail = Jot(
{
    state: { loaded: false },

    render()
    {
        const msg = getThreadMessage(this.messageId);

        // Simulate loading
        setTimeout(() => (this.state.loaded = true), 600);

        return Div({
            class: "w-full flex flex-auto flex-col space-y-4",
            onState: [
                "loaded",
                (loaded) =>
                {
                    if (!msg)
                    {
                        return "No message found.";
                    }

                    return !loaded
                    ? ThreadDetailSkeleton()
                    : Div({ class: "flex flex-auto flex-col space-y-4 max-h-screen p-4" }, [
                        Div({ class: "flex flex-col gap-4 overflow-y-auto pb-40" }, [
                            // Chat bubble approach:
                            Div({ class: "bg-muted p-2 rounded-md self-start" }, msg.content),
                            msg.image && Div({ class: "bg-muted p-2 rounded-md self-start" }, [
                                // Show image
                                // e.g. <img src={msg.image} />
                                // but for demonstration:
                                Div(`Image: ${msg.image}`)
                            ])
                        ]),

                        // Composer at bottom
                        new ChatComposer({
                            placeholder: `Reply to ${msg.sender}...`
                        }),
                    ]);
                }
            ]
        });
    }
});