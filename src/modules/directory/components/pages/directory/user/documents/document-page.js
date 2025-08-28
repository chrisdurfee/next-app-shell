import { Div, H2, OnState, Pre, UseParent } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
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
const Header = ({ document, editing, toggle }) =>
(
	Div({ class: "flex items-center justify-between mb-6 py-2" }, [
		Div({ class: "flex items-center gap-x-2" }, [
			BackButton({ backUrl: `/directory/user/${document.userId}/documents` }),
			H2({ class: "text-2xl font-semibold" }, `${document.title} / ${document.date}`)
		]),

		OnState('editing', (state) => (state)
			? Button({
					variant: "withIcon",
					class: "ml-4",
					click: toggle,
					icon: Icons.check
				}, 'Save')
			: Button({
					variant: "withIcon",
					class: "ml-4 outline",
					click: toggle,
					icon: Icons.pencil.default
				}, 'Edit')
		)
	])
);

/**
 * Props
 *
 * @typedef {object} Props
 */
const Props =
{
	class: 'p-0',

	/**
	 * This will setup the initial states for the component.
	 *
	 * @returns {object}
	 */
	setupStates()
	{
		return {
			editing: false
		};
	}
};

/**
 * DocumentPage
 *
 * Renders the document page.
 *
 * @returns {object}
 */
export const DocumentPage = () => (
	new BlankPage(Props, [
		Div({ class: "flex flex-col w-full px-4 lg:px-8 max-w-[1800px] 2xl:max-w-[2200px] mx-auto" }, [
			UseParent(({ route, state }) =>
			{
				const document = getDocumentById(route.documentId);

				return Div({ class: "flex flex-col contained" }, [
					Header({
						document,
						editing: state.editing,
						toggle: () => state.toggle('editing')
					}),
					OnState('editing', (state) =>
					{
						return (state)
						? Div({ class: "text-red-500" }, "Editing mode is ON")
						: Pre({ class: 'text-muted-foreground whitespace-pre-line font-sans' }, document.content);
					}),
				]);
			})
		])
	])
);

export default DocumentPage;
