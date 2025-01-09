import { Div, OnRoute } from "@base-framework/atoms";
import { DockableOverlay, Panel } from "@base-framework/ui/organisms";
import { ThreadDetail } from "./message-thread/thread-detail.js";
import { ThreadEmptyState } from "./message-thread/thread-empty-state.js";

/**
 * This will create the dockable thread.
 *
 * @param {object} props
 * @returns {function}
 */
const DockableThread = (props) => (
    () => new DockableOverlay([
        OnRoute('messageId', (messageId) => (!messageId)
            ? ThreadEmptyState()
            : new ThreadDetail({
                messageId,
                delete: props.delete,
                mingle: props.mingle
            })
        )
    ])
);

/**
 * This will create the empty thread message.
 *
 * @returns {object}
 */
const EmptyThread = () => (
    new Panel([
        Div({ class: "hidden lg:flex flex-auto flex-col" }, [
            Div({ class: "flex auto flex-col w-full h-full" }, [
                ThreadEmptyState()
            ])
        ])
    ])
);

/**
 * ThreadContentSwitch
 *
 * Switches between a “ThreadEmptyState” and the actual “ThreadDetail.”
 *
 * @param {object} props
 * @returns {object}
 */
export const ThreadContentSwitch = (props) =>
    Div({
        class: "flex-auto flex-col w-full h-full hidden lg:flex",
        switch: [
            {
                uri: 'messages/:page/:messageId*',
                component: DockableThread(props)
            },
            {
                uri: 'messages*',
                component: EmptyThread
            }
        ]
    });