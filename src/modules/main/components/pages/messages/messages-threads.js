/**
 * @type {array<object>} MESSAGES_THREADS
 *
 * Each object represents a conversation thread with summary info and a `thread` array of message bubbles.
 */
export const MESSAGES_THREADS = [
    {
        id: 1,
        sender: "Angelina Froster",
        content: "Let's go on a date tomorrow 😘",
        time: "2024-06-07T13:05:00",
        status: "online",
        avatar: "https://example.com/avatars/angelina.png",
        unreadCount: 2,
        thread: [
            {
                id: 101,
                sender: "Angelina Froster",
                avatar: "https://example.com/avatars/angelina.png",
                status: "online",
                time: "2024-06-07T13:00:00",
                direction: "received",
                content: "Hi! Are you free tomorrow?"
            },
            {
                id: 102,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-06-07T13:02:00",
                direction: "sent",
                content: "Yes, I'm free! What's up?"
            },
            {
                id: 103,
                sender: "Angelina Froster",
                avatar: "https://example.com/avatars/angelina.png",
                status: "online",
                time: "2024-06-07T13:05:00",
                direction: "received",
                content: "Let's go on a date tomorrow 😘"
            }
        ]
    },
    {
        id: 2,
        sender: "Frances Swann",
        content: "YOU: Okay, let's do it.",
        time: "2024-06-06T12:00:00",
        status: "online",
        avatar: "https://example.com/avatars/frances.png",
        unreadCount: 0,
        thread: [
            {
                id: 201,
                sender: "Ricky Smith",
                avatar: "https://example.com/avatars/ricky.png",
                status: "online",
                time: "2024-06-06T11:00:00",
                direction: "received",
                content: "Hi! How are you? 😍"
            },
            {
                id: 202,
                sender: "Ricky Smith",
                avatar: "https://example.com/avatars/ricky.png",
                status: "online",
                time: "2024-06-06T11:00:00",
                direction: "received",
                audioUrl: "/audio/ricky-voice.mp3",
                audioDuration: "01:30"
            },
            {
                id: 203,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-06-06T11:00:00",
                direction: "sent",
                content: "Hey Ricky! I'm Feeling Amazing, how about you?"
            },
            {
                id: 204,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-06-06T11:00:00",
                direction: "sent",
                content: "That's a cool idea! 🤓",
                credits: 0,
                sentTime: "12:42 PM"
            },
            {
                id: 205,
                sender: "Ricky Smith",
                avatar: "https://example.com/avatars/ricky.png",
                status: "online",
                time: "2024-06-06T11:00:00",
                direction: "received",
                content: "Hey, so happy you are down! 🦄"
            }
        ]
    },
    {
        id: 3,
        sender: "Ricky Smith",
        content: "It's not a time for joking my...",
        time: "2024-01-02T09:30:00",
        status: "away",
        avatar: "https://example.com/avatars/ricky.png",
        unreadCount: 0,
        thread: [
            {
                id: 301,
                sender: "Ricky Smith",
                avatar: "https://example.com/avatars/ricky.png",
                status: "away",
                time: "2024-01-02T09:00:00",
                direction: "received",
                content: "Hello, got a minute?"
            },
            {
                id: 302,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-01-02T09:05:00",
                direction: "sent",
                content: "Sure, what's up?"
            },
            {
                id: 303,
                sender: "Ricky Smith",
                avatar: "https://example.com/avatars/ricky.png",
                status: "away",
                time: "2024-01-02T09:30:00",
                direction: "received",
                content: "It's not a time for joking my..."
            }
        ]
    },
    {
        id: 4,
        sender: "Tina Belcher",
        content: "I found a cool article about AI",
        time: "2024-05-10T10:15:00",
        status: "offline",
        avatar: "https://example.com/avatars/tina.png",
        unreadCount: 1,
        thread: [
            {
                id: 401,
                sender: "Tina Belcher",
                avatar: "https://example.com/avatars/tina.png",
                status: "offline",
                time: "2024-05-10T10:10:00",
                direction: "received",
                content: "Hey, check out this AI article!"
            },
            {
                id: 402,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-05-10T10:12:00",
                direction: "sent",
                content: "Sure, send me the link."
            },
            {
                id: 403,
                sender: "Tina Belcher",
                avatar: "https://example.com/avatars/tina.png",
                status: "offline",
                time: "2024-05-10T10:15:00",
                direction: "received",
                content: "Here it is: https://example.com/ai-article"
            }
        ]
    },
    {
        id: 5,
        sender: "Mark Johnson",
        content: "Don't forget the meeting at 3 PM.",
        time: "2024-07-01T08:00:00",
        status: "online",
        avatar: "https://example.com/avatars/mark.png",
        unreadCount: 0,
        thread: [
            {
                id: 501,
                sender: "Mark Johnson",
                avatar: "https://example.com/avatars/mark.png",
                status: "online",
                time: "2024-07-01T07:58:00",
                direction: "received",
                content: "Meeting at 3 PM. Be there!"
            },
            {
                id: 502,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-07-01T08:00:00",
                direction: "sent",
                content: "Got it, I'll be there."
            }
        ]
    },
    {
        id: 6,
        sender: "Olivia Brown",
        content: "Thanks for the gift! 🎁",
        time: "2024-04-23T18:20:00",
        status: "online",
        avatar: "https://example.com/avatars/olivia.png",
        unreadCount: 3,
        thread: [
            {
                id: 601,
                sender: "Olivia Brown",
                avatar: "https://example.com/avatars/olivia.png",
                status: "online",
                time: "2024-04-23T18:15:00",
                direction: "received",
                content: "I got your gift, it's amazing!"
            },
            {
                id: 602,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-04-23T18:16:00",
                direction: "sent",
                content: "Glad you like it 😄"
            },
            {
                id: 603,
                sender: "Olivia Brown",
                avatar: "https://example.com/avatars/olivia.png",
                status: "online",
                time: "2024-04-23T18:20:00",
                direction: "received",
                content: "Let's meet up soon!"
            }
        ]
    },
    {
        id: 7,
        sender: "Jason Li",
        content: "Can you review the doc?",
        time: "2024-05-22T09:45:00",
        status: "busy",
        avatar: "https://example.com/avatars/jason.png",
        unreadCount: 0,
        thread: [
            {
                id: 701,
                sender: "Jason Li",
                avatar: "https://example.com/avatars/jason.png",
                status: "busy",
                time: "2024-05-22T09:40:00",
                direction: "received",
                content: "Please review the doc I sent."
            },
            {
                id: 702,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-05-22T09:45:00",
                direction: "sent",
                content: "Will do today."
            }
        ]
    },
    {
        id: 8,
        sender: "Emma Green",
        content: "Pic: Check out this sunset.",
        time: "2024-06-20T19:30:00",
        status: "online",
        avatar: "https://example.com/avatars/emma.png",
        unreadCount: 1,
        thread: [
            {
                id: 801,
                sender: "Emma Green",
                avatar: "https://example.com/avatars/emma.png",
                status: "online",
                time: "2024-06-20T19:25:00",
                direction: "received",
                content: "Check out this sunset I captured!"
            },
            {
                id: 802,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-06-20T19:30:00",
                direction: "sent",
                content: "Wow, that's beautiful!"
            }
        ]
    },
    {
        id: 9,
        sender: "Liam Thomas",
        content: "Let's finalize the report.",
        time: "2024-03-15T14:00:00",
        status: "offline",
        avatar: "https://example.com/avatars/liam.png",
        unreadCount: 4,
        thread: [
            {
                id: 901,
                sender: "Liam Thomas",
                avatar: "https://example.com/avatars/liam.png",
                status: "offline",
                time: "2024-03-15T13:50:00",
                direction: "received",
                content: "We need to finalize the report before EOD."
            },
            {
                id: 902,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-03-15T13:55:00",
                direction: "sent",
                content: "On it!"
            },
            {
                id: 903,
                sender: "Liam Thomas",
                avatar: "https://example.com/avatars/liam.png",
                status: "offline",
                time: "2024-03-15T14:00:00",
                direction: "received",
                content: "Thanks, much appreciated."
            }
        ]
    },
    {
        id: 10,
        sender: "Noah Martinez",
        content: "Great job on the presentation.",
        time: "2024-02-10T11:15:00",
        status: "online",
        avatar: "https://example.com/avatars/noah.png",
        unreadCount: 0,
        thread: [
            {
                id: 1001,
                sender: "Noah Martinez",
                avatar: "https://example.com/avatars/noah.png",
                status: "online",
                time: "2024-02-10T11:10:00",
                direction: "received",
                content: "Great job on the presentation today!"
            },
            {
                id: 1002,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-02-10T11:15:00",
                direction: "sent",
                content: "Thank you! I was nervous."
            }
        ]
    },
    {
        id: 11,
        sender: "Sophia Carter",
        content: "Lunch later?",
        time: "2024-08-01T12:00:00",
        status: "online",
        avatar: "https://example.com/avatars/sophia.png",
        unreadCount: 2,
        thread: [
            {
                id: 1101,
                sender: "Sophia Carter",
                avatar: "https://example.com/avatars/sophia.png",
                status: "online",
                time: "2024-08-01T11:55:00",
                direction: "received",
                content: "Lunch later? I'm craving sushi."
            },
            {
                id: 1102,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-08-01T12:00:00",
                direction: "sent",
                content: "Sounds good to me!"
            }
        ]
    },
    {
        id: 12,
        sender: "Ava Robinson",
        content: "Check the code review comments",
        time: "2024-09-10T09:20:00",
        status: "online",
        avatar: "https://example.com/avatars/ava.png",
        unreadCount: 1,
        thread: [
            {
                id: 1201,
                sender: "Ava Robinson",
                avatar: "https://example.com/avatars/ava.png",
                status: "online",
                time: "2024-09-10T09:10:00",
                direction: "received",
                content: "Check my code review comments."
            },
            {
                id: 1202,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-09-10T09:20:00",
                direction: "sent",
                content: "Will look now."
            }
        ]
    },
    {
        id: 13,
        sender: "William Lee",
        content: "Party tonight! 🎉",
        time: "2024-10-05T17:45:00",
        status: "online",
        avatar: "https://example.com/avatars/william.png",
        unreadCount: 3,
        thread: [
            {
                id: 1301,
                sender: "William Lee",
                avatar: "https://example.com/avatars/william.png",
                status: "online",
                time: "2024-10-05T17:40:00",
                direction: "received",
                content: "Party at my place tonight, you coming?"
            },
            {
                id: 1302,
                sender: "You",
                avatar: null,
                status: "online",
                time: "2024-10-05T17:42:00",
                direction: "sent",
                content: "Absolutely!"
            },
            {
                id: 1303,
                sender: "William Lee",
                avatar: "https://example.com/avatars/william.png",
                status: "online",
                time: "2024-10-05T17:45:00",
                direction: "received",
                content: "Bring some chips 🍟"
            }
        ]
    }
];