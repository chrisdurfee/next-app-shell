import { Import } from "@base-framework/base";
import { A, Div, H1, Header, MainSection } from "../atoms/atoms.js";
import { GridContainer } from '../molecules/molecules.js';
import { InlineOverlay } from '../organisms/inline-overlay.js';
import { InlineNavigation } from '../organisms/navigation/inline-navigation.js';
import { Overlay } from '../organisms/overlay.js';
import { Panel } from '../organisms/panel.js';
import { AsideTemplate } from '../templates/aside-template.js';
import { BasicPage } from './basic-page.js';

/**
 * AsidePage
 *
 * This will create an a side page.
 *
 * @class
 * @extends BasicPage
 */
export default class AsidePage extends BasicPage
{
	render()
	{
		return MainSection(
			{
				route: {
					uri: 'aside/overlay-test',
					component: new Overlay({ backHref: 'aside/' }, [
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
					])
				}
			},
			[
				AsideTemplate({
					left: this.addAside(),
					right: this.addBody()
				})
			]
		);
	}

	/**
	 * This will add the aside of the page.
	 *
	 * @returns {object}
	 */
	addAside()
	{
		return Div([
			H1('Active Primary Title'),
			this.addNavigation()
		]);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @returns {object}
	 */
	addBody()
	{
		const path = 'aside';

		return [
			{
				class: 'contained',
				switch: [
					{
						uri: path,
						component: new Panel([
							Div([
								Header([
									H1('Aside')
								]),
								Div({ class: 'card' }, [
									Import({
										src: '/layout/atoms/import-buttons.js'
									})
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/marketing*',
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
					{
						uri: path + '/tempor-nulla',
						component: new Panel([
							Div([
								Header([
									H1('Tempor nulla')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/tempor-esse',
						component: new Panel([
							Div([
								Header([
									H1('Tempor esse')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/voluptate-dolore',
						component: new Panel([
							Div([
								Header([
									H1('Voluptate dolore')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/non-lorem',
						component: new Panel([
							Div([
								Header([
									H1('Non Lorem')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/tempor-nulla-1',
						component: new Panel([
							Div([
								Header([
									H1('Tempor nulla 1')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/tempor-esse-1',
						component: new Panel([
							Div([
								Header([
									H1('Tempor esse 1')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/voluptate-dolore-1',
						component: new Panel([
							Div([
								Header([
									H1('Voluptate dolore 1')
								]),
								GridContainer()
							])
						])
					},
					{
						uri: path + '/non-lorem-1',
						component: new Panel([
							Div([
								Header([
									H1('Non Lorem 1')
								]),
								GridContainer()
							])
						])
					}
				]
			}
		];
	}

	/**
	 * This will add the navigation of the page.
	 *
	 * @returns {object}
	 */
	addNavigation()
	{
		return new InlineNavigation(
		{
			options: this.getLinks()
		});
	}

	/**
	 * This will get the links.
	 *
	 * @return {array}
	 */
	getLinks()
	{
		const path = 'aside';

		return [
			{
				href: 'aside',
				label: 'Aside',
				exact: true
			},
			{
				href: 'aside/overlay-test',
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
	}
}