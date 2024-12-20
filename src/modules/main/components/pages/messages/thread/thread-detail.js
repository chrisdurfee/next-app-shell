import { Div, OnState, Span } from "@base-framework/atoms";
import { DateTime, Jot } from "@base-framework/base";
import { List } from "@base-framework/organisms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Skeleton } from "@components/atoms/skeleton.js";
import { Icons } from "@components/icons/icons.js";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { StaticStatusIndicator } from "@components/molecules/avatars/static-status-indicator.js";
import { TimeFrame } from "@components/molecules/date-time/time-frame.js";
import { BackButton } from "@components/organisms/overlays/overlay.js";
import { MESSAGES_THREADS } from "../messages-threads.js";
import { ThreadComposer } from "./thread-composer.js";

/**
 * Finds the thread object for a given threadId.
 *
 * @param {string|number} threadId - The ID of the selected thread.
 * @returns {object|null} The full thread object or null if not found.
 */
const getThreadById = (threadId) =>
{
    const idNum = parseInt(threadId, 10);
    return MESSAGES_THREADS.find((t) => t.id === idNum) || null;
};

/**
 * HeaderSkeleton
 *
 * Skeleton for the conversation header while loading.
 *
 * @returns {object}
 */
const HeaderSkeleton = () =>
    Div({ class: "flex items-center p-4 border-b" }, [
        Div({ class: 'flex flex-auto items-center gap-3 lg:max-w-5xl m-auto' }, [
            Div({ class: "flex lg:hidden" }, [
                Skeleton({ width: "w-10", height: "h-10" })
            ]),
            Skeleton({ shape: "circle", width: "w-12", height: "h-12" }),
            Skeleton({ width: "w-32", height: "h-4" }),
            Skeleton({ width: "w-16", height: "h-4", class: "ml-auto" })
        ])
    ]);

/**
 * ThreadSkeleton
 *
 * Skeleton placeholders for the chat messages.
 *
 * @returns {object}
 */
const ThreadSkeleton = () =>
    Div({ class: "flex flex-col gap-4 w-full h-full max-w-none lg:max-w-5xl m-auto p-4" }, [
        Skeleton({ width: "w-1/2", height: "h-8", class: "rounded" }),
        Skeleton({ width: "w-2/3", height: "h-8", class: "rounded self-end" }),
        Skeleton({ width: "w-1/4", height: "h-8", class: "rounded" }),
    ]);

/**
 * ThreadDetail
 *
 * Displays a conversation with a header and list of messages based on the new structure:
 * Each thread object has top-level fields for the sender/avatar and a .thread array for messages.
 *
 * @class
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
        // Get the full thread object by messageId
        const currentThread = getThreadById(this.messageId);

        const LOADING_DELAY = 500;
        setTimeout(() => (this.state.loaded = true), LOADING_DELAY);

        return Div({ class: "flex flex-auto flex-col w-full min-h-screen bg-background" },
        [
            OnState("loaded", (loaded) =>
            {
                if (!loaded || !currentThread)
                {
                    return Div([
                        HeaderSkeleton(),
                        ThreadSkeleton()
                    ]);
                }

                return Div({ class: "flex flex-col flex-auto" }, [
                    ConversationHeader(currentThread),
                    ConversationMessages(currentThread),
                    new ThreadComposer({ placeholder: "Type something..." })
                ]);
            })
        ]);
    }
});

/**
 * ConversationHeader
 *
 * A top bar: avatar, name, and right-side icons (call, video).
 * Now uses `thread` object fields: avatar, sender, status, etc.
 *
 * @param {object} thread - The full thread object.
 * @returns {object}
 */
const ConversationHeader = (thread) =>
    Div({ class: "flex items-center p-4 border-b" }, [
        Div({ class: 'flex flex-auto items-center gap-3 lg:max-w-5xl m-auto' }, [
            // Left side avatar + status
            Div({ class: 'flex lg:hidden' }, [
                BackButton({
                    margin: 'm-0 ml-0',
                    backUrl: 'messages',
                })
            ]),
            Div({ class: "relative" }, [
                Avatar({
                    src: thread.avatar,
                    alt: thread.sender,
                    fallbackText: thread.sender,
                    size: "md"
                }),
                Div({ class: "absolute bottom-0 right-0" }, [
                    StaticStatusIndicator(thread.status)
                ])
            ]),

            Div({ class: "flex flex-col" }, [
                Span({ class: "font-semibold text-base text-foreground" }, thread.sender),
                Span({ class: "text-xs text-muted-foreground" }, "PRO")
            ]),

            // Right side icons (video/call)
            Div({ class: "ml-auto flex items-center gap-4" }, [
                Button({
                    variant: "icon",
                    icon: Icons.videoCamera.default
                }),
                Button({
                    variant: "icon",
                    icon: Icons.phone.default
                })
            ])
        ])
    ]);

/**
 * This will create a date divider row.
 *
 * @param {string} date
 * @returns {object}
 */
const DateDivider = (date) => (
    Div({ class: "flex items-center justify-center mt-4" }, [
        Span({ class: "text-xs text-muted-foreground bg-background px-2" }, DateTime.format('standard', date))
    ])
);

/**
 * ConversationMessages
 *
 * Renders the chat bubble UI for each message in thread.thread array.
 *
 * @param {object} thread - The full thread object with a .thread array.
 * @returns {object}
 */
const ConversationMessages = (thread) =>
    Div({ class: "flex flex-col flex-grow overflow-y-auto p-4" }, [
        Div({ class: "flex flex-col w-full h-full max-w-none lg:max-w-5xl m-auto" }, [
            new List({
                cache: 'thread-list',
                key: 'id',
                items: thread.thread,
                role: 'list',
                divider: {
                    itemProperty: 'time',
                    layout: DateDivider,
                    customCompare: (lastValue, value) => DateTime.format('standard', lastValue) !== DateTime.format('standard', value)
                },
                class: 'flex flex-col gap-4 ',
                rowItem: (message) => MessageBubble(message)
            })
        ])
    ]);

/**
 * MessageBubble
 *
 * A single message bubble from thread.thread array.
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

    return Div({ class: `group flex flex-col max-w-[80%]` + (isSent ? " ml-auto" : " mr-auto") }, [
        // Name + time (with hover effect for time)
        Div({ class: "mb-1 flex items-center" }, [
            isSent
                ? Span({ class: "text-xs text-muted-foreground mr-2 opacity-0 group-hover:opacity-100 transition-opacity" }, "You")
                : Span({ class: "text-xs text-muted-foreground mr-2" }, msg.sender),
            Span({
                class: "opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-xs text-muted-foreground ml-2",
            }, TimeFrame({ dateTime: msg.time }))
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
 * A placeholder for audio messages.
 *
 * @param {string} url
 * @param {string} duration
 * @returns {object}
 */
const AudioBubble = (url, duration) =>
    Div({ class: "flex items-center gap-3 mt-1" }, [
        Div({ class: "bg-background/50 p-2 rounded-md text-sm" }, "Audio wave placeholder"),
        Span({ class: "text-xs" }, duration || "00:00")
    ]);