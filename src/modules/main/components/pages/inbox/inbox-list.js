import { Div, H4, Span } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { InboxMessageItem } from "./inbox-message-item.js";

/**
 * This will create the InboxList organism.
 *
 * @param {object} props
 * @param {array<object>} props.messages - Array of messages to display.
 */
export const InboxList = ({ messages }) => (
    Div({ class: "w-full pt-2 space-y-2 overflow-y-auto max-h-screen" }, [
        // List header
        Div({ class: "p-4 bg-card" }, [
            Div({
                class: "flex justify-between",
                useParent: ({ route }) => {
                    const setTitle = (value = "Inbox") => console.log(value);

                    return [
                        H4({ class: "text-xl font-bold" }, [
                            Span({ text: ["[[page]]", route, setTitle] }),

                        ]),
                        new TabGroup({
                            options: [
                                { label: "All Mail", value: "all" },
                                { label: "Unread", value: "unread" },
                            ],
                            onSelect: (value) => console.log(value),
                        }),
                    ];
                },
            }),
        ]),
        // Messages
        Div({
            useParent: ({ route }) =>
            {
                return {
                    onSet: [route, 'page', (page) =>
                    {
                        return new List({
                            cache: 'list',
                            key: 'id',
                            items: messages,
                            role: 'list',
                            class: 'space-y-2 px-4 pb-4',
                            rowItem: (message) => new InboxMessageItem({ message })
                        });
                    }]
                }
            }
        }),
    ])
);
