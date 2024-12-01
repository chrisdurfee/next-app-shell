import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { Panel } from "@components/organisms/panel.js";
import { AccountSettings } from "./account-settings.js";
import { AppearanceSettings } from "./appearance-settings.js";
import { DisplaySettings } from "./display-settings.js";
import { NotificationSettings } from "./notification-settings.js";
import { ProfileSettings } from "./profile-settings.js";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * This will wrap the atom in a panel.
 *
 * @param {object} atom
 * @returns {object}
 */
const SubRoute = (atom) => new Panel(atom);

/**
 * SettingsPage
 *
 * The main page layout for the Settings page with sidebar navigation and dynamic content sections.
 *
 * @returns {object}
 */
export const SettingsPage = () => (
    Div({ class: 'flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full' }, [
        // Sidebar
        SidebarMenu({
            title: 'Settings',
            options: [
                { label: 'Profile', href: 'settings', icon: Icons.user.default, exact: true },
                { label: 'Account', href: 'settings/account', icon: Icons.locked },
                { label: 'Appearance', href: 'settings/appearance', icon: Icons.sun },
                { label: 'Notifications', href: 'settings/notifications', icon: Icons.bell.default },
                { label: 'Display', href: 'settings/display', icon: Icons.window },
            ]
        }),

        // Content Section
        Div({ class: 'flex flex-auto flex-col p-4 lg:p-6' }, [
            Div({
                class: 'flex flex-auto flex-col contained',
                switch: [
                    { uri: '/settings/profile', component: SubRoute(ProfileSettings()) },
                    { uri: '/settings/account', component: SubRoute(AccountSettings()) },
                    { uri: '/settings/appearance', component: SubRoute(AppearanceSettings()) },
                    { uri: '/settings/notifications', component: SubRoute(NotificationSettings()) },
                    { uri: '/settings/display', component: SubRoute(DisplaySettings()) },
                ]
            })
        ])
    ])
);

export default SettingsPage;