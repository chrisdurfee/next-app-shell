import { Div, H4, Span } from "@base-framework/atoms";
import TabGroup from "@components/organisms/tabs/tab-group.js";

/**
 * This will create the InboxList organism.
 *
 * @param {object} props
 * @param {object} children
 */
export const InboxList = ({ messages }) => (
    Div({ class: "w-full space-y-2" }, [
        // List header
        Div({ class: "p-4" }, [
            Div({
                class: "flex justify-between",
                useParent: ({ route }) =>
                {
                    const setTitle = (value = 'Inbox') => console.log(value);

                    return [
                        H4({ class: "font-semibold text-base text-foreground" }, [
                            Span({
                                text: ['[[page]]', route, setTitle],
                            })
                        ]),

                        new TabGroup({
                            options: [
                                { label: 'All Mail', value: 'all' },
                                { label: 'Unread', value: 'unread' }
                            ],
                            onSelect: (value) => console.log(value)
                        })
                    ];
                }
            })
        ]),
        // Messages
        Div({
            class: "space-y-2",
            map: [messages, (message) => InboxMessageItem({ message })],
        })
    ])
);

/**
 * This will create the InboxMessageItem molecule.
 *
 * @param {object} props
 * @param {object} children
 */
export const InboxMessageItem = ({ message }) => (
    Div({
        class: "p-4 border hover:bg-muted cursor-pointer flex flex-col",
    }, [
        Div({ class: "flex justify-between" }, [
            Span({ class: "font-semibold text-base text-foreground" }, message.name),
            Span({ class: "text-xs text-muted-foreground" }, message.time),
        ]),
        Div({ class: "text-sm font-medium text-muted mt-2" }, message.subject),
        Div({
            class: "flex space-x-2 mt-2",
            map: [message.tags, (tag) => Span({ class: "bg-secondary px-2 py-1 rounded text-xs" }, tag)],
        }),
    ])
);