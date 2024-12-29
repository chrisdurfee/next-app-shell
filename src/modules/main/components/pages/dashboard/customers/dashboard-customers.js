import { Div, H2, P } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";

/**
 * DashboardCustomersEmptyState
 *
 * This will create the DashboardCustomersEmptyState molecule.
 *
 * @returns {object}
 */
export const DashboardCustomersEmptyState = () => {
	return Div({
			class: "flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96 m-4",
		},
		[
			Icon({ size: "xl" }, Icons.chart),
			H2({ class: "text-lg font-semibold" }, "No Customer Data Available"),
			P({ class: "text-muted-foreground" }, "There are currently no customer data to display. Please add some data sources or check back later.")
		]
	);
};
