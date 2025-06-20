import { Div, H2 } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@base-framework/ui/atoms";
import { DOCUMENTS } from "./documents.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const BackButton = Atom((props) =>
{
	const margin = props.margin || 'm-4 ml-0';
	props.allowHistory = (props.allowHistory === true);
	return Div({ class: `flex-none ${margin}` }, [
		Button({ variant: 'back', class: 'ghost', ...props })
	]);
});

/**
 * This renders the header section for the document page.
 *
 * @param {object} document - The document data
 * @returns {object}
 */
const Header = ({ document }) => (
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex items-center" }, [
			BackButton({
				backUrl: `/directory/user/${document.userId}/documents`,
			}),
			H2({ class: "text-2xl font-semibold" }, `${document.title} / ${document.date}`),
		])
	])
);

/**
 * DocumentPage
 *
 * Renders the document page.
 *
 * @returns {object}
 */
export const DocumentPage = () =>
{
	const document = DOCUMENTS[0];

	return Div({ class: "flex flex-col contained" }, [
		Header({ document })
	]);
};

export default DocumentPage;
