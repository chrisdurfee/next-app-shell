import { Div, H2, P } from "@base-framework/atoms";
import { Icon } from "@components/atoms/icon.js";
import { Icons } from "@components/icons/icons.js";

/**
 * BrowsePage
 *
 * This will create the BrowsePage molecule.
 *
 * @returns {object}
 */
export const BrowsePage = () => {
	return Div({
			class: "flex flex-col items-center justify-center text-center p-6 space-y-4 bg-background border rounded-lg min-h-96 m-4",
		},
		[
			Icon({ size: "xl" }, Icons.music),
			H2({ class: "text-lg font-semibold" }, "The Browse Page"),
			P({ class: "text-muted-foreground" }, "This is a placeholder for the browse page.")
		]
	);
};