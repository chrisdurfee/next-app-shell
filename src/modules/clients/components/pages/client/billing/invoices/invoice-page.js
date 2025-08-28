import { Div } from "@base-framework/atoms";
import { BlankPage } from "@base-framework/ui/pages";
import { InvoiceTable } from "./invoice-table.js";
import { INVOICES } from "./invoices.js";
import { PageHeader } from "./page-header.js";
import { SummaryCards } from "./summary-cards.js";

/**
 * InvoicePage
 *
 * Page showing a client's invoice list.
 *
 * @returns {object} A BlankPage component.
 */
export const InvoicePage = () =>
	new BlankPage([
		Div({ class: 'grid grid-cols-1 p-4 md:p-6' }, [
			Div({ class: 'flex flex-auto flex-col pt-0 lg:gap-y-12 w-full mx-auto 2xl:max-w-[1600px]' }, [
				PageHeader(),
				Div({ class: 'flex flex-auto flex-col gap-y-4 lg:gap-y-2' }, [
					SummaryCards({ invoices: INVOICES }),
					Div({ class: 'flex flex-col overflow-x-auto' }, [
						InvoiceTable({ invoices: INVOICES })
					])
				])
			])
		])
	]);

export default InvoicePage;
