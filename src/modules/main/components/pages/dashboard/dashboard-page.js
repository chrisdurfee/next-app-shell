import { Div, H1, H2, Header, P, Span } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Card } from "@components/atoms/cards/card.js";
//import { Chart } from "@components/atoms/chart.js"; // Assuming a Chart component exists for the overview graph
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";
import { Avatar } from "@components/molecules/avatar.js";
import { DatePicker } from "@components/molecules/date-time/date-picker.js";
import { NavigationMenu } from "@components/organisms/navigation/navigation-menu/navigation-menu.js";
import { TabGroup } from "@components/organisms/tabs/tab-group.js";
import { BlankPage } from "@components/pages/blank-page.js";

/**
 * DashboardCard
 *
 * Reusable card for displaying statistics.
 *
 * @param {object} props
 * @returns {object}
 */
const DashboardCard = ({ title, value, change, icon }) => (
    Card({ class: 'p-6 space-y-3 flex flex-col justify-center items-center' }, [
        Div({ class: 'flex items-center gap-2 text-muted-foreground' }, [
            Icon(icon),
            H2({ class: 'text-lg font-semibold' }, title),
        ]),
        H1({ class: 'text-3xl font-bold text-primary' }, value),
        P({ class: 'text-sm text-muted-foreground' }, change),
    ])
);

/**
 * RecentSalesItem
 *
 * Renders a single recent sale item.
 *
 * @param {object} sale
 * @returns {object}
 */
const RecentSalesItem = ({ name, email, amount }) => (
    Div({ class: 'flex items-center justify-between p-4 border-b border-muted' }, [
        Div({ class: 'flex items-center gap-3' }, [
            Avatar({ name, class: 'h-8 w-8' }), // Assuming the Avatar component supports name for fallback
            Div([
                Span({ class: 'font-medium text-foreground' }, name),
                P({ class: 'text-sm text-muted-foreground' }, email),
            ])
        ]),
        Span({ class: 'text-sm font-medium text-primary' }, `+${amount}`)
    ])
);

/**
 * DashboardPage
 *
 * Main dashboard layout.
 *
 * @returns {object}
 */
export const DashboardPage = () => (
    new BlankPage([
        Div({ class: 'grid grid-cols-1 lg:grid-cols-5 h-full' }, [
            new NavigationMenu({
                options: [
                    { label: 'Overview', href: '/overview' },
                    { label: 'Analytics', href: '/analytics' },
                    { label: 'Reports', href: '/reports' },
                    { label: 'Notifications', href: '/notifications' }
                ]
            }),

            // Main Content
            Div({ class: 'col-span-4 p-6 lg:p-8 space-y-6' }, [
                // Page Header
                Header({ class: 'flex items-center justify-between' }, [
                    H1({ class: 'text-3xl font-bold' }, 'Dashboard'),
                    Div({ class: 'flex items-center gap-2' }, [
                        new DatePicker({ label: 'Select Date Range', icon: Icons.calendar }),
                        Button({ variant: 'default' }, 'Download')
                    ])
                ]),

                // Tabs Navigation
                new TabGroup({
                    options: [
                        { label: 'Overview', value: 'overview' },
                        { label: 'Analytics', value: 'analytics' },
                        { label: 'Reports', value: 'reports', disabled: true },
                        { label: 'Notifications', value: 'notifications' },
                    ],
                    onSelect: (value) => console.log("Selected tab:", value)
                }),

                // Stats Cards Section
                Div({ class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' }, [
                    DashboardCard({
                        title: 'Total Revenue',
                        value: '$45,231.89',
                        change: '+20.1% from last month',
                        icon: 'dollar'
                    }),
                    DashboardCard({
                        title: 'Subscriptions',
                        value: '+2,350',
                        change: '+180.1% from last month',
                        icon: 'userPlus'
                    }),
                    DashboardCard({
                        title: 'Sales',
                        value: '+12,234',
                        change: '+19% from last month',
                        icon: 'shoppingCart'
                    }),
                    DashboardCard({
                        title: 'Active Now',
                        value: '+573',
                        change: '+201 since last hour',
                        icon: 'activity'
                    }),
                ]),

                // Overview and Recent Sales
                Div({ class: 'grid grid-cols-1 lg:grid-cols-3 gap-6' }, [
                    // Overview Chart
                    Card({ class: 'col-span-2 p-6 space-y-4' }, [
                        H2({ class: 'text-lg font-semibold' }, 'Overview'),
                        //Chart({ type: 'bar', data: [3000, 4500, 1500, 4000, 3200, 4900] }) // Assuming chart data example
                    ]),

                    // Recent Sales
                    Card({ class: 'p-6 space-y-3' }, [
                        H2({ class: 'text-lg font-semibold' }, 'Recent Sales'),
                        P({ class: 'text-sm text-muted-foreground' }, 'You made 265 sales this month.'),
                        Div({ class: 'space-y-2' }, [
                            RecentSalesItem({
                                name: 'Olivia Martin',
                                email: 'olivia.martin@email.com',
                                amount: '$1,999.00'
                            }),
                            RecentSalesItem({
                                name: 'Jackson Lee',
                                email: 'jackson.lee@email.com',
                                amount: '$39.00'
                            }),
                            RecentSalesItem({
                                name: 'Isabella Nguyen',
                                email: 'isabella.nguyen@email.com',
                                amount: '$299.00'
                            }),
                            RecentSalesItem({
                                name: 'William Kim',
                                email: 'william.kim@email.com',
                                amount: '$99.00'
                            }),
                            RecentSalesItem({
                                name: 'Sofia Davis',
                                email: 'sofia.davis@email.com',
                                amount: '$39.00'
                            })
                        ])
                    ])
                ])
            ])
        ])
    ])
);

export default DashboardPage;