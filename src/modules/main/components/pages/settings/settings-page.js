import { Div } from "@base-framework/atoms";
import { Icons } from "@components/icons/icons.js";
import { DockableOverlay } from "@components/organisms/overlays/dockable-overlay.js";
import { BackButton } from "@components/organisms/overlays/overlay.js";
import { Panel } from "@components/organisms/panel.js";
import { BlankPage } from "@components/pages/blank-page.js";
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
 * This will create the back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const PageToolbar = () => (
    Div({ class: "flex items-center justify-between pb-2 mt-2" }, [
        Div({ class: 'flex lg:hidden' }, [
            BackButton({
                margin: 'm-0 ml-0'
            })
        ])
    ])
);

/**
 * This will check if the window is in mobile view.
 *
 * @returns {boolean}
 */
const LG_WINDOW_SIZE = 1024;
const isMobile = () => window.innerWidth < LG_WINDOW_SIZE;

/**
 * Props for the settings page.
 *
 * @type {object} Props
 */
const props =
{
    /**
     * This will check the page.
     *
     * @returns {void}
     */
    checkPage()
    {
        const page = this.route.page;
        if (!isMobile() && !page)
        {
            app.navigate('settings/profile');
        }
    },

    /**
     * This will setup the events for the settings page.
     * @returns {array}
     */
    setupEvents()
    {
        return [
            ['resize', window, () => this.checkPage()]
        ];
    },

    /**
     * This will run after the update.
     *
     * @returns {void}
     */
    update()
    {
        this.checkPage();
    }
};

/**
 * SettingsPage
 *
 * The main page layout for the Settings page with sidebar navigation and dynamic content sections.
 *
 * @returns {object}
 */
export const SettingsPage = () => (
    new BlankPage(props, [
        Div({ class: 'flex flex-auto flex-col lg:flex-row max-w-[100vw] h-full' }, [
            // Sidebar
            SidebarMenu({
                title: 'Settings',
                options: [
                    { label: 'Profile', href: 'settings/profile', icon: Icons.user.default, exact: true },
                    { label: 'Account', href: 'settings/account', icon: Icons.locked },
                    { label: 'Appearance', href: 'settings/appearance', icon: Icons.sun },
                    { label: 'Notifications', href: 'settings/notifications', icon: Icons.bell.default },
                    { label: 'Display', href: 'settings/display', icon: Icons.window },
                    { label: 'Sign Out', icon: Icons.signOut, callBack: () => app.signOut() }
                ]
            }),

            // Content Section
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
        ])
    ])
);

export default SettingsPage;