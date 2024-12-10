import { H1, Header, P } from "@base-framework/atoms";
import { Atom } from '@base-framework/base';
import { BasicPage } from './basic-page.js';
import { MainSection } from "./main-section.js";
import { FullTemplate } from './templates/full-template.js';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = Atom(({ title, description}) => (
	Header({ class: 'sm:py-8 px-6 md:px-5 flex flex-col' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description),
	])
));

/**
 * FullPage
 *
 * This will create a full page.
 *
 * @class
 * @extends BasicPage
 */
export class FullPage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @returns {object}
	 */
	render()
	{
		return MainSection([
			PageHeader({
				title: this.title,
				description: this.description
			}),
			FullTemplate(this.children)
		]);
	}
}