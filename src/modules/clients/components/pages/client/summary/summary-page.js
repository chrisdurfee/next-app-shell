import { Div, H2, On } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Page } from "@base-framework/ui/pages";
import { ClientModal } from "../../../organisms/modals/client-modal.js";
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
	class: 'flex flex-auto flex-col w-full'
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
		Div({ class: 'flex flex-row gap-x-2' }, [
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
		On("loaded", (loaded, ele, { context }) =>
		{
			if (!loaded)
			{
				return ClientSkeleton();
			}

			const client = context.data.client;
			if (!client)
			{
				return Div({ class: "text-center" }, "Client not found.");
			}

			return Div({ class: 'flex flex-auto p-0 pt-0 w-full' }, [
				Div({ class: 'flex flex-auto flex-col lg:flex-row'}, [
					Div({ class: 'flex flex-auto flex-col min-w-0' }, [
						Div({ class: 'flex flex-col w-full max-w-[1400px] md:p-6 mx-auto' }, [
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