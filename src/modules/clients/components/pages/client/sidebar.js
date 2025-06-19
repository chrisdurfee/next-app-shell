import { Div, H1, Header } from "@base-framework/atoms";
import { Icons } from "@base-framework/ui/icons";
import { BackButton } from "@base-framework/ui/organisms";
import { SidebarMenu } from "./sidebar-menu.js";

/**
 * Toolbar
 *
 * Displays a back button in the toolbar.
 *
 * @returns {object}
 */
const Toolbar = () => (
	Div({ class: "flex w-full items-center justify-between pb-2 mt-2 pl-2" }, [
		Header({ class: 'flex space-x-4' }, [
			BackButton({
				margin: 'm-0 ml-0',
				backUrl: '/clients'
			}),
			H1({ class: 'scroll-m-20 text-3xl lg:text-2xl font-bold tracking-tight' }, 'Client Profile'),
		])
	])
);

/**
 * This will create the Sidebar.
 *
 * @param {object} props
 * @returns {object}
 */
export const Sidebar = ({ clientId }) => (
	SidebarMenu({
		topNav: Toolbar(),
		options: [
			{ label: 'Summary', href: `clients/client/${clientId}`, icon: Icons.office.single, exact: true },
			{
				label: 'Communication',
				icon: Icons.chat.group,
				options: [
					{ label: 'Contacts', href: `clients/client/${clientId}/communication/contacts` },
					{ label: 'Messages', href: `clients/client/${clientId}/communication/messages` },
					{ label: 'Calls', href: `clients/client/${clientId}/communication/calls` },
					{ label: 'Notes', href: `clients/client/${clientId}/communication/notes` }
				]
			},
			{
				label: 'Billing',
				icon: Icons.currency.dollar,
				options: [
					{ label: 'Invoices', href: `clients/client/${clientId}/billing/invoices` },
					{ label: 'Payments', href: `clients/client/${clientId}/billing/payments` },
					{ label: 'Orders', href: `clients/client/${clientId}/billing/orders` }
				]
			},
			{ label: 'Support', href: `clients/client/${clientId}/support`, icon: Icons.ticket }
		]
	})
);