import { Div } from "@base-framework/atoms";
import { MobileNavWrapper } from "../organisms/navigation/mobile/nav-wrapper/mobile-nav-wrapper.js";
import SidebarMenu from "../organisms/navigation/sidebar-menu/sidebar-menu.js";
import { BasicPage } from './basic-page.js';
import { MainSection } from "./main-section.js";
import { AsideTemplate } from './templates/aside-template.js';

/**
 * SidebarMenuPage
 *
 * This will create an a side page.
 *
 * @class
 * @extends BasicPage
 */
export class SidebarMenuPage extends BasicPage
{
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
					left: this.addSidebar(),
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
	 * This will add the sidebar of the page.
	 *
	 * @returns {object}
	 */
	addSidebar()
	{
		return Div({ class: 'flex flex-auto flex-col' }, this.addNavigation());
	}

	/**
	 * This will add the body of the page.
	 *
	 * @returns {object}
	 */
	addBody()
	{
		return Div({ class: 'flex flex-auto flex-col' }, [
			{
				class: 'contained',
				switch: this.addSwitch()
			}
		]);
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
		const options = this.getLinks();

		return [
			SidebarMenu(
			{
				title: this.title,
				options,
				class: 'hidden lg:block'
			}),
			MobileNavWrapper({ title: this.title, options })
		];
	}

	/**
	 * This will get the links.
	 *
	 * @returns {array}
	 */
	getLinks()
	{
		return this.links || [];
	}
}

export default SidebarMenuPage;