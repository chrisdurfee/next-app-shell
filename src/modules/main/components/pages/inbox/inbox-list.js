import { Div, H4, Span } from "@base-framework/atoms";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { InboxMessageItem } from "./inbox-message-item.js";

/**
 * This will create the InboxList organism.
 *
 * @param {object} props
 * @param {Array<object>} props.messages - Array of messages to display.
 */
export const InboxList = ({ messages }) => (
    Div({ class: "w-full space-y-2" }, [
        // List header
        Div({ class: "p-4 bg-card" }, [
            Div({
                class: "flex justify-between",
                useParent: ({ route }) => {
                    const setTitle = (value = "Inbox") => console.log(value);

                    return [
                        H4({ class: "font-semibold text-base text-foreground" }, [
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
            class: "space-y-2 p-4",
            map: [messages, (message) => new InboxMessageItem({ message })],
        }),
    ])
);
