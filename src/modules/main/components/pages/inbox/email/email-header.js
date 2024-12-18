import { Div, Span } from "@base-framework/atoms";
import { Avatar } from "@components/molecules/avatars/avatar.js";
import { TimeFrame } from "@components/molecules/date-time/time-frame.js";

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
 * This will create the email header.
 *
 * @param {object} message
 * @returns {object}
 */
export const EmailHeader = (message) => (
    Div({ class: "flex items-center justify-between border-b pb-4 gap-4" }, [
        // Avatar and Name
        Div({ class: "flex items-center gap-4" }, [
            Avatar({
                src: null, // Replace with actual image URL if available
                alt: message.name,
                fallbackText: `${message.name.split(" ")[0][0]}${
                    message.name.split(" ")[1][0]
                }`,
                size: "md",
            }),
            Div({ class: "flex flex-col" }, [
                Span({ class: "font-semibold text-lg text-foreground" }, message.name),
                Span({ class: "text-sm text-muted-foreground" }, `Reply-To: ${message.replyTo || "No Reply-To Available"}`),
            ]),
        ]),
        Div({ class: "text-xs text-muted-foreground" }, [
            Time(message.time),
        ]),
    ])
);
