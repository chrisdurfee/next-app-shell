import { Div, H3, Header, P, Span } from "@base-framework/atoms";
import { Card } from "@base-framework/ui/atoms";

/**
 * A single row in the “Sales by Location” card.
 *
 * @param {object} props
 * @returns {object}
 */
const SalesByLocationItem = ({ country, percent, change, isPositive }) =>
	Div({ class: "flex flex-auto flex-col space-y-4" }, [

		Div({ class: "flex flex-auto space-x-4 justify-between" }, [
			// Country name + change badge
			Div({ class: "flex space-x-2 w-32 shrink-0" }, [
				Span({ class: "text-sm font-medium" }, country),
				Span({
					class: [
						"text-xs font-medium px-2 py-0.5 rounded-full",
						isPositive
							? "bg-green-900"
							: "bg-red-900",
					].join(" "),
				}, `${isPositive ? "+" : ""}${change}`),
			]),

			// Percentage label
			Span({ class: "w-10 text-sm font-medium text-right" }, `${percent}%`),
		]),

		// Bar// Bar (white fill + grey remainder)
		Div({ class: "flex flex-auto h-2 bg-muted rounded-full overflow-hidden" }, [
			Span({
				class: "block h-full bg-primary",
				style: `width: ${percent}%`,
			}),
		]),
	]);

/**
 * SalesByLocationCard
 *
 * Shows “Sales by Location” with a sparkline-style bar and change.
 *
 * @returns {object}
 */
export const SalesByLocationCard = () =>
	Card({ padding: "p-0", margin: "m-0", class: "col-span-3" }, [
			// Header
			Header({ class: "flex flex-auto flex-col space-y-1.5 p-6" }, [
				H3(
					{ class: "font-semibold leading-none tracking-tight" },
					"Sales by Location"
				),
				P(
					{ class: "text-sm text-muted-foreground" },
					"Income in the last 28 days"
				),
			]),

			// Rows
			Div({ class: "flex flex-auto flex-col space-y-4 px-6 pb-6" }, [
				SalesByLocationItem({
					country: "Canada",
					percent: 85,
					change: "5.2%",
					isPositive: true,
				}),
				SalesByLocationItem({
					country: "Greenland",
					percent: 80,
					change: "7.8%",
					isPositive: true,
				}),
				SalesByLocationItem({
					country: "Russia",
					percent: 63,
					change: "2.1%",
					isPositive: false,
				}),
				SalesByLocationItem({
					country: "China",
					percent: 60,
					change: "3.4%",
					isPositive: true,
				}),
				SalesByLocationItem({
					country: "Australia",
					percent: 45,
					change: "1.2%",
					isPositive: true,
				}),
				SalesByLocationItem({
					country: "Greece",
					percent: 40,
					change: "1.0%",
					isPositive: true,
				}),
			]),
		]
	);

export default SalesByLocationCard;