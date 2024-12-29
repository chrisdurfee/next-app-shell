import { Div, UseParent } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Icons } from "@base-framework/ui/icons";
import { BlankPage } from "@base-framework/ui/pages";
import { ContentSwitch } from "./content-switch.js";
import { INBOX_MESSAGES } from "./inbox-messages.js";
import { InboxSidebarMenu } from "./inbox-sidebar-menu.js";
import { InboxList } from "./list/inbox-list.js";

/**
 * InboxPage
 *
 * This will create the Inbox page.
 *
 * @returns {object}
 */
export const InboxPage = () =>
{
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

    return new BlankPage(Props, [
        Div({ class: "flex w-full flex-col lg:flex-row h-full" }, [
            InboxSidebarMenu(),
            Div({ class: "flex flex-[2] lg:max-w-[550px] lg:border-r" }, [
                InboxList()
            ]),
            UseParent((parent) =>
            {
                return ContentSwitch({

                    /**
                     * This will delete the email.
                     *
                     * @param {number} id
                     */
                    delete: (id) =>
                    {
                        parent.list.delete(id);
                        app.navigate(`inbox/${parent.route.page}`);

                        app.notify({
                            type: "success",
                            title: "Email Deleted",
                            description: "The email has been deleted.",
                            icon: Icons.check
                        });
                    }
                });
            })
        ])
    ]);
};

export default InboxPage;