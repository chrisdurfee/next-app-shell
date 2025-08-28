import { Div } from "@base-framework/atoms";
import { BlankPage } from "@base-framework/ui/pages";
import { OrdersTable } from "./orders-table.js";
import { ORDERS } from "./orders.js";
import { PageHeader } from "./page-header.js";
import { SummaryCards } from "./summary-cards.js";

/**
 * OrdersPage
 *
 * Page showing a client's order list.
 *
 * @returns {object} A BlankPage component.
 */
export const OrdersPage = () =>
	new BlankPage([
		Div({ class: 'grid grid-cols-1 p-4 md:p-6' }, [
			Div({ class: 'flex flex-auto flex-col pt-0 lg:gap-y-12 w-full mx-auto 2xl:max-w-[1600px]' }, [
				PageHeader(),
				Div({ class: 'flex flex-auto flex-col gap-y-4 lg:gap-y-2' }, [
					SummaryCards({ orders: ORDERS }),
					Div({ class: 'flex flex-col overflow-x-auto' }, [
						OrdersTable({ orders: ORDERS })
					])
				])
			])
		])
	]);

export default OrdersPage;
