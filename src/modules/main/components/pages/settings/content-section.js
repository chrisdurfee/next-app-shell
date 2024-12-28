import { Div } from "@base-framework/atoms";
import { BackButton, DockableOverlay, Panel } from "@base-framework/ui/organisms";
import { AccountSettings } from "./sections/account-settings.js";
import { AppearanceSettings } from "./sections/appearance-settings.js";
import { DisplaySettings } from "./sections/display-settings.js";
import { NotificationSettings } from "./sections/notification-settings.js";
import { ProfileSettings } from "./sections/profile-settings.js";

/**
 * This will wrap the atom in a panel.
 *
 * @param {object} atom
 * @returns {object}
 */
const SubRoute = (atom) => new Panel(atom);

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
                    component: new DockableOverlay({ class: 'px-2' }, [
                        PageToolbar(),
                        Div({
                            class: 'flex flex-auto flex-col contained p-4 lg:p-6',
                            switch: [
                                { uri: '/settings/profile', component: SubRoute(ProfileSettings()) },
                                { uri: '/settings/account', component: SubRoute(AccountSettings()) },
                                { uri: '/settings/appearance', component: SubRoute(AppearanceSettings()) },
                                { uri: '/settings/notifications', component: SubRoute(NotificationSettings()) },
                                { uri: '/settings/display', component: SubRoute(DisplaySettings()) },
                            ]
                        })
                    ])
                }
            ]
        })
    ])
);