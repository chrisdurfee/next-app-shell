import { Div, H1, Header } from "@base-framework/atoms";
import { Button, Tooltip } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { SearchDropdown } from "@base-framework/ui/organisms";
import { ClientModal } from "./client-modal.js";
import { clients } from "./clients.js";

/**
 * This will convert clients to options.
 *
 * @param {array} clients
 * @returns {array}
 */
const convertClientsToOptions = (clients) => clients.map((client) => ({ label: client.name, value: client.id }));

/**
 * This will create a search input for the clients page.
 *
 * @returns {object}
 */
const SearchInput = () => (
	new SearchDropdown({
		options: convertClientsToOptions(clients),
		onSelect: (item) => console.log(item)
	})
);

/**
 * This will create a page header for the clients page.
 *
 * @returns {object}
 */
export const PageHeader = () => (
	Header({ class: 'flex flex-auto flex-col pt-0 sm:pt-2 md:pt-0' }, [
		Div({ class: 'flex flex-auto items-center justify-between w-full' }, [
			H1({ class: 'text-3xl font-bold' }, 'Clients'),
			Div({ class: 'hidden lg:flex min-w-[440px]' }, [
				SearchInput()
			]),
			Div({ class: 'flex items-center gap-2' }, [
				Div({ class: 'hidden lg:flex' }, [
					Button({ variant: 'withIcon', class: 'text-muted-foreground', icon: Icons.circlePlus, click: () => ClientModal() }, 'Add Client')
				]),
				Div({ class: 'flex lg:hidden mr-0' }, [
					Tooltip({ content: 'Add Client', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.circlePlus, click: () => ClientModal() }))
				])
			])
		]),
		Div({ class: 'flex lg:hidden w-full mx-auto my-4' }, [
			SearchInput()
		])
	])
);