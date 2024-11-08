import { A, Div, H4, P, Section, Span } from "@base-framework/atoms";
import { CodeCard } from "../../../molecules/cards.js";
import { DocPage } from "../../doc-page.js";
import AccountCard from "../components/cards/examples/account-card.js";
import CookieSettingsCard from "../components/cards/examples/cookie-settings-card.js";
import DateSelectCard from "../components/cards/examples/date-select-card.js";
import PaymentCard from "../components/cards/examples/payment-card.js";
import ReportIssueCard from "../components/cards/examples/report-issue-card.js";
import ShareDocumentCard from "../components/cards/examples/share-document-card.js";
import TeamMemberCard from "../components/cards/examples/team-member-card.js";

/**
 * IntroPage
 *
 * This component creates a comprehensive introduction page for the documentation,
 * detailing the app shell's purpose, theme, icons, component structure, and
 * development guidelines.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const IntroPage = () => (
    DocPage(
        {
            title: 'Introduction',
            description: 'The App Shell is a versatile and modular framework, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms, created with the Base framework.'
        },
        [
            // About the App Shell
            Section({ class: 'space-y-4' }, [
                H4({ class: 'text-lg font-bold' }, 'The App Shell'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`The App Shell project is built to streamline front-end application development. As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.`)
                ])
            ]),

            Div({ class: 'items-start justify-center gap-6 rounded-lg pt-0 md:p-8 md:mt-6 md:grid lg:grid-cols-2 xl:grid-cols-2' }, [
                Div({ class: 'col-span-2 grid items-start gap-6 lg:col-span-1' }, [
                    AccountCard(),
                    PaymentCard(),
                    CookieSettingsCard()
                ]),
                Div({ class: 'col-span-2 grid items-start gap-6 lg:col-span-1' }, [
                    TeamMemberCard({
                        members: [
                            {
                                name: 'Leslie Alexander',
                                email: 'leslie.alexander@example.com',
                                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'owner',
                                lastSeen: '2023-01-23T13:23Z',
                                status: 'offline'
                            },
                            {
                                name: 'Michael Foster',
                                email: 'michael.foster@example.com',
                                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'member',
                                lastSeen: '2023-01-23T13:23Z',
                                status: 'offline'
                            },
                            {
                                name: 'Dries Vincent',
                                email: 'dries.vincent@example.com',
                                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'owner',
                                status: 'online'
                            }
                        ]
                    }),
                    ShareDocumentCard({
                        link: 'http://example.com/link/to/document',
                        people: [
                            {
                                name: 'Leslie Alexander',
                                email: 'leslie.alexander@example.com',
                                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'owner',
                                lastSeen: '2023-01-23T13:23Z',
                                status: 'offline'
                            },
                            {
                                name: 'Michael Foster',
                                email: 'michael.foster@example.com',
                                image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'member',
                                lastSeen: '2023-01-23T13:23Z',
                                status: 'offline'
                            },
                            {
                                name: 'Dries Vincent',
                                email: 'dries.vincent@example.com',
                                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                                role: 'owner',
                                status: 'online'
                            }
                        ]
                    }),
                    DateSelectCard({
                        startDate: '2023-01-23'
                    }),
                    ReportIssueCard()
                ])
            ]),

            // About the Theme
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Theme and Styling'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from `),
                    A({ href: 'https://github.com/shadcn', class: 'underline', target: '_blank' }, 'Shadcn’s UI component library'),
                    Span(`, combining best practices for consistency and flexibility.`)
                ]),
            ]),

            // About the Icons
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Icons'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`This project utilizes Heroicons, a comprehensive icon set provided by the Tailwind Labs team. These icons are fully customizable and designed to fit seamlessly within Tailwind-based applications.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`For more details on available icons, visit the `),
                    A({ href: 'https://heroicons.com', class: 'underline', target: '_blank' }, 'Heroicons website'),
                    Span(`.`)
                ])
            ]),

            // About the Components and Atoms
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Components and Atoms'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Leveraging the Base framework, this project provides a comprehensive set of reusable components and atoms. Inspired by projects like `),
                    A({ href: 'https://github.com/shadcn/ui', class: 'underline', target: '_blank' }, 'shadcn/ui'),
                    Span(`, the components are crafted to balance flexibility and simplicity, allowing developers to integrate pre-designed elements or customize them as needed.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`You can explore components like `),
                    A({ href: '/docs/components/buttons', class: 'underline' }, 'Buttons'),
                    Span(`, `),
                    A({ href: '/docs/components/tabs', class: 'underline' }, 'Tabs'),
                    Span(`, and `),
                    A({ href: '/docs/components/forms', class: 'underline' }, 'Forms'),
                    Span(` to quickly build complex UIs without starting from scratch.`)
                ])
            ]),

            // Development and Module System
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Development Guidelines'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Modules are an essential part of the App Shell's extensibility. You can add new features by creating modules in the modules folder and registering them in the `),
                    A({ href: '/docs/imported-modules', class: 'underline' }, 'imported-modules.js'),
                    Span(` file. This structure supports modularity, making it easier to maintain and scale projects.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`Each module includes its own routes, links, and options, as demonstrated in the example provided. This architecture ensures that modules are self-contained and can be easily integrated into any project using the App Shell framework.`)
                ]),

                CodeCard(`import { Icons } from '@components/icons/icons.js';
import { Module } from '../module/module.js';

/**
 * This will set the routes for the module.
 */
const routes = Module.convertRoutes(
[
    {
        path: '/docs/:page?/:sub?*',
        import: import('./components/pages/documentation/documentation-page.js'),
        title: 'Docs'
    }
]);

/**
 * This will create our module and add it to the app
 * modules.
 */
Module.create(
{
    /**
     * @param {array} routes
     */
    routes,

    /**
     * This will get the options to create the app
     * navigation.
     *
     * @param {array} links
     */
    links: [
        {
            group: 'Discover',
            options: [
                { label: 'Docs', href: 'docs', icon: Icons.document.text, mobileOrder: 5 }
            ]
        }
    ]
});`)
            ]),

            // About the Contributors
            Section({ class: 'space-y-4 mt-12' }, [
                H4({ class: 'text-lg font-bold' }, 'Contributors and Community'),
                P({ class: 'text-muted-foreground' }, [
                    Span(`The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated team of developers who aim to continuously enhance its functionality.`)
                ]),
                P({ class: 'text-muted-foreground' }, [
                    Span(`For information on contributing, check the `),
                    A({ href: 'https://github.com/chrisdurfee/next-app-shell', class: 'underline', target: '_blank' }, 'GitHub repository'),
                    Span(` and join the community discussions to collaborate and innovate.`)
                ])
            ])
        ]
    )
);

export default IntroPage;
