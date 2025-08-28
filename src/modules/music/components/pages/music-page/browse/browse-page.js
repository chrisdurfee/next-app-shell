import { Div, H2, P } from "@base-framework/atoms";
import { Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { BlankPage } from "@base-framework/ui/pages";

/**
 * BrowsePage
 *
 * This will create the BrowsePage molecule.
 *
 * @returns {object}
 */
export const BrowsePage = () => (
	new BlankPage([
		Div({
				class: "flex flex-col items-center justify-center text-center p-6 gap-y-4 bg-background border rounded-lg min-h-96 m-4",
			},
			[
				Icon({ size: "xl" }, Icons.music),
				H2({ class: "text-lg font-semibold" }, "The Browse Page"),
				P({ class: "text-muted-foreground" }, "This is a placeholder for the browse page.")
			]
		)
	])
);

export default BrowsePage;