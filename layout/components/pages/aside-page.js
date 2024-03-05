import { Div, H1, MainSection } from "../atoms/atoms.js";
import { InlineNavigation } from '../organisms/navigation/inline-navigation.js';
import { BasicPage } from './basic-page.js';
import { AsideTemplate } from './templates/aside-template.js';

/**
 * AsidePage
 *
 * This will create an a side page.
 *
 * @class
 * @extends BasicPage
 */
export class AsidePage extends BasicPage
{
	/**
	 * @member {string}	title
	 */
	title = 'Active Title';

	/**
	 * @member {string}	basePath
	 */
	basePath = 'aside';

	/**
	 * This will render the page.
	 *
	 * @returns {object}
	 */
	render()
	{
		return MainSection(
			{
				route: this.addRoutes()
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
	 * This will add the routes.
	 *
	 * @returns {array}
	 */
	addRoutes()
	{
		return this.routes || [];
	}

	/**
	 * This will add the aside of the page.
	 *
	 * @returns {object}
	 */
	addAside()
	{
		return Div([
			H1(this.title),
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
		return [
			{
				class: 'contained',
				switch: this.addSwitch()
			}
		];
	}

	/**
	 * This will add the switch of the page.
	 *
	 * @returns {array}
	 */
	addSwitch()
	{
		return this.switch || [];
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
		return this.links || [];
	}
}