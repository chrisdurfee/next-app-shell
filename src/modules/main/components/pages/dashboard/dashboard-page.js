import { Div, H1, H2, H3, Header, P, Span } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Card } from "@components/atoms/cards/card.js";
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
    Card({ padding: 'p-0', margin: 'm-0', class: 'rounded-xl border bg-card text-card-foreground shadow-lg' }, [
        Div({ class: 'p-6 flex flex-row items-center justify-between space-y-0 pb-2' }, [
            H2({ class: 'text-lg font-semibold' }, title),
            Icon(icon),
        ]),
        Div({ class: 'p-6 pt-0' }, [
            H1({ class: 'text-3xl font-bold text-primary' }, value),
            P({ class: 'text-sm text-muted-foreground' }, change)
        ])
    ])
);

/**
 * RecentSalesItem
 *
 * Renders a single recent sale item.
 *
 * @param {object} props
 * @returns {object}
 */
const RecentSalesItem = ({ name, image, email, amount }) => (
    Div({ class: 'flex items-center hover:bg-muted rounded-md p-2' }, [
        Div({ class: 'flex items-center gap-3' }, [
            Span({ class: 'relative flex shrink-0 overflow-hidden rounded-full h-9 w-9' }, [
                Avatar({ src: image, name }), // Assuming the Avatar component supports name for fallback
            ]),
            Div({ class: 'space-y-1' }, [
                Span({ class: 'text-sm font-medium leading-none' }, name),
                P({ class: 'text-sm text-muted-foreground' }, email),
            ])
        ]),
        Span({ class: 'ml-auto font-medium' }, `+${amount}`)
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
        Div({ class: 'flex h-16 items-center px-4 border-b' }, [
            new NavigationMenu({
                options: [
                    { label: 'Overview', href: 'dashboard', exact: true },
                    { label: 'Customers', href: 'dashboard/customers' },
                    { label: 'Products', href: 'dashboard/products' },
                    { label: 'Settings', href: 'dashboard/settings' }
                ]
            })
        ]),

        Div({ class: 'flex flex-col p-6 lg:p-8 space-y-4' }, [

            // Page Header
            Header({ class: 'flex items-center justify-between' }, [
                H1({ class: 'text-3xl font-bold' }, 'Dashboard'),
                Div({ class: 'flex items-center gap-2' }, [
                    new DatePicker({ label: 'Pick a date', icon: Icons.calendar }),
                    Button({ variant: 'default' }, 'Download')
                ])
            ]),

            Div({ class: 'justify-between flex flex-auto items-center' }, [
                new TabGroup({
                    options: [
                        { label: 'Overview', value: 'overview' },
                        { label: 'Analytics', value: 'analytics' },
                        { label: 'Reports', value: 'reports', disabled: true },
                        { label: 'Notifications', value: 'notifications' },
                    ],
                    onSelect: (value) => console.log("Selected tab:", value)
                }),
            ]),

            Div({ class: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4' }, [

                Div({ class: 'grid gap-4 md:grid-cols-2 lg:grid-cols-4' }, [
                    DashboardCard({
                        title: 'Total Revenue',
                        value: '$45,231.89',
                        change: '+20.1% from last month',
                        icon: Icons.currency.dollar
                    }),
                    DashboardCard({
                        title: 'Subscriptions',
                        value: '+2,350',
                        change: '+180.1% from last month',
                        icon: Icons.user.plus
                    }),
                    DashboardCard({
                        title: 'Sales',
                        value: '+12,234',
                        change: '+19% from last month',
                        icon: Icons.shoppingBag
                    }),
                    DashboardCard({
                        title: 'Active Now',
                        value: '+573',
                        change: '+201 since last hour',
                        icon: Icons.barChart
                    }),
                ]),

                Div({ class: 'grid gap-4 md:grid-cols-2 lg:grid-cols-7' }, [

                    // Overview Chart
                    Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-4' }, [
                        Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
                            H3({ class: 'font-semibold leading-none tracking-tight' }, 'Overview')
                        ]),
                        Div({ class: 'p-6 pt-0 pl-2' }, [
                            // Chart component placeholder
                            Div({ class: 'h-64 bg-muted rounded-md' }) // Placeholder for Chart
                        ])
                    ]),

                    // Recent Sales
                    Card({ padding: 'p-0', margin: 'm-0', class: 'col-span-3' }, [
                        Header({ class: 'flex flex-col space-y-1.5 p-6' }, [
                            H3({ class: 'font-semibold leading-none tracking-tight' }, 'Recent Sales'),
                            P({ class: 'text-sm text-muted-foreground' }, 'You made 265 sales this month.'),
                        ]),
                        Div({ class: 'p-6 pt-0' }, [
                            Div({ class: 'space-y-4' }, [
                                RecentSalesItem({
                                    name: 'Olivia Martin',
                                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                    email: 'olivia.martin@email.com',
                                    amount: '$1,999.00'
                                }),
                                RecentSalesItem({
                                    name: 'Jackson Lee',
                                    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                    email: 'jackson.lee@email.com',
                                    amount: '$39.00'
                                }),
                                RecentSalesItem({
                                    name: 'Isabella Nguyen',
                                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                    email: 'isabella.nguyen@email.com',
                                    amount: '$299.00'
                                }),
                                RecentSalesItem({
                                    name: 'William Kim',
                                    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                    email: 'william.kim@email.com',
                                    amount: '$99.00'
                                }),
                                RecentSalesItem({
                                    name: 'Sofia Davis',
                                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                    email: 'sofia.davis@email.com',
                                    amount: '$39.00'
                                })
                            ])
                        ])
                    ])
                ])
            ])
        ])
    ])
);

export default DashboardPage;