import { A, Div, H2, P } from "@base-framework/atoms";
import { List } from "@base-framework/organisms";
import { Button, Card, Icon } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { DOCUMENTS } from "./documents.js";

/**
 * This renders the header section for the 1-1 meeting page.
 *
 * @returns {object}
 */
const Header = () =>
(
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex flex-auto justify-between items-center space-x-4" }, [
			H2({ class: "text-2xl font-semibold" }, `Documents`),
			Button({
				variant: "withIcon",
				class: "primary",
				click: () => console.log("New document clicked"),
				icon: Icons.circlePlus
			}, "New document")
		])
	])
);

/**
 * DocumentItem
 *
 * Renders a single document card with thumbnail, title, subtitle, and price.
 *
 * @param {object} document - The document data
 * @param {string} document.id - Document ID
 * @param {string} document.userId - Owner user ID
 * @param {string} document.title - Document title
 * @param {string} document.subtitle - Document subtitle (e.g. author/publisher)
 * @param {string} document.thumbnailUrl - URL to the document thumbnail image
 * @param {string} document.price - Display price for the document
 * @returns {object}
 */
const DocumentItem = (document) =>
(
	A({ href: `/directory/user/${document.userId}/documents/${document.id}` }, [
		Card({
			class: "flex flex-col items-center justify-center h-72",
			margin: "m-0",
			padding: "p-0",
			hover: true
		},
		[
			Icon({ size: 'lg' }, Icons.document.text)
		]),
		Div({ class: "p-4 flex flex-col space-y-1" }, [
			P({ class: "text-sm font-medium truncate" }, document.title),
			P({ class: "text-xs text-muted-foreground truncate" }, document.subtitle),
			//P({ class: "text-sm font-semibold" }, document.price)
		])
	])
);

/**
 * This renders the topics section for the document.
 *
 * @param {Array<object>} documents - The document data
 * @returns {object}
 */
const Documents = (documents) =>
(
	Div({ class: "mb-6" }, [
		new List({
			cache: "documents",
			class: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6',
			key: "id",
			items: documents || [],
			role: "list",
			rowItem: DocumentItem
		})
	])
);

/**
 * DocumentsListPage
 *
 * Renders the documents list.
 *
 * @returns {object}
 */
export const DocumentsListPage = () =>
{
	return Div({ class: "flex flex-col w-full mx-auto max-w-[1400px]" }, [
		Header(),
		Documents(DOCUMENTS)
	]);
};

export default DocumentsListPage;
