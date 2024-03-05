import { Import } from "@base-framework/base";
import { A, Div, H1, Header } from "../../../../../components/atoms/atoms.js";
import { GridContainer } from '../../../../../components/molecules/molecules.js';
import { InlineOverlay } from '../../../../../components/organisms/inline-overlay.js';
import { Overlay } from '../../../../../components/organisms/overlay.js';
import { Panel } from '../../../../../components/organisms/panel.js';
import { AsidePage } from "../../../../../components/pages/aside-page.js";

/**
 * This will create an example overlay.
 *
 * @returns {object}
 */
const ExampleOverlay = () =>
{
	return new Overlay({ backHref: 'aside/' }, [
		new Panel([
			Div([
				Header([
					H1('Overlay')
				]),
				Div({ class: 'contained' }, [
					GridContainer()
				])
			])
		])
	]);
};

/**
 * This will create an import buttons.
 *
 * @returns {object}
 */
const ImportButtons = () =>
{
	return new Panel([
		Div([
			Header([
				H1('Aside')
			]),
			Div({ class: 'card' }, [
				Import({
					src: '/layout/components/atoms/import-buttons.js'
				})
			]),
			GridContainer()
		])
	]);
};

/**
 * This will create an example page.
 *
 * @param {string} url
 * @param {string} title
 * @returns {object}
 */
const ExamplePage = (url, title) =>
{
	return {
		uri: url,
		component: new Panel([
			Div([
				Header([
					H1(title)
				]),
				GridContainer()
			])
		])
	};
};

/**
 * This will create the aside routes.
 *
 * @param {string} basePath
 * @returns {array}
 */
const AsideRoutes = (basePath) =>
{
	return [
		{
			uri: `${basePath}/overlay-test`,
			component: ExampleOverlay()
		}
	];
};

/**
 * This will create the aside switch.
 *
 * @param {string} basePath
 * @returns {array}
 */
const AsideSwitch = (basePath) =>
{
	return [
		{
			uri: basePath,
			component: ImportButtons()
		},
		{
			uri: basePath + '/marketing*',
			component: new Panel([
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
		},
		ExamplePage(basePath + '/tempor-nulla', 'Tempor nulla'),
		ExamplePage(basePath + '/tempor-esse', 'Tempor esse'),
		ExamplePage(basePath + '/voluptate-dolore', 'Voluptate dolore'),
		ExamplePage(basePath + '/non-lorem', 'Non Lorem'),
		ExamplePage(basePath + '/tempor-nulla-1', 'Tempor nulla 1'),
		ExamplePage(basePath + '/tempor-esse-1', 'Tempor esse 1'),
		ExamplePage(basePath + '/voluptate-dolore-1', 'Voluptate dolore 1'),
		ExamplePage(basePath + '/non-lorem-1', 'Non Lorem 1')
	];
};

/**
 * This will create the aside links.
 *
 * @param {string} path
 * @returns {array}
 */
const AsideLinks = (path) =>
{
	return [
		{
			href: path,
			label: 'Aside',
			exact: true
		},
		{
			href: `${path}/overlay-test`,
			label: 'Overlay'
		},
		{
			label: 'Marketing',
			options: [
				{
					label: 'irure nostrud',
					href: path + '/marketing/irure-nostrud'
				},
				{
					label: 'ipsum dolore',
					href: path + '/marketing/ipsum-dolore'
				},
				{
					label: 'enim consectetur',
					options: [
						{
							label: 'irure nostrud',
							href: path + '/marketing/enim-consectetur/irure-nostrud'
						},
						{
							label: 'ipsum dolore',
							href: path + '/marketing/enim-consectetur/ipsum-dolore'
						},
						{
							label: 'enim consectetur',
							href: path + '/marketing/enim-consectetur/enim-consectetur'
						},
						{
							label: 'So many',
							options: [
								{
									label: 'irure nostrud',
									href: path + '/marketing/enim-consectetur/many/irure-nostrud'
								},
								{
									label: 'ipsum dolore',
									href: path + '/marketing/enim-consectetur/many/ipsum-dolore'
								},
								{
									label: 'enim consectetur',
									href: path + '/marketing/enim-consectetur/many/enim-consectetur'
								}
							]
						}
					]
				}
			]
		},
		{
			group: 'Group 1 name',
			options:
			[
				{
					label: 'Tempor nulla',
					href: path + '/tempor-nulla'
				},
				{
					label: 'Tempor esse',
					href: path + '/tempor-esse'
				},
				{
					label: 'Voluptate dolore',
					href: path + '/voluptate-dolore'
				},
				{
					label: 'Non Lorem',
					href: path + '/non-lorem'
				}
			]
		},
		{
			group: 'Group 2 name',
			options:
			[
				{
					label: 'Tempor nulla 1',
					href: path + '/tempor-nulla-1'
				},
				{
					label: 'Tempor esse 1',
					href: path + '/tempor-esse-1'
				},
				{
					label: 'Voluptate dolore 1',
					href: path + '/voluptate-dolore-1'
				},
				{
					label: 'Non Lorem 1',
					href: path + '/non-lorem-1'
				}
			]
		}
	];
};

const basePath = 'aside';

/**
 * MainAsidePage
 *
 * This will create an a side page.
 *
 * @class
 * @extends AsidePage
 */
const MainAsidePage = () =>
{
	return new AsidePage({
		/**
		 * @member {string}	title
		 */
		title: 'Active Primary Title',

		/**
		 * @member {string}	basePath
		 */
		basePath,

		/**
		 * @member {array} routes
		 */
		routes: AsideRoutes(basePath),

		/**
		 * @member {array} switch
		 */
		switch: AsideSwitch(basePath),

		/**
		 * @member {array} links
		 */
		links: AsideLinks(basePath)
	});
};

export default MainAsidePage;