import { Import } from "@base-framework/base";
import { A, Div, H1, Header } from "../../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../../components/molecules/molecules.js';
import { InlineOverlay } from '../../../../../../components/organisms/inline-overlay.js';
import { Panel } from '../../../../../../components/organisms/panel.js';

/**
 * This will create an import buttons.
 *
 * @returns {object}
 */
const ImportButtons = () => (
	new Panel([
		Div([
			Header([
				H1({ class: 'p-4' }, 'Aside')
			]),
			Div({ class: 'card' }, [
				Import({ src: import('../../../../../../components/atoms/import-buttons.js') })
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
			Header([
				H1({ class: 'p-4' }, title)
			]),
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
								Header([
									H1('Overlay')
								]),
								GridContainer()
							])
						])
					])
				},
				{
					uri: 'aside/marketing/*',
					component: new Panel([
						A({ href: 'aside/marketing/irure-nostrud/1' }, [
							Header([
								H1('Marketing')
							]),
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