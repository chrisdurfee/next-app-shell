import { Div, H2, UseParent } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@base-framework/ui/atoms";
import { BlankPage } from "@base-framework/ui/pages";
import { getDocumentById } from "./documents.js";

/**
 * This will create an overlay back button.
 *
 * @param {object} props
 * @returns {object}
 */
export const BackButton = Atom((props) =>
{
	const margin = props.margin || 'mx-4 ml-0';
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
export const DocumentPage = () => (
	new BlankPage({ class: 'p-0' }, [
		Div({ class: "flex flex-col w-full px-4 lg:px-8 max-w-[1800px] 2xl:max-w-[2200px] mx-auto" }, [
			UseParent(({ route }) =>
			{
				const document = getDocumentById(route.documentId);

				return Div({ class: "flex flex-col contained" }, [
					Header({ document })
				]);
			})
		])
	])
);

export default DocumentPage;
