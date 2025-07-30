import { Div, H2, Header } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { TabGroup } from "@base-framework/ui/organisms";

/**
 * This will create the AddMessageButton organism.
 *
 * @returns {object}
 */
const AddMessageButton = () => (
    Div({ class: 'flex mr-2' }, [
        Tooltip({ content: 'Add Message', position: 'left' }, [
            Button({ variant: 'icon', class: 'outline', icon: Icons.circlePlus })
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
    Header({ class: "px-4 pb-2 sm:py-2 lg:p-4" }, [
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