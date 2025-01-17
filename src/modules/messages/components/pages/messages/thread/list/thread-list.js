import { Div, On, OnRoute, OnState } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { MESSAGES_THREADS } from "../../messages-threads.js";
import { ListEmptyState } from "./list-empty-state.js";
import { ThreadListHeader } from "./thread-list-header.js";
import { ThreadListItem } from "./thread-list-item.js";

/**
 * filterMessages
 *
 * Filters messages, e.g. unread vs. all.
 *
 * @param {Array<object>} messages
 * @param {string} filter
 * @returns {Array<object>}
 */
const filterMessages = (messages, filter) =>
{
    if (filter === 'unread')
    {
        return messages.filter(msg => msg.unreadCount >= 1);
    }
    return messages;
};

/**
 * ThreadList
 *
 * Similar to InboxList. Renders a list of messages on the left column.
 *
 * @returns {object}
 */
export const ThreadList = () => (
    Div({ class: "w-full pt-0 lg:pt-2 space-y-2 lg:overflow-y-auto lg:max-h-screen" }, [
        ThreadListHeader(),
        Div([
            OnRoute('page', (page, ele, { data, state }) =>
            {
                if (!page)
                {
                    page = 'all';
                    app.navigate('messages/all', null, true);
                }

                let items = MESSAGES_THREADS;
                if (page !== 'all')
                {
                    items = [];
                }

                items = filterMessages(items, state.filter);
                data.items = items;
            }),
            OnState('filter', (filter, ele, { route, data }) =>
            {
                let items = MESSAGES_THREADS;
                if (route.page !== 'all')
                {
                    items = [];
                }

                items = filterMessages(items, filter);
                data.items = items;
            }),
            On('items', (items, ele, { state }) =>
            {
                items = filterMessages(items, state.filter);
                if (!items.length)
                {
                    return ListEmptyState({ filter: state.filter });
                }

                return new List({
                    cache: 'list',
                    key: 'id',
                    items,
                    role: 'list',
                    class: 'space-y-2 px-4 pb-4',
                    rowItem: (message) => new ThreadListItem({ message })
                });
            })
        ])
    ])
);