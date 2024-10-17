import { Div, Nav, Section, Ul } from "@base-framework/atoms";
import { Component, NavLink, router } from "@base-framework/base";

/**
 * This will validate if a path is active.
 *
 * @param {string} path
 * @param {string} url
 * @returns {boolean}
 */
const isPathActive = (path, url) => url.indexOf(path) !== -1;

/**
 * This will check if a link is active.
 *
 * @param {object} link
 * @param {string} url
 * @returns {boolean}
 */
const isLinkActive = (link, url) =>
{
	const path = link.getLinkPath() ?? '';
	return isPathActive(path, url);
};

/**
 * TabNavigation
 *
 * This will create a tab navigation component.
 *
 * @class
 */
export class TabNavigation extends Component
{
	/**
	 * This will configure the links.
	 */
	onCreated()
	{
		this.links = [];
	}

	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Nav({ class: `tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${this.class}` }, [
			Ul({
				class: 'flex flex-auto flex-row',
				map: [this.options, (option) => this.addLink(option)],
				watch: {
					value: ['[[path]]', router.data],
					callBack: this.updateLinks.bind(this)
				}
			})
		]);
	}

	/**
	 * This will update the links.
	 *
	 * @returns {void}
	 */
	afterSetup()
	{
		const path = router.data.path;
		this.updateLinks(path);
	}

	/**
	 * This will update the links.
	 *
	 * @param {string} value
	 * @returns {void}
	 */
	updateLinks(value)
	{
		let check = false,
		firstLink = this.links[0];

		for (const link of this.links)
		{
			if (link.rendered === false)
			{
				continue;
			}

			check = isLinkActive(link, value);
			if (check === true)
			{
				break;
			}
		}

		if (check !== true && firstLink)
		{
			this.updateLink(firstLink, true);
		}
	}

	/**
	 * This will update the link.
	 *
	 * @param {object} link
	 * @param {boolean} selected
	 * @returns {void}
	 */
	updateLink(link, selected)
	{
		link.update(selected);
	}

	/**
	 * This will add a link.
	 *
	 * @param {object} option
	 * @returns {object}
	 */
	addLink({ label: text, href })
	{
		const link = new NavLink({
			text,
			href,
			dataSet: ['selected', ['state', true, 'active']],
			class: 'inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm'
		});
		this.links.push(link);
		return link;
    }
}

/**
 * Tab
 *
 * This will create a tab component that can route
 * to tab panels.
 *
 * @class
 */
export class Tab extends Component
{
	/**
	 * This will render the component.
	 *
	 * @returns {object}
	 */
	render()
	{
		return Div({ class: 'tab-panel' }, [
			new TabNavigation({
				class: this.class,
				options: this.options
			}),
			Section({
				class: 'tab-content',
				switch: this.addGroup()
			})
		]);
	}

	/**
	 * This will add the group.
	 *
	 * @returns {array}
	 */
    addGroup()
    {
		let option;
		const switches = [];

		const options = this.options;
		for (let i = 0, length = options.length; i < length; i++)
		{
            option = options[i];
			switches.push(
            {
                uri: option.uri || option.href,
                component: option.component,
				title: option.title || null,
				persist: true
            });
		}
		return switches;
    }
}