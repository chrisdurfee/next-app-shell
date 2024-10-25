import { Atom, Import } from "@base-framework/base";
import { A, Div, H1, Header, P } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { InlineOverlay } from '../../../../../components/organisms/inline-overlay.js';
import { Panel } from '../../../../../components/organisms/panel.js';

/**
 * This will create a header for the documentation.
 *
 * @param {object} props
 * @returns {object}
 */
const PageHeader = Atom(({ title, description}) => (
	Header({ class: 'sm:py-8 px-5 flex flex-col' }, [
		H1({ class: 'scroll-m-20 text-3xl font-bold tracking-tight' }, title),
		description && P({ class: 'text-base text-muted-foreground py-2 max-w-[700px]' }, description),
	])
));

/**
 * This will create an import buttons.
 *
 * @returns {object}
 */
const ImportButtons = () => (
	new Panel([
		Div([
			PageHeader({
				title: 'Main Title',
			}),
			Div({ class: 'rounded-lg border bg-card text-card-foreground shadow-sm my-5 mx-5 p-4' }, [
				Import({ src: import('../../../../../components/atoms/import-buttons.js') })
			]),
			GridContainer()
		])
	])
);

/**
 * This will create an example page.
 *
 * @param {string} url
 * @param {string} title
 * @returns {object}
 */
const ExamplePage = (url, title) => ({
	uri: url,
	component: new Panel([
		Div([
			PageHeader({
				title,
			}),
			GridContainer()
		])
	])
});

/**
 * This will create a marketing page.
 *
 * @returns {object}
 */
const MarketingPage = () => (
	new Panel([
		{
			switch: [
				{
					uri: 'aside/marketing/irure-nostrud/:id',
					component: new InlineOverlay({ backHref: 'aside/marketing/' }, [
						new Panel([
							Div([
								PageHeader({
									title: 'Overlay',
								}),
								GridContainer()
							])
						])
					])
				},
				{
					uri: 'aside/marketing/*',
					component: new Panel([
						A({ href: 'aside/marketing/irure-nostrud/1' }, [
							PageHeader({
								title: 'Marketing',
							}),
							GridContainer()
						])
					])
				}
			]
		}
	])
);

/**
 * This will create the aside switch.
 *
 * @param {string} basePath
 * @returns {array}
 */
export const AsideSwitch = (basePath) => ([
	{
		uri: basePath,
		component: ImportButtons()
	},
	{
		uri: basePath + '/marketing*',
		component: MarketingPage()
	},
	ExamplePage(basePath + '/tempor-nulla', 'Tempor nulla'),
	ExamplePage(basePath + '/tempor-esse', 'Tempor esse'),
	ExamplePage(basePath + '/voluptate-dolore', 'Voluptate dolore'),
	ExamplePage(basePath + '/non-lorem', 'Non Lorem'),
	ExamplePage(basePath + '/tempor-nulla-1', 'Tempor nulla 1'),
	ExamplePage(basePath + '/tempor-esse-1', 'Tempor esse 1'),
	ExamplePage(basePath + '/voluptate-dolore-1', 'Voluptate dolore 1'),
	ExamplePage(basePath + '/non-lorem-1', 'Non Lorem 1')
]);