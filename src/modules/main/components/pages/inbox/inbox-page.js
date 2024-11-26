import { Div } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { BlankPage } from "@components/pages/blank-page.js";
import { EmailDetail } from "./email/email-detail.js";
import { EmailEmptyState } from "./email/email-empty-state.js";
import { INBOX_MESSAGES } from "./inbox-messages.js";
import { InboxSidebarMenu } from "./inbox-sidebar-menu.js";
import { InboxList } from "./list/inbox-list.js";

/**
 * @type {object} Props
 *
 * This will set up the page props.
 */
const Props =
{
    /**
     * This will set up the page data.
     *
     * @returns {object}
     */
    setData()
    {
        return new Data({
            items: INBOX_MESSAGES
        });
    },

    /**
     * This will check to route to the inbox page if no page is set.
     *
     * @returns {void}
     */
    afterSetup()
    {
        if (!this.route.page)
        {
            app.navigate("inbox/inbox", null, true);
        }
    },

    /**
     * This will set up the page states.
     *
     * @returns {object}
     */
    setupStates()
    {
        return {
            list: 'all'
        };
    }
};

/**
 * InboxPage
 *
 * This will create the Inbox page.
 *
 * @returns {object}
 */
export const InboxPage = () => (
    new BlankPage(Props, [
        Div({ class: "flex w-full data-[panel-group-direction=vertical]:flex-col h-full" }, [
            InboxSidebarMenu(),
            Div({ class: "flex flex-[2] lg:max-w-[550px] border-r" }, [
                InboxList()
            ]),
            Div({
                class: "flex flex-[4] flex-col",
                useParent({ route })
                {
                    return Div({
                        class: 'flex flex-auto flex-col w-full h-full',
                        onSet: [route, 'messageId', (messageId) =>
                        {
                            if (!messageId)
                            {
                                return EmailEmptyState();
                            }

                            return new EmailDetail();
                        }]
                    }, [
                        Div({ class: 'flex auto flex-col w-full h-full' }, [
                            EmailEmptyState()
                        ])
                    ]);
                }
            })
        ])
    ])
);

export default InboxPage;