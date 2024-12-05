import { Div, OnRoute } from "@base-framework/atoms";
import { DockableOverlay } from "@components/organisms/overlays/dockable-overlay.js";
import { Panel } from "@components/organisms/panel.js";
import { EmailDetail } from "./email/email-detail.js";
import { EmailEmptyState } from "./email/email-empty-state.js";

/**
 * This will create the ContentSwitch.
 *
 * @param {object} props
 * @returns {object}
 */
export const ContentSwitch = (props) => (
    Div({
        class: 'flex-[4] flex-col w-full h-full hidden lg:flex',
        switch: [
            {
                uri: 'inbox/:page/:messageId*',
                component: new DockableOverlay([
                    OnRoute('messageId', (messageId) => (!messageId)
                        ? EmailEmptyState()
                        : new EmailDetail({
                            messageId,
                            delete: props.delete
                        })
                    )
                ])
            },
            {
                uri: 'inbox/:page*',
                component: new Panel([
                    Div({ class: "flex flex-auto flex-col" }, [
                        Div({ class: 'flex auto flex-col w-full h-full' }, [
                            EmailEmptyState()
                        ])
                    ])
                ])
            }
        ]
    })
);