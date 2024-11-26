import { Div } from "@base-framework/atoms";
import { BlankPage } from "@components/pages/blank-page.js";
import { EmailDetail } from "./email-detail.js";
import { InboxList } from "./inbox-list.js";
import { INBOX_MESSAGES } from "./inbox-messages.js";
import { InboxSidebarMenu } from "./inbox-sidebar-menu.js";

/**
 * @type {object} Props
 *
 * This will set up the page props.
 */
const Props =
{
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
        Div({ class: "flex w-full data-[panel-group-direction=vertical]:flex-col h-full items-stretch" }, [
            InboxSidebarMenu(),
            Div({ class: "flex flex-[2] border-r" }, [
                InboxList({ messages: INBOX_MESSAGES })
            ]),
            Div({ class: "flex flex-[4]" }, [
                EmailDetail({ message: INBOX_MESSAGES[0] })
            ])
        ])
    ])
);

export default InboxPage;