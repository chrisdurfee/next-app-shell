import { Div, H2, Header } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";

/**
 * This will create the AddMessageButton organism.
 *
 * @returns {object}
 */
const AddMessageButton = () => (
    Div({ class: 'flex mr-2' }, [
        Tooltip({ content: 'Add Message', position: 'left' }, [
            Button({ variant: 'icon', class: 'primary', icon: Icons.circlePlus })
        ])
    ])
);

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

            Div({ class: 'flex' }, [

                AddMessageButton(),

                Div({ class: 'hidden lg:flex' }, [
                    new TabGroup({
                        options: [
                            { label: "All", value: "all" },
                            { label: "Unread", value: "unread" },
                        ],
                        onSelect: (value, { state }) => state.filter = value
                    })
                ])
            ])
        ])
    ])
);