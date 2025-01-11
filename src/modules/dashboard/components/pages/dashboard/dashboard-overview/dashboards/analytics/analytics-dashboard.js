import { Div, H2, P } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { Page } from "@base-framework/ui/pages";

/**
 * AnalyticsEmptyState
 *
 * This will create the AnalyticsEmptyState molecule.
 *
 * @returns {object}
 */
export const AnalyticsEmptyState = () => (
	new Page([
		Div({
				class: "flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96",
			},
			[
				Icon({ size: "xl" }, Icons.chart),
				H2({ class: "text-lg font-semibold" }, "No Analytics Data Available"),
				P({ class: "text-muted-foreground" }, "There are currently no analytics data to display. Please add some data sources or check back later.")
			]
		)
	])
);

export default AnalyticsEmptyState;
