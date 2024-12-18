import { Div, Img, Span } from "@base-framework/atoms";
import { Jot } from "@base-framework/base";
import { Skeleton } from "@components/atoms/skeleton.js";
import { Icons } from "@components/icons/icons.js";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { StaticStatusIndicator } from "@components/molecules/avatars/static-status-indicator.js";
import { TimeFrame } from "@components/molecules/date-time/time-frame.js";
import { MESSAGES_THREAD } from "../messages-thread.js";
import { ThreadComposer } from "./thread-composer.js";

/**
 * Finds all messages for a specific conversation.
 * For now, we treat MESSAGES_THREAD as a single conversation.
 */
const getConversation = (routeId) =>
    // If we had multiple threads, we’d filter by a threadId.
    // Here, we just return the entire array as the "conversation."
    MESSAGES_THREAD;

/**
 * HeaderSkeleton
 *
 * Skeleton for the conversation header while loading.
 */
const HeaderSkeleton = () =>
    Div({ class: "flex items-center gap-3 p-4 border-b" }, [
        Skeleton({ shape: "circle", width: "w-12", height: "h-12" }),
        Skeleton({ width: "w-32", height: "h-4" }),
        Skeleton({ width: "w-16", height: "h-4", class: "ml-auto" })
    ]);

/**
 * ThreadSkeleton
 *
 * Skeleton placeholders for the chat messages.
 */
const ThreadSkeleton = () =>
    Div({ class: "flex flex-col gap-2 p-4" }, [
        Skeleton({ width: "w-1/2", height: "h-8", class: "rounded" }),
        Skeleton({ width: "w-2/3", height: "h-8", class: "rounded self-end" }),
        Skeleton({ width: "w-1/4", height: "h-8", class: "rounded" }),
    ]);

/**
 * ThreadDetail
 *
 * Displays a conversation with a header and list of messages.
 */
export const ThreadDetail = Jot(
{
    state: { loaded: false },

    /**
     * Render the detail view.
     *
     * @returns {object}
     */
    render()
    {
        const conversation = getConversation(this.messageId);
        // If you had multiple threads, you'd filter by a "threadId" param.

        setTimeout(() => (this.state.loaded = true), 500);

        return Div({ class: "flex flex-auto flex-col w-full bg-background" },
        [
            // onState for skeleton logic
            Div({
                onState: [
                    "loaded",
                    (loaded) =>
                    {
                        if (!loaded)
                        {
                            return Div({}, [
                                HeaderSkeleton(),
                                ThreadSkeleton()
                            ]);
                        }

                        return Div({ class: "flex flex-col flex-auto" }, [
                            ConversationHeader(),
                            ConversationMessages({ conversation }),
                            new ThreadComposer({ placeholder: "Type something..." })
                        ]);
                    }
                ]
            })
        ]);
    }
});

/**
 * ConversationHeader
 *
 * A top bar: avatar, name, and right-side icons (call, video).
 */
const ConversationHeader = () =>
    Div({ class: "flex items-center gap-3 p-4 border-b" }, [
        // Left side avatar and name
        Div({ class: "relative" }, [
            Avatar({
                src: "https://example.com/avatar-frances.jpg",
                alt: "Frances Swann",
                fallbackText: "FS",
                size: "md"
            }),
            Div({ class: "absolute bottom-0 right-0" }, [
                StaticStatusIndicator("online") // or a dynamic status
            ])
        ]),
        // Name + "Pro" indicator
        Div({ class: "flex flex-col" }, [
            Span({ class: "font-semibold text-base text-foreground" }, "Frances Swann"),
            Span({ class: "text-xs text-primary" }, "PRO")
        ]),

        // Right side icons
        Div({ class: "ml-auto flex items-center gap-4" }, [
            Img({
                src: Icons.videoCamera,
                class: "w-5 h-5 cursor-pointer text-muted-foreground hover:text-foreground"
            }),
            Img({
                src: Icons.phone,
                class: "w-5 h-5 cursor-pointer text-muted-foreground hover:text-foreground"
            })
        ])
    ]);

/**
 * ConversationMessages
 *
 * Renders the actual chat bubble UI for each message (sent or received).
 *
 * @param {object} props
 * @param {array} props.conversation
 * @returns {object}
 */
const ConversationMessages = ({ conversation }) =>
    Div({ class: "flex flex-col flex-auto overflow-y-auto p-4 gap-4" },
    conversation.map((msg) => MessageBubble(msg)));

/**
 * MessageBubble
 *
 * A single message bubble.
 * - If direction is "sent", bubble on right. If "received", bubble on left.
 * - Might show audio wave, images, etc.
 *
 * @param {object} msg
 * @returns {object}
 */
const MessageBubble = (msg) =>
{
    const isSent = (msg.direction === "sent");
    const bubbleClasses = isSent
        ? "bg-primary text-primary-foreground self-end rounded-tr-none"
        : "bg-muted text-foreground self-start rounded-tl-none";

    return Div({ class: "flex flex-col max-w-[80%]" + (isSent ? " ml-auto" : " mr-auto") }, [
        // Name + time
        Div({ class: "mb-1 flex items-center" }, [
            Span({ class: "text-xs text-muted-foreground" }, isSent ? "You" : msg.sender),
            Span({ class: "text-xs text-muted-foreground ml-2" }, TimeFrame({ dateTime: msg.time }))
        ]),
        // The bubble
        Div({ class: `rounded-md p-3 ${bubbleClasses}` }, [
            msg.content && Span({ class: "text-sm" }, msg.content),
            msg.audioUrl && AudioBubble(msg.audioUrl, msg.audioDuration)
        ]),
        // Possibly a "sent for X credits" line
        (msg.credits >= 0) && Div({ class: "text-[11px] text-muted-foreground mt-1" },
            `Sent for ${msg.credits} credits | ${msg.sentTime}`
        )
    ]);
};

/**
 * AudioBubble
 *
 * Renders a fake audio player row for demonstration.
 *
 * @param {string} url
 * @param {string} duration
 * @returns {object}
 */
const AudioBubble = (url, duration) =>
    Div({ class: "flex items-center gap-3" }, [
        Div({ class: "bg-background p-2 rounded-md text-sm" }, [
            "Audio wave placeholder"
        ]),
        Span({ class: "text-xs" }, duration || "00:00")
    ]);
