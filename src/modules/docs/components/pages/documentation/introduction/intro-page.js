import { A, H4, P, Section, Span } from "@base-framework/atoms";
import { DocPage } from "../../doc-page.js";

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
                ])
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
