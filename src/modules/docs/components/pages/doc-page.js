import { Div, H1, Header, P, Section } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { FullContainPage } from '../../../../components/pages/full-contain-page.js';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const DocHeader = Atom(({ title, description}) => (
	Header({ class: 'flex flex-col' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		P({ class: 'text-base text-muted-foreground py-2' }, description),
	])
));

/**
 * This will create a body for the documentation.
 *
 * @param {object} props
 * @param {object} children
 * @returns {object}
 */
const DocBody = Atom((props, children) => (
	Div({ class: 'contained py-8' }, [
		DocHeader(props),
		Section({ class: 'pb-12 pt-8'}, children)
	])
));

/**
 * DocPage
 *
 * This will create a full page.
 *
 * @param {object} props
 * @param {object} children
 * @returns {DocPage}
 */
export const DocPage = Atom((props, children) => (
	new FullContainPage([
		DocBody(props, children)
	])
));

export default DocPage;