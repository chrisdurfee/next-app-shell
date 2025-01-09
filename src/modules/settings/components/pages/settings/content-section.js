import { Div } from "@base-framework/atoms";
import { BackButton, DockableOverlay, Panel } from "@base-framework/ui/organisms";
import { AccountSettings } from "./sections/account-settings.js";
import { AppearanceSettings } from "./sections/appearance-settings.js";
import { DisplaySettings } from "./sections/display-settings.js";
import { NotificationSettings } from "./sections/notification-settings.js";
import { ProfileSettings } from "./sections/profile-settings.js";

/**
 * This will create the back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const PageToolbar = () => (
    Div({ class: "flex items-center justify-between pb-2 mt-2" }, [
        Div({ class: 'flex lg:hidden' }, [
            BackButton({
                margin: 'm-0 ml-0',
                backUrl: '/settings'
            })
        ])
    ])
);

/**
 * This will create a dockable page.
 *
 * @returns {object}
 */
const DockablePage = () => (
    new DockableOverlay({ class: 'px-2' }, [
        PageToolbar(),
        Div({
            class: 'flex flex-auto flex-col contained p-4 lg:p-6',
            switch: [
                { uri: '/settings/profile', component: ProfileSettings },
                { uri: '/settings/account', component: AccountSettings },
                { uri: '/settings/appearance', component: AppearanceSettings },
                { uri: '/settings/notifications', component: NotificationSettings },
                { uri: '/settings/display', component: DisplaySettings },
            ]
        })
    ])
);

/**
 * This will create the Content Section.
 *
 * @param {object} props
 * @returns {object}
 */
export const ContentSection = (props) => (
    Div({ class: 'flex flex-auto flex-col' }, [
        Div({
            route: [
                {
                    uri: 'settings/:page*',
                    component: DockablePage
                }
            ]
        })
    ])
);