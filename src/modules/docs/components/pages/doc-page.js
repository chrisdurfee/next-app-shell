import { Div, H1, P } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import { FullContainPage } from '../../../../components/pages/full-contain-page.js';

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
		Div({ class: 'contained py-8' }, [
            H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, props.title),
            P({ class: 'text-base text-muted-foreground' }, props.description),
            ...children
		])
	])
));

export default DocPage;