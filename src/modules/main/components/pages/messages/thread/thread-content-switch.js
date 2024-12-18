import { Div, OnRoute } from "@base-framework/atoms";
import { DockableOverlay } from "@components/organisms/overlays/dockable-overlay.js";
import { Panel } from "@components/organisms/panel.js";
import { ThreadDetail } from "./thread-detail.js";
import { ThreadEmptyState } from "./thread-empty-state.js";

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
                component: new DockableOverlay([
                    OnRoute('messageId', (messageId) => (!messageId)
                        ? ThreadEmptyState()
                        : new ThreadDetail({
                            messageId,
                            delete: props.delete
                        })
                    )
                ])
            },
            {
                uri: 'messages*',
                component: new Panel([
                    Div({ class: "hidden lg:flex flex-auto flex-col" }, [
                        Div({ class: "flex auto flex-col w-full h-full" }, [
                            ThreadEmptyState()
                        ])
                    ])
                ])
            }
        ]
    });