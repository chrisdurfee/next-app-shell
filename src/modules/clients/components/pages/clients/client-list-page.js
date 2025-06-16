import { Div } from "@base-framework/atoms";
import { BlankPage } from "@base-framework/ui/pages";
import { ClientSummaryCards } from "./client-summary-cards.js";
import { ClientTable } from "./client-table.js";
import { clients } from "./clients.js";
import { PageHeader } from "./page-header.js";

/**
 * This will create the client list page.
 *
 * @returns {object}
 */
export const ClientListPage = () => (
	new BlankPage({ class: 'flex flex-auto flex-col' }, [
		Div({ class: 'grid grid-cols-1' }, [
			Div({ class: 'flex flex-auto flex-col p-6 pt-0 lg:space-y-12 md:pt-6 lg:p-8 w-full mx-auto' }, [
				PageHeader(),
				Div({ class: 'flex flex-auto flex-col space-y-4 lg:space-y-2' }, [
					ClientSummaryCards(),
					Div({ class: 'flex flex-col overflow-x-auto' }, [
						ClientTable({ clients })
					])
				])
			])
		])
	])
);

export default ClientListPage;