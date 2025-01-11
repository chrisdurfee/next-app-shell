import { Div, On, OnRoute, OnState } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { INBOX_MESSAGES } from "../inbox-messages.js";
import { InboxMessageItem } from "./inbox-message-item.js";
import { ListEmptyState } from "./list-empty-state.js";
import { ListHeaer } from "./list-header.js";

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
    Div({ class: "w-full pt-0 lg:pt-2 space-y-2 lg:overflow-y-auto lg:max-h-screen" }, [
        ListHeaer(),
        Div([
            OnRoute('page', (page, ele, { data, state }) =>
            {
                if (!page)
                {
                    page = 'inbox';
                    app.navigate('inbox/inbox', null, true);
                }

                let items = INBOX_MESSAGES;
                if (page !== 'inbox')
                {
                    items = [];
                }

                items = filterMessages(items, state.list);
                data.items = items;
            }),
            OnState('list', (list, ele, { route, data }) =>
            {
                let items = INBOX_MESSAGES;
                if (route.page !== 'inbox')
                {
                    items = [];
                }

                items = filterMessages(items, list);
                data.items = items;
            }),
            On('items', (items, ele, { state }) =>
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
            })
        ]),
    ])
);

export default InboxList;
