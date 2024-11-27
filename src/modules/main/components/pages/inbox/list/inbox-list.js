import { Div, H4, Span } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { INBOX_MESSAGES } from "../inbox-messages.js";
import { InboxMessageItem } from "./inbox-message-item.js";
import { ListEmptyState } from "./list-empty-state.js";

/**
 * This will filter messages based on the list.
 *
 * @param {array<object>} messages - Array of messages to filter.
 * @param {string} list - List type to filter.
 * @returns {array<object>}
 */
const filterMessages = (messages, list) =>
{
    if (list === 'unread')
    {
        return messages.filter((message) => !message.read);
    }

    return messages;
};

/**
 * This will create the InboxList organism.
 *
 * @returns {object}
 */
export const InboxList = () => (
    Div({ class: "w-full pt-2 space-y-2 lg:overflow-y-auto lg:max-h-screen" }, [
        // List header
        Div({ class: "px-4 pb-2 lg:p-4 bg-card" }, [
            Div({
                class: "flex justify-between",
                useParent: ({ route, state }) => {
                    return [
                        H4({ class: "pl-2 lg:pl-0 text-xl font-bold" }, [
                            Span({ class: 'capitalize', text: ["[[page]]", route] }),

                        ]),
                        Div({ class: 'flex' }, [
                            Div({ class: 'flex mr-2' }, [
                                Tooltip({ content: 'Add Message', position: 'left' }, Button({ variant: 'icon', icon: Icons.circlePlus }))
                            ]),
                            new TabGroup({
                                options: [
                                    { label: "All Mail", value: "all" },
                                    { label: "Unread", value: "unread" },
                                ],
                                onSelect: (value) => state.list = value
                            })
                        ])
                    ];
                },
            }),
        ]),
        // Messages
        Div({
            useParent: ({ route, data, state }) =>
            {
                return [
                    {
                        onSet: [route, 'page', (page) =>
                        {
                            let items = INBOX_MESSAGES;
                            if (page !== 'inbox')
                            {
                                items = [];
                            }

                            items = filterMessages(items, state.list);
                            return data.items = items;
                        }]
                    },
                    {
                        onSet: [state, 'list', (list) =>
                        {
                            let items = INBOX_MESSAGES;
                            if (route.page !== 'inbox')
                            {
                                items = [];
                            }

                            items = filterMessages(items, list);
                            return data.items = items;
                        }]
                    },
                    {
                        onSet: ['items', (items) =>
                        {
                            items = filterMessages(items, state.list);
                            if (!items.length)
                            {
                                return ListEmptyState({ list: state.list });
                            }

                            return new List({
                                cache: 'list',
                                key: 'id',
                                items,
                                role: 'list',
                                class: 'space-y-2 px-4 pb-4',
                                rowItem: (message) => new InboxMessageItem({ message })
                            });
                        }]
                    }
                ]
            }
        }),
    ])
);
