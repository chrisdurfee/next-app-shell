import { Div, H2, Header } from "@base-framework/atoms";
import TabGroup from "@components/organisms/tabs/tab-group.js";

/**
 * ThreadListHeader
 *
 * Similar to the Inbox list header, but for chat threads.
 *
 * @returns {object}
 */
export const ThreadListHeader = () => (
    Header({ class: "px-4 pb-2 lg:p-4 bg-card" }, [
        Div({ class: "flex justify-between items-center" }, [
            H2({ class: "pl-2 lg:pl-0 text-3xl lg:text-xl font-bold" }, "Messages"),

            // Filter tabs: All / Unread
            new TabGroup({
                options: [
                    { label: "All", value: "all" },
                    { label: "Unread", value: "unread" },
                ],
                onSelect: (value, { state }) => state.filter = value
            })
        ])
    ])
);