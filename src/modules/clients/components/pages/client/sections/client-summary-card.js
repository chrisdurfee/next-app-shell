import { Div, H2, P } from "@base-framework/atoms";
import { Card, Icon } from "@base-framework/ui/atoms";

/**
 * ClientSummaryCard
 *
 * A card for displaying client statistics.
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string|number} props.value
 * @param {object} props.icon
 * @returns {object}
 */
export const ClientSummaryCard = ({ title, value, icon }) =>
	Card({ class: "bg-card border border-border rounded-lg p-4 min-w-[250px] min-h-32 hover:bg-muted/50 transition-colors", margin: "m-0" },
		Div({ class: "flex flex-col space-y-2" }, [
			Div({ class: "flex items-center space-x-2 text-muted-foreground" }, [
				Icon(icon, { class: "text-lg" }),
				H2({ class: "text-sm font-medium" }, title)
			]),
			P({ class: "text-2xl font-bold text-foreground" }, value)
		])
	);

export default ClientSummaryCard