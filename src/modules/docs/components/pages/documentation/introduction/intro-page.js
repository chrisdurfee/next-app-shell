import { A, Div, H4, P, Section, Span } from "@base-framework/atoms";
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
 * @returns {object}
 */
export const IntroPage = () => (
	DocPage(
		{
			title: 'Introduction',
			description: 'The App Shell project is an open-source versatile and modular platform, designed to speed up front-end application development using Tailwind CSS and Shadcn-inspired themes. It provides a comprehensive set of components and atoms created with the Base framework.'
		},
		[
			// About the App Shell
			Section({ class: 'flex flex-col gap-y-4' }, [
				H4({ class: 'text-lg font-bold' }, 'The App Shell'),
				P({ class: 'text-muted-foreground' }, `The App Shell is the core that sets up the Configs, router, Service Worker, ENV, global "app" variable, and renders the "shell" that is used to add the additional pages.`),
				P({ class: 'text-muted-foreground' }, `As a modular and scalable PWA (Progressive Web App), it offers easy installation across devices, making it suitable as a foundational framework for new projects. The project comes with PWA installation prompts for all devices.`),
				P({ class: 'text-muted-foreground' }, `Designed with accessibility, customization, and ease of use in mind, the App Shell accelerates setup, allowing developers to focus on creating functionality without reinventing the wheel.`)
			]),

			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Base UI'),
				P({ class: 'text-muted-foreground' }, { html: `The <a class="underline" href="https://github.com/chrisdurfee/ui" target="_blank">@base-framework/ui</a> npm package is a collection of atoms and components that are designed to be used by the app shell. This package has atoms, molecules, organisms, icons, templates, and pages. This package is open source and can be used by any project.` }),
			]),

			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold mt-12' }, 'Authentication'),
				P(`The shell supports auth flows and has a "signed in" and signed out" mode. It has a few default page types including a login page. The implentation of the auth flow is up to the developer.`),
			]),

			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold mt-12' }, 'Examples'),
				P({ class: 'text-muted-foreground' }, `The following examples demonstrate the use of various components and atoms within the App Shell framework that are designs from Shadcn.`),
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
			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Theme and Styling'),
				P({ class: 'text-muted-foreground' }, [
					Span(`This project is powered by Tailwind CSS, providing a highly customizable, utility-first approach to styling. Additionally, the theme draws inspiration from `),
					A({ href: 'https://github.com/shadcn', class: 'underline', target: '_blank' }, 'Shadcn’s UI component library'),
					Span(`, combining best practices for consistency and flexibility.`)
				]),
			]),

			// About the Icons
			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
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
			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
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

			// About the Contributors
			Section({ class: 'flex flex-col gap-y-4 mt-12' }, [
				H4({ class: 'text-lg font-bold' }, 'Contributors and Community'),
				P({ class: 'text-muted-foreground' }, [
					Span(`The App Shell is an open-source project, and contributions from the community are welcome. The project is maintained by a dedicated developer who aims to continuously enhance its functionality.`)
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
