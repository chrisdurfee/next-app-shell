import { Div, OnRoute } from "@base-framework/atoms";
import { DockableOverlay, Panel } from "@base-framework/ui/organisms";
import { EmailDetail } from "./email/email-detail.js";
import { EmailEmptyState } from "./email/email-empty-state.js";

/**
 * This will create the EmailDetail component.
 *
 * @param {object} props
 * @returns {function}
 */
const DockableEmailDetail = (props) => (
    () => new DockableOverlay([
        OnRoute('messageId', (messageId) => (!messageId)
            ? EmailEmptyState()
            : new EmailDetail({
                messageId,
                delete: props.delete
            })
        )
    ])
);

/**
 * This will create an empty email state.
 *
 * @returns {object}
 */
const EmptyEmail = () => (
    new Panel([
        Div({ class: "hidden lg:flex flex-auto flex-col" }, [
            Div({ class: 'flex auto flex-col w-full h-full' }, [
                EmailEmptyState()
            ])
        ])
    ])
);

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
                component: DockableEmailDetail(props)
            },
            {
                uri: 'inbox*',
                component: EmptyEmail
            }
        ]
    })
);