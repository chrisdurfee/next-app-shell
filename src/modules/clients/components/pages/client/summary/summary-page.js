import { Div, H2, On } from "@base-framework/atoms";
import { Data } from "@base-framework/base";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Page } from "@base-framework/ui/pages";
import { ClientModal } from "../../../organisms/modals/client-modal.js";
import { getClientById } from "../../clients/clients.js";
import { ClientContent } from "./client-content.js";
import ClientSkeleton from "./client-skeleton.js";
import { ConversationSection } from "./conversation/conversation-section.js";

/**
 * ClientPage properties.
 *
 * @type {object} props
 */
const props =
{
	class: 'flex flex-auto flex-col w-full',

	/**
	 * Sets up the state and loading simulation for the page.
	 *
	 * @returns {object}
	 */
	setData()
	{
		return new Data({
			loaded: false,
			user: null
		});
	},

	/**
	 * Simulates loading and fetches the user by ID after a delay.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const route = this.route;
		const client = getClientById(route.clientId);

		const DELAY = 500;
		setTimeout(() => this.data.set({ client, loaded: true }), DELAY);
	},

	/**
	 * Deletes the data when the component is destroyed.
	 *
	 * @returns {void}
	 */
	beforeDestroy()
	{
		this.data.delete();
		this.data.loaded = false;
	}
};

/**
 * PageHeader
 *
 * Creates the header for the client page, including the title and edit button.
 *
 * @param {object} client The client data to display.
 * @returns {object}
 */
const PageHeader = (client) => (
	Div({ class: 'flex flex-row justify-between gap-4 py-4 lg:py-2' }, [
		H2({ class: 'text-2xl font-medium' }, 'Client Summary'),
		Div({ class: 'flex flex-row space-x-2' }, [
			Div({ class: 'hidden lg:inline-flex' }, [
				Button({ variant: 'withIcon', class: 'text-muted-foreground outline', icon: Icons.pencil.square, click: ClientModal }, 'Edit'),
			]),
			Div({ class: 'flex lg:hidden mr-4' }, [
				Tooltip({ content: 'Edit', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.pencil.square, click: ClientModal }))
			])
		])
	])
);

/**
 * SummaryPage
 *
 * Summary page for displaying client information.
 *
 * @returns {Page}
 */
export const SummaryPage = () => (
	new Page(props, [
		On("loaded", (loaded, ele, { data }) =>
		{
			if (!loaded)
			{
				return ClientSkeleton();
			}

			const client = data.client;
			if (!client)
			{
				return Div({ class: "text-center" }, "Client not found.");
			}

			return Div({ class: 'flex flex-auto p-0 pt-0 w-full' }, [
				Div({ class: 'flex flex-auto flex-col lg:flex-row'}, [
					Div({ class: 'flex flex-auto flex-col min-w-0' }, [
						Div({ class: 'flex flex-col max-w-full p-6' }, [
							PageHeader(client),
							ClientContent({ client }),
						])
					]),
					Div({ class: 'hidden 2xl:flex flex-none min-w-[420px] border-l' }, [
						ConversationSection({ client })
					]),
				])
			]);
		})
	])
);

export default SummaryPage;